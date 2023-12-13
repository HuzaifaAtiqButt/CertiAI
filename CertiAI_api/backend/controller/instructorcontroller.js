const Instructor = require("../model/instructor");

const sequelize = require("../config");
const crypto = require("crypto");
const { sendVerificationEmail } = require("./nodemailer/email");
const { Console } = require("console");
const jwt = require("jsonwebtoken");

var old_data = {};
let temporaryUsersrecord = {};
var user_ = {};


const SECRETKEY="CERTI AI";


// Encryption function
function encrypt(text, secretKey) {
  const cipher = crypto.createCipher('aes-256-cbc', secretKey);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

// Decryption function
function decrypt(encryptedText, secretKey) {
  const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
}



const signUp = async (req, res) => {
  try {
    const verificationCode = crypto.randomBytes(2).toString("hex").toUpperCase();
    console.log(verificationCode);

    await sendVerificationEmail(req.body.Email, verificationCode);
    const EncryptedPassword=encrypt(req.body.Pass,SECRETKEY);

    const TemporaryRecord={
      Name: req.body.Name,
      Email: req.body.Email,
      Password: EncryptedPassword,
      OTP:verificationCode,
      Isverified:false
    }
    const newUser = await Instructor.create({
      ...TemporaryRecord,
    });
   

    console.log(user_);
    res.send("verification code sent");
  } catch (error) {
    console.error("can not added user: ", error);
    res.status(500).send(error.message);
  }
};

const verify = async (req, res) => {
  try {
    const Email=req.body.Email;
    const  verificationCode  = req.body.verificationCode;
    console.log("Verification code:", verificationCode);
  console.log("Email is:",Email)

    const clientData = await Instructor.findOne({
      where: {
        Email: Email,
      },
    });
    console.log("Verification code By User:", verificationCode);
    console.log("Verification code By Database:", clientData.OTP);



    if (!clientData ||  clientData.OTP ==='0' || verificationCode !== clientData.OTP) {
      return res.status(400).send("Invalid verification code or user not found");
    }

    
    await clientData.update({ Isverified: true,OTP: '0' });
    


    res.status(200).send("User verified and registered successfully");
  } catch (error) {
    console.error("Error in verifyUser: ", error);
    res.status(500).send(error.message);
  }
};


const Re_send_OTP = async (req, res) => {
  try {
    const verificationCode = crypto.randomBytes(2).toString("hex").toUpperCase();
    console.log("New Verification Code:", verificationCode);
    
    const email = req.body.Email;
    console.log("Email to resend OTP:", email);
    
    await sendVerificationEmail(email, verificationCode);

    const clientData = await Instructor.findOne({
      where: {
        Email: req.body.Email,
      },
    });

    await clientData.update({ OTP: verificationCode });

    // Optionally, you may want to return a success message or handle the response as needed.
    return res.status(200).send("Email Sent Successfully");
  } catch (error) {
    console.error("Error in resending OTP:", error);
    return res.status(500).send("Error While Sending Email");
  }
};

const signIn = async (req, res) => {
  try {
    await sequelize.sync();
    console.log(req.body.pass);
    console.log(req.body.email);
    const EncryptedPassword=encrypt(req.body.pass,SECRETKEY);


    const clientData = await Instructor.findOne({
      where: {
        Password: EncryptedPassword,
        Email: req.body.email,
        Isverified:true
      },
    });

    if (!clientData) {
      console.error("Failed to sign in: User not found");
      return res.status(404).send("Login failed");
    }

    console.log(clientData);
    user_ = clientData;

    // Include client data in the JWT payload
    const payload = {
      role: "client",
      clientData: {
        id: clientData.id,
        name: clientData.Name,
        email: clientData.Email,
        // Add any other client data you want to include
      },
    };

    // Sign the JWT with the payload
    const token = jwt.sign(payload, "NATIONAL UNIVERSITY", { expiresIn: "1h" });
    console.log(token);

    // Include additional client data in the response
    res.status(200).json({
      token,
      message: "Sign in successful",
      clientData: payload.clientData,
    });
  } catch (error) {
    console.error("Failed to sign in:", error);
    return res.status(500).send(error.message);
  }
};





module.exports = {
  signIn,
  signUp,
  verify,
  Re_send_OTP,
};
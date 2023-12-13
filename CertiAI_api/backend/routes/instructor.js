const express = require("express");
const router = express.Router();
// const checkforDuplicate = require("../middleware/checkforduplicate");
// const checkRecord = require("../middleware/check_existing_record");
const Functions = require("../controller/instructorcontroller");


router.post("/signIn", Functions.signIn);
router.post("/signUp", Functions.signUp);
router.post("/verify", Functions.verify);
router.post("/resendotp", Functions.Re_send_OTP);


router.get("*", function (req, res) {
  res.status(404).send("404 error: page not found");
});

module.exports = router;
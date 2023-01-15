const express = require("express");
const router = express.Router();
const {User} = require("../models/user");

// /api/v1/products
router.get(`/`, async (req, res) => {
   const userList = await User.find();

   if(!userList){
      res.status(500).json({success: false})
   }
   res.send(userList);
});
 

module.exports = router;

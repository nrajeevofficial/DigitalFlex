const express = require("express");
const {
  getAllUser,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");
const router = express.Router();

router.route("/getAllUser").get(getAllUser);
router.route("/getOneUser/:id").get(getOneUser);
router.route("/createUser").post(createUser);
router.route("/updateUser/:id").put(updateUser);
router.route("/deleteUser/:id").delete(deleteUser);

module.exports = router;

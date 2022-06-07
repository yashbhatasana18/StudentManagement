const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  getInstitutes,
  addInstitute,
  getInstituteById,
  updateInstitute,
  deleteInstitute,
} = require("../controllers/instituteController");

const router = express.Router();

router.route("/").get(protect, getInstitutes);
router.route("/addInstitute").post(protect, addInstitute);
router
  .route("/:id")
  .get(getInstituteById)
  .put(protect, updateInstitute)
  .delete(protect, deleteInstitute);

module.exports = router;

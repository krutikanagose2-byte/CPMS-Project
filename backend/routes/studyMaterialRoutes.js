const express = require("express");
const {
  getAllStudyMaterials,
  getStudyMaterialById,
  createStudyMaterial,
  updateStudyMaterial,
  deleteStudyMaterial
} = require("../controllers/studyMaterialController");

const router = express.Router();

router.get("/", getAllStudyMaterials);
router.get("/:id", getStudyMaterialById);
router.post("/", createStudyMaterial);
router.put("/:id", updateStudyMaterial);
router.delete("/:id", deleteStudyMaterial);

module.exports = router;

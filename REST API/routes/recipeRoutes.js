const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.post("/", recipeController.createRecipe);
router.get("/", recipeController.getAllRecipes);
router.get("/:id", recipeController.getRecipeById);
router.patch("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;

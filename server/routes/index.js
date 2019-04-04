import express from 'express';
import IngredientController from '../controllers/ingredient';
import middlewares from '../middlewares';

const router = express.Router();


router.get('/meal/', middlewares.validateMealId, IngredientController.getMeal);
router.get('/:id', IngredientController.getMealById);
export default router;

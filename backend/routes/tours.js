import express  from "express"
import { createTour,deleteTour,getAllTour,getSingleTour,getTourbySearch,updateTour,getFeaturedTour, getTourCount } from "./../controllers/tourController.js"

import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post('/',verifyAdmin, createTour);

//update tour
router.put('/:id',verifyAdmin ,updateTour);

//deleteTour
router.delete('/:id',verifyAdmin, deleteTour);

//get single tour
router.get('/:id',getSingleTour);

//getAll tour
router.get('/',getAllTour);

//get tour by search
router.get('/search/getTourBySearch', getTourbySearch);
router.get('/search/getFeaturedTours', getFeaturedTour);
router.get('/search/getTourCount', getTourCount);

export default router
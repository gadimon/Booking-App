import express from 'express'
import Hotel from '../models/Hotel.js';
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from '../controllers/hotel.js';

const router = express.Router();

//create
router.post('/', createHotel);
//update
router.put('/:id', updateHotel);
//delete
router.delete('/:id', deleteHotel);
//get one
router.get('/:id', getHotel);
//getAll
router.get('/', getAllHotels);

export default router;
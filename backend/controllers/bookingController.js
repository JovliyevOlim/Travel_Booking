import Booking from "../models/Booking.js";
import Bookings from "../routes/bookings.js";


//create new booking
export const createBooking = async (req,res)=>{

    const newBooking = new Booking(req.body)

    try {

        const savedBooking = await newBooking.save();

        res.status(200).json({success:true,message:'Your tour is booked',data:savedBooking})

    }catch (e) {
        res.status(500).json({success:true,message:'internal server error'})
    }
}


//get single book
export const getBooking = async (req,res)=>{
    const id = req.params.id

    try {
        const book = await Booking.findById(id);

        res.status(200).json({
            success:true,
            message:'successful',
            data:book
        })
    }catch (e) {
        res.status(404).json({success:true,message:"not found"})
    }

}


//get all booking
export const getAllBooking = async (req,res)=>{
    try {
        const books = await Booking.find();

        res.status(200).json({
            success:true,
            message:'successful',
            data:books
        })
    }catch (e) {
        res.status(500).json({success:true,message:"internal server error"})
    }

}
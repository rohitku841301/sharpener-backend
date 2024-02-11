const Booking = require("../models/booking");

exports.postBooking = async (req, res, next) => {
  try {
    const userDetail = req.body;
    console.log(userDetail.name);
    const bookingData = await Booking.create({
      name: userDetail.name,
      email: userDetail.email,
      phone: userDetail.phone,
    });
    const responseData = {
      userId: bookingData.dataValues.userId,
      name: bookingData.dataValues.name,
      email: bookingData.dataValues.email,
      phone: bookingData.dataValues.phone,
    };
    res.status(201).json({
      message: "Booking created sucessfull",
      responseData: responseData,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getBooking = async (req, res, next) => {
  try {
    const allBookingData = await Booking.findAll();
    const responseData = allBookingData.map((bookingData) => ({
      userId: bookingData.dataValues.userId,
      name: bookingData.dataValues.name,
      email: bookingData.dataValues.email,
      phone: bookingData.dataValues.phone,
    }));
    res.status(201).json({
      message: "successful fetching of booking data",
      responseData: responseData,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteBooking = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const deletedBookingData = await Booking.destroy({
      where: {
        userId: userId,
      },
    });
    if (deletedBookingData > 0) {
      console.log(`Booking with userId ${userId} deleted successfully`);
      // You can send a success response back to the client
      res.status(200).json({ message: "Booking deleted successfully" });
    } else {
      // If no booking was deleted, send a not found response
      res.status(404).json({ message: "Booking not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.editBooking = async (req, res, next) => {
  try{
    console.log("kjn");
    const userId = req.params.userId;
    const edit = await Booking.update(req.body,{where:{userId:userId}})
    // const editData = await Booking.findByPk(userId)
    console.log(edit);
    res.status("201").json({
      message: "updated successfully",
      edit:edit
    })
  }catch(error){
    console.log(error);
  }
};

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js"
import Stripe from "stripe";
import razorpay from 'razorpay'
import { connect } from "mongoose";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//config variables
const currency = "inr";
const deliveryCharge = 50;
const frontend_URL = 'http://localhost:5173';

const razorpayInstance = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//API to make payment of appointment using razorpay
const paymentRazorpay = async (req, res) => {
  try {
    // const { appointmentId } = req.body;
    // console.log(appointmentId);
    // const appointmentData = await appointmentModel.findById(appointmentId);

    // if (!appointmentData || appointmentData.cancelled) {
    //   return res.json({
    //     success: false,
    //     message: "Appointment Cancelled or Not Found",
    //   });
    // }
    const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save();
        const orderId=newOrder._id
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });
    //creating options for razorpay payment
    const options = {
      amount: newOrder.amount * 100 + deliveryCharge*100,
      currency: process.env.CURRENCY,
      receipt: newOrder.userId,
    };

    //creation of an order
    const order = await razorpayInstance.orders.create(options);

    res.json({ success: true, order, orderId });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing User Order for Frontend using stripe
// const placeOrder = async (req, res) => {

//     try {
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address,
//         })
//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//         const line_items = req.body.items.map((item) => ({
//             price_data: {
//                 currency: currency,
//                 product_data: {
//                     name: item.name
//                 },
//                 unit_amount: item.price * 100 
//             },
//             quantity: item.quantity
//         }))

//         line_items.push({
//             price_data: {
//                 currency: currency,
//                 product_data: {
//                     name: "Delivery Charge"
//                 },
//                 unit_amount: deliveryCharge * 100
//             },
//             quantity: 1
//         })

//         const session = await stripe.checkout.sessions.create({
//             success_url: `${frontend_URL}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_URL}/verify?success=false&orderId=${newOrder._id}`,
//             line_items: line_items,
//             mode: 'payment',
//         });

//         res.json({ success: true, session_url: session.url });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }
// }

// Placing User Order for Frontend using stripe
const placeOrderCod = async (req, res) => {

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
            payment: true,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// Listing Order for Admin panel
const listOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// User Orders for Frontend
const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const updateStatus = async (req, res) => {
    console.log(req.body);
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Status Updated" })
    } catch (error) {
        res.json({ success: false, message: "Error" })
    }

}

const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    console.log(orderInfo)
    if (orderInfo.status === "paid") {
       await orderModel.findByIdAndUpdate(req.body.orderId.orderId, { payment: true });
            res.json({ success: true, message: "Paid" })
    } else {
        console.log("failedddd")
        await orderModel.findByIdAndDelete(req.body.orderId.orderId)
      res.json({ success: false, message: "Payment Failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// const verifyOrder = async (req, res) => {
//     const { orderId, success } = req.body;
//     try {
//         if (success === "true") {
//             await orderModel.findByIdAndUpdate(orderId, { payment: true });
//             res.json({ success: true, message: "Paid" })
//         }
//         else {
//             await orderModel.findByIdAndDelete(orderId)
//             res.json({ success: false, message: "Not Paid" })
//         }
//     } catch (error) {
//         res.json({ success: false, message: "Not  Verified" })
//     }

// }

export {  listOrders, userOrders,  updateStatus, placeOrderCod, paymentRazorpay, verifyRazorpay }
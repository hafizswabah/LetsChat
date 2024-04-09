import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    order_id: {
        type: Number,
        required: true,
        unique: true // Ensure order_id is unique
    },
    customer_name: {
        type: String,
        required: true
    },
    order_date_time: {
        type: Date, // Combine date and time into a single field
        required: true
    },
    order_items: {
        type: [String], // If each order can have multiple items, used an array
        required: true
    },
    order_status: {
        type: String,
        enum: ["ready for dispatch", "packaged", "out for delivery", "in transit", "delivered"], // Use enum for predefined status values
        required: true
    },
    estimated_delivery: {
        type: Date,
        required: true
    },
    payment_type: {
        type: String,
        enum: ["Prepaid", "Cash on Delivery"], // Use enum for predefined payment types
        required: true
    },
    coins_used: {
        type: Boolean,
        required: true
    }
});

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;

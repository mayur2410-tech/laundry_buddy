const mongoose = require("mongoose");
const Order = require("../../../models/userOrder");
const User = require("../../../models/user")

const getWorkerOrders = async (req, res) => {
    try {
      const orders = await Order.find().populate('userId').sort({ createdAt: -1 });
  
      if (!orders || orders.length === 0) {
        return res.status(404).json({ message: "No orders found" });
      }
  
      const totalOrders = orders.length;
      const pendingOrders = orders.filter(order => order.status === "Pending").length;
      const completedOrders = orders.filter(order => order.status === "Completed").length;
  
      const formattedOrders = orders.map(order => {
        // Check if userId is populated and not null
        const user = order.userId || {};
        return {
          OrderId: order._id,
          userName: user.name || 'N/A', 
          bagNumber: user.bagNumber,
          numberOfItems: order.numberOfClothes,
          status: order.status,
          date: new Date(order.createdAt).toLocaleDateString('en-US', {
            timeZone: 'Asia/Kolkata',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          }),
          time: new Date(order.createdAt).toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          })
        };
      });
  
      res.status(200).json({
        totalOrders,
        pendingOrders,
        completedOrders,
        orders: formattedOrders
      });
    } catch (error) {
      res.status(500).json({
        message: 'Failed to fetch orders',
        error: error.message,
      });
    }
  };





   const updateOrderStatus = async (req, res) => {
    const { orderId } = req.params;
  
    try {
      const order = await Order.findById(orderId);
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      order.status = 'Completed';
      await order.save();
  
      res.status(200).json({ message: 'Order status updated to Completed', order });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while updating the order status', error });
    }
  };
  


  module.exports = {getWorkerOrders,updateOrderStatus}
  
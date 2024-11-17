import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/order/")
      .then((response) => {
        setOrders(response.data.message); // Assuming `message` contains the orders array
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch orders data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="border h-[80vh] border-slate-200 rounded-sm w-full text-black p-8 overflow-y-auto">
      <h1 className="font-bold text-[2vw] text-blue-800 text-center mb-4">Orders</h1>

      {loading ? (
        <div className="text-center text-blue-600">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="container rounded-md shadow-sm p-4 bg-white">
          <table className="w-full border-collapse border border-slate-200 text-left">
            <thead className="bg-blue-50">
              <tr>
                <th className="border border-slate-300 px-4 py-2">#</th>
                <th className="border border-slate-300 px-4 py-2">Order ID</th>
                <th className="border border-slate-300 px-4 py-2">Customer</th>
                <th className="border border-slate-300 px-4 py-2">Order Amount</th>
                <th className="border border-slate-300 px-4 py-2">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr key={order._id} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="border border-slate-300 px-4 py-2">{index + 1}</td>
                    <td className="border border-slate-300 px-4 py-2">{order._id}</td>
                    <td className="border border-slate-300 px-4 py-2">{order.customerId?.name || "N/A"}</td>
                    <td className="border border-slate-300 px-4 py-2">
                      ${order.orderAmount?.toFixed(2) || 0}
                    </td>
                    <td className="border border-slate-300 px-4 py-2">
                      {order.orderDate ? new Date(order.orderDate).toLocaleDateString() : "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;

import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [stats, setStats] = useState({
    customers: 0,
    messages: 0,
    recentMessages: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [customersRes, messagesRes, recentMessagesRes] = await Promise.all([
          axios.get("http://localhost:5000/user/count"),
          axios.get("http://localhost:5000/communication/count"),
          axios.get("http://localhost:5000/communication/recent"),
        ]);

        setStats({
          customers: customersRes.data.count || 0,
          messages: messagesRes.data.count || 0,
          recentMessages: recentMessagesRes.data || [],
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="text-xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="border h-[80vh] border-slate-200 rounded-sm w-full text-black p-8">
      <h1 className="font-bold text-[2vw] text-[#2d00f7] text-center">CRM Dashboard</h1>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-[#2d00f7] text-white p-8 rounded-md shadow-md text-center">
          <h2 className="text-lg font-semibold">Total Customers</h2>
          <p className="text-2xl font-bold">{stats.customers}</p>
        </div>

        <div className="bg-[#2d00f7] text-white p-8 rounded-md shadow-md text-center">
          <h2 className="text-lg font-semibold">Total Messages</h2>
          <p className="text-2xl font-bold">{stats.messages}</p>
        </div>

        <div className="bg-[#2d00f7] text-white p-8 rounded-md shadow-md text-center">
          <h2 className="text-lg font-semibold text-white">Pending Tasks</h2>
          <p className="text-2xl font-bold">{stats.recentMessages.length}</p>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-md shadow-md p-6">
        <h2 className="font-bold text-lg text-gray-700 mb-4">Recent Messages</h2>
        <div className="overflow-y-scroll max-h-[300px]">
          {stats.recentMessages.length === 0 ? (
            <p className="text-gray-500">No recent messages available.</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b pb-2 text-gray-700">Customer</th>
                  <th className="border-b pb-2 text-gray-700">Message</th>
                  <th className="border-b pb-2 text-gray-700">Status</th>
                  <th className="border-b pb-2 text-gray-700">Sent At</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentMessages.map((msg, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#2d00f7]  hover:text-white transition-all duration-200"
                  >
                    <td className="px-2 rounded-sm">{msg.customerId?.name || "Unknown"}</td>
                    <td className="px-2 rounded-sm">{msg.message}</td>
                    <td className="px-2 rounded-sm">
                      <span
                        className={`px-2 py-1 rounded-md text-white ${
                          msg.status === "SENT" ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {msg.status}
                      </span>
                    </td>
                    <td className="py-2">{new Date(msg.sentAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

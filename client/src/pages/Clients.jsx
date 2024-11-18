import React, { useEffect, useState } from "react";
import axios from "axios";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch clients data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/")
      .then((response) => {
        setClients(response.data.message); // Assuming `message` contains the users array
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch clients data");
        setLoading(false);
      });
  }, []);

  return (
    <div className="border h-[80vh] border-slate-200 rounded-sm w-full text-[#2d00f7] p-8 overflow-y-auto">
      <h1 className="font-bold text-[2vw] text-[#2d00f7] text-center mb-4">Clients</h1>

      {loading ? (
        <div className="text-center text-[#2d00f7]">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="container rounded-md shadow-sm p-4 bg-white">
          <table className="w-full border-collapse border border-slate-200 text-left">
            <thead className="bg-blue-50 text-[#2d00f7]">
              <tr>
                <th className="border border-slate-300 px-4 py-2">#</th>
                <th className="border border-slate-300 px-4 py-2">Name</th>
                <th className="border border-slate-300 px-4 py-2">Email</th>
                <th className="border border-slate-300 px-4 py-2">Total Spending</th>
                <th className="border border-slate-300 px-4 py-2">Visits</th>
                <th className="border border-slate-300 px-4 py-2">Last Visit</th>
              </tr>
            </thead>
            <tbody>
              {clients.length > 0 ? (
                clients.map((client, index) => (
                  <tr
                    key={client._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : ""
                    } hover:bg-[#2d00f7] hover:text-white transition-all duration-200`}
                  >
                    <td className="border border-slate-300 px-4 py-2">{index + 1}</td>
                    <td className="border border-slate-300 px-4 py-2">{client.name}</td>
                    <td className="border border-slate-300 px-4 py-2">{client.email}</td>
                    <td className="border border-slate-300 px-4 py-2">
                      ${client.totalSpending?.toFixed(2) || 0}
                    </td>
                    <td className="border border-slate-300 px-4 py-2">{client.visits || 0}</td>
                    <td className="border border-slate-300 px-4 py-2">
                      {client.lastVisit ? new Date(client.lastVisit).toLocaleDateString() : "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No clients found.
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

export default Clients;

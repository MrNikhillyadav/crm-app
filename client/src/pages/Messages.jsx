import  { useEffect, useState } from 'react';
import axios from 'axios';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/communication/')
      .then((response) => {
        setMessages(response.data.data); 
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch messages data',err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="border h-[80vh] rounded-sm w-full text-black p-6 py-2 overflow-y-auto">
      <h1 className="font-bold text-[2vw] text-[#2d00f7] text-center mb-4">Messages</h1>

      {loading ? (
        <div className="text-center text-[#2d00f7]">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div className="container rounded-md shadow-sm  p-4">
          <table className="w-full border-collapse text-left">
            <thead className="bg-white text-[#2d00f7] rounded-md">
              <tr>
                <th className="border border-slate-300 px-4 py-2">#</th>
                <th className="border border-slate-300 px-4 py-2">Customer Name</th>
                <th className="border border-slate-300 px-4 py-2">Email</th>
                <th className="border border-slate-300 px-4 py-2">Message</th>
                <th className="border border-slate-300 px-4 py-2">Status</th>
                <th className="border border-slate-300 px-4 py-2">Sent At</th>
              </tr>
            </thead>
            <tbody className="rounded-md">
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <tr
                    key={msg._id}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-[#2d00f7] hover:text-white transition-all duration-200`}
                  >
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{msg.customerId?.name || 'N/A'}</td>
                    <td className="px-4 py-2">{msg.customerId?.email || 'N/A'}</td>
                    <td className="px-4 py-2">{msg.message}</td>
                    <td className="px-4 py-2">{msg.status}</td>
                    <td className="px-4 py-2">
                      {msg.sentAt ? new Date(msg.sentAt).toLocaleString() : 'N/A'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No messages found.
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

export default Messages;

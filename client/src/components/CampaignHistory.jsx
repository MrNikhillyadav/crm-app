import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CampaignHistory() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('/api/communication');
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaign history:', error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Campaign History</h2>
      <table>
        <thead>
          <tr>
            <th>Message</th>
            <th>Status</th>
            <th>Sent At</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td>{campaign.message}</td>
              <td>{campaign.status}</td>
              <td>{new Date(campaign.sentAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CampaignHistory;
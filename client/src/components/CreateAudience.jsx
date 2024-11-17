import { useState } from 'react';
import axios from 'axios';

function CreateAudience() {
  const [criteria, setCriteria] = useState({
    totalSpending: '',
    visits: '',
    lastVisit: '',
  });
  const [audienceSize, setAudienceSize] = useState(0);

  const handleChange = (e) => {
    setCriteria({ ...criteria, [e.target.name]: e.target.value });
  };

  const calculateAudienceSize = async () => {
    try {
      const response = await axios.post('/api/customer/calculate', criteria);
      setAudienceSize(response.data.size);
    } catch (error) {
      console.error('Error calculating audience size:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic to save audience segment can be added here
    alert('Audience segment saved!');

  };

  return (
    <div>
      <h2>Create Audience Segment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Total Spending Greater Than:</label>
          <input
            type="number"
            name="totalSpending"
            value={criteria.totalSpending}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Visits Less Than or Equal To:</label>
          <input
            type="number"
            name="visits"
            value={criteria.visits}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Visit (YYYY-MM-DD):</label>
          <input
            type="date"
            name="lastVisit"
            value={criteria.lastVisit}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={calculateAudienceSize}>
          Calculate Audience Size
        </button>
        <p>Calculated Audience Size: {audienceSize}</p>
        <button type="submit">Save Audience Segment</button>
      </form>
    </div>
  );
}

export default CreateAudience;
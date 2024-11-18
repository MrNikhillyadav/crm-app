# CRM Dashboard Application

This project is a CRM (Customer Relationship Management) Dashboard that provides insights and management capabilities for customers and orders. The dashboard displays various statistics such as total customers, total messages, and recent messages. It also allows managing clients and orders with additional features like hover effects on the table rows for better user interaction.

## Features
- View statistics like total customers, total messages, and pending tasks.
- Display recent messages and their status (Sent/Failed).
- View client and order details in a table format with hover effects.
- Responsive design for desktop and mobile views.

## Tech Stack
- **Frontend**: React.js (with Hooks), Axios, Tailwind CSS
- **Backend**: Node.js (Express), MongoDB
- **Deployment**: Vercel for frontend, your preferred backend hosting (e.g., Heroku, DigitalOcean, etc.)

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn
- A code editor like Visual Studio Code (VSCode)

### Clone the Repository

```bash
git clone https://github.com/your-username/crm-dashboard.git
cd crm-dashboard
```

### Install Dependencies
In the root folder of the project, run the following command to install the required packages:

```bash
npm install
```

### Environment Variables
You will need to create a .env file in the root directory of the project. Add the following line to it:

```bash
REACT_APP_API_URL="http://localhost:5000"
```

This URL will be used to make API requests to your backend. Ensure your backend is running on this URL, or replace it with your backend's production URL when deploying.

### Start Development Server
To start the React development server:

```bash
npm start
```

### Usage
- Dashboard: Displays statistics about customers, messages, and recent messages. You can view the total number of      customers, messages, and pending tasks (recent messages).
- Clients: Displays a table of client details such as name, email, total spending, visits, and last visit.
- Orders: Displays a table of order details including order ID, customer name, order amount, and order date.

### Deployment
## Frontend Deployment (Vercel)
## To deploy the frontend on Vercel, follow these steps:

Push your code to a GitHub repository.
Go to Vercel, and sign in (or create an account).
Click on "New Project" and import your GitHub repository.
Vercel will automatically detect that it's a React project and configure the deployment.

Set the environment variable for your backend API URL:
- Go to your project settings on Vercel.

- Under "Environment Variables," add REACT_APP_API_URL and set its value to the backend URL (e.g., https://your-backend-url.com).

## Backend Deployment
To deploy the backend, you can use services like:

- Heroku
- DigitalOcean
- AWS
- Vercel (for serverless backend solutions)
- Make sure your backend is running and accessible from the frontend application.

### Example API Endpoints
- GET /user/count: Get the count of customers.
- GET /communication/count: Get the count of messages.
- GET /communication/recent: Get the most recent messages.

## Contributing
- Fork the repository.
- Create your feature branch: git checkout -b feature-name.
- Commit your changes: git commit -am 'Add new feature'.
- Push to your branch: git push origin feature-name.
- Create a new Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
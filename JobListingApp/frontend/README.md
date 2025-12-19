# Job Listing Web Application

A full-stack job listing application built with React, Express.js, Node.js, MongoDB, and Tailwind CSS.

## Features

- 📋 View job listings in a clean, organized interface
- 🔍 Search jobs by location
- 📱 Responsive design with split-panel layout
- 🎯 Click on jobs to view detailed information
- ⚡ Fast and efficient filtering
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

**Frontend:**

- React.js
- Tailwind CSS
- Lucide React (for icons)

**Backend:**

- Node.js
- Express.js
- MongoDB
- Mongoose

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation & Setup

### 1. Backend Setup

```bash
# Create project directory
mkdir job-listing-app
cd job-listing-app

# Initialize npm and install backend dependencies
npm init -y
npm install express mongoose cors dotenv

# Install nodemon for development
npm install --save-dev nodemon

# Create server.js file
# Copy the backend code provided into server.js
```

### 2. MongoDB Setup

**Option A: Local MongoDB**

```bash
# Make sure MongoDB is installed and running
mongod
```

**Option B: MongoDB Atlas (Cloud)**

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update connection string in server.js

### 3. Import Data to MongoDB

Create a file `importData.js`:

```javascript
const mongoose = require("mongoose");
const Job = require("./server"); // Import Job model

const jobs = [
  // Paste your JSON data here
];

mongoose
  .connect("mongodb://localhost:27017/joblistings")
  .then(async () => {
    console.log("Connected to MongoDB");

    // Transform and insert data
    const transformedJobs = jobs.map((job) => ({
      jobId: job["Job ID (Numeric)"],
      title: job.title,
      company: job.company,
      location: job.location,
      jobLink: job.job_link,
      seniorityLevel: job.seniority_level,
      employmentType: job.employment_type,
      source: job.source,
      experience: job.experience,
      companyUrl: job.company_url,
      companyImageUrl: job.companyImageUrl,
      postedDateTime: job.postedDateTime?.$date
        ? new Date(job.postedDateTime.$date)
        : new Date(),
      minExp: job.min_exp,
      maxExp: job.max_exp,
      country: job.country,
      companyType: job.companytype,
    }));

    await Job.deleteMany({});
    await Job.insertMany(transformedJobs);

    console.log("Data imported successfully!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
```

Run the import:

```bash
node importData.js
```

### 4. Frontend Setup (React)

```bash
# Create React app
npm create vite@latest frontend
cd frontend

# Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite

# Add the @tailwindcss/vite plugin to your Vite configuration.

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

# Add an @import to your CSS file(index.css) that imports Tailwind CSS.

@import "tailwindcss";

# Install additional dependencies
npm install lucide-react
```

### 5. Environment Variables

Create `.env` file in root directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/joblistings
```

Update index.js to use environment variables:

```javascript
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/joblistings";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

## Running the Application

### Start Backend Server

```bash
# In root directory
npm run dev
# Or
node index.js
```

Server will run on http://localhost:5000

### Start Frontend

```bash
# In client directory
cd frontend
npm start
```

Frontend will run on http://localhost:3000

## API Endpoints

### Get All Jobs

```
GET /api/jobs
```

### Search Jobs by Location

```
GET /api/jobs/search?location=Bengaluru
```

### Get Single Job

```
GET /api/jobs/:id
```

### Import Jobs (Initial Setup)

```
POST /api/jobs/import
Body: JSON array of jobs
```

## MongoDB Schema

```javascript
{
  jobId: String,
  title: String,
  company: String,
  location: String,
  jobLink: String,
  seniorityLevel: String,
  employmentType: String,
  source: String,
  experience: String,
  companyUrl: String,
  companyImageUrl: String,
  postedDateTime: Date,
  minExp: Number,
  maxExp: Number,
  country: String,
  companyType: String
}
```

## Features Walkthrough

### Location Search

1. Enter location in search bar (e.g., "Bengaluru", "Pune", "India")
2. Click Search or press Enter
3. Job list updates to show matching jobs
4. First matching job is automatically selected

### View Job Details

1. Click on any job card in the left panel
2. Job details appear in the right panel
3. Details include: title, company, location, employment type, experience, qualifications
4. "Quick Apply" button links to original job posting

### Responsive Layout

- Split panel design: Job list (left) + Job details (right)
- Sticky search bar at top
- Scrollable job list and details
- Hover effects and selection highlighting

## Project Structure

```
JobListingApp/
│
├── backend/
│   ├── config/
│   │   └── db.js                    # MongoDB connection logic
│   │
│   ├── controllers/
│   │   └── job.controller.js        # Job APIs (get all, search, get by ID)
│   │
│   ├── models/
│   │   └── job.model.js             # Mongoose Job schema
│   │
│   ├── routes/
│   │   └── job.routes.js             # Job routes
│   │
│   ├── data/
│   │   └── jobs.json                 # Raw job data (JSON source file)
│   │
│   ├── importData.js                 # Script to import JSON data into MongoDB
│   │
│   ├── .env                          # Environment variables
│   ├── .env.example                  # Sample env file
│   ├── package.json
│   ├── package-lock.json
│   │
│   └── index.js                      # Backend entry point (Express server)
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobList/
│   │   │   │   ├── JobList.jsx       # List of jobs (left panel)
│   │   │   │   └── JobCard.jsx       # Single job card
│   │   │   │
│   │   │   ├── JobDetails/
│   │   │   │   └── JobDetails.jsx    # Job details view (right panel)
│   │   │   │
│   │   │   ├── SearchBar/
│   │   │   │   └── SearchBar.jsx     # Location search bar
│   │   │   │
│   │   │   └── common/
│   │   │       ├── Loading.jsx       # Loading spinner
│   │   │       └── ErrorMessage.jsx  # Error message UI
│   │   │
│   │   ├── hooks/
│   │   │   └── useJobs.js             # Custom hook for jobs & search logic
│   │   │
│   │   ├── services/
│   │   │   └── api.js                 # API calls (fetch jobs, search jobs)
│   │   │
│   │   ├── utils/
│   │   │   └── dateFormatter.js       # Date formatting utility
│   │   │
│   │   ├── App.jsx                    # Root React component
│   │   ├── main.jsx                   # React entry point
│   │   ├── index.css                  # Tailwind base styles
│   │
│   ├── .env                           # Frontend env (VITE_API_URL)
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
├── .gitignore
├── README.md

```

## Troubleshooting

**MongoDB Connection Error:**

- Ensure MongoDB is running
- Check connection string
- Verify network access (for MongoDB Atlas)

**CORS Issues:**

- Ensure cors middleware is properly configured
- Check if backend URL matches in frontend

**Port Already in Use:**

- Change port in .env file
- Kill process using the port: `lsof -ti:5000 | xargs kill`

## Future Enhancements

- Add pagination for large job lists
- Implement advanced filters (salary, company size, experience)
- Add user authentication
- Save favorite jobs
- Apply job tracking
- Email notifications for new jobs
- Dark mode support

## License

MIT

## Contact

For questions or support, please open an issue in the repository.

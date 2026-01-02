# 🚀 JobHunt - Online Job Portal

A modern, full-stack job portal application built with React, Node.js, and MongoDB. This platform connects job seekers with recruiters, offering a seamless experience for both parties.

![Job Portal](https://img.shields.io/badge/Job-Portal-blue.svg)
![React](https://img.shields.io/badge/React-18.x-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-16.x-green.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue.svg)

--
## ✨LiveDemo : https://online-job-portal-client.vercel.app/

--

📸 Sample Screenshots

** Home Page **

![image](https://github.com/user-attachments/assets/b62755a5-6c3b-4a36-9b0a-119f1e2a379c)

** User DashBoard **

![image](https://github.com/user-attachments/assets/2c5c22ce-a067-478b-9581-f73a74034b33)

![image](https://github.com/user-attachments/assets/14d0699e-c38c-4a8e-998d-b62c6e84bfe7)

--
** Recruiter Dashboard **

![image](https://github.com/user-attachments/assets/e0a510dd-0f87-4615-bcf0-a53402bba0af)





## ✨ Features

### 👥 For Job Seekers
- **🔐 Secure Authentication** - Powered by Clerk
- **📱 Responsive User Dashboard** - Manage profile, applications, and resume
- **🔍 Advanced Job Search** - Filter by category, location, and keywords
- **📊 Application Tracking** - Monitor application status and analytics
- **📄 Resume Management** - Upload and manage resume (PDF support)
- **🎯 Smart Job Matching** - Latest jobs displayed first with "NEW" badges
- **📈 Profile Analytics** - Track profile completeness and application success

### 🏢 For Recruiters
- **🔐 Company Authentication** - Secure recruiter login system
- **📋 Job Management** - Post, edit, and manage job listings
- **👀 Application Management** - View and process candidate applications
- **📊 Recruiter Dashboard** - Analytics and company overview
- **🎨 Rich Text Editor** - Create detailed job descriptions
- **📱 Mobile-Responsive** - Manage jobs on any device

### 🎨 Design & UX
- **📱 Mobile-First Design** - Optimized for all screen sizes
- **🎨 Modern UI/UX** - Clean, professional interface with Tailwind CSS
- **⚡ Fast Performance** - Optimized loading and smooth animations
- **🔍 Intuitive Search** - Easy-to-use job filtering and search
- **📊 Visual Analytics** - Charts and progress indicators

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **Moment.js** - Date manipulation and formatting
- **React Quill** - Rich text editor for job descriptions

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **Multer** - File upload handling
- **Cloudinary** - Image and file storage

### Authentication & Services
- **Clerk** - User authentication and management
- **Cloudinary** - File storage and image optimization
- **MongoDB Atlas** - Cloud database hosting

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Clerk account
- Cloudinary account

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/job-portal-project.git
cd job-portal-project
```

### 2. Install Dependencies

**Server Dependencies:**
```bash
cd server
npm install
```

**Client Dependencies:**
```bash
cd ../client
npm install
```

### 3. Environment Variables

Create a `.env` file in the `server` directory:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# JWT
JWT_SECRET=your_jwt_secret
```

Create a `.env.local` file in the `client` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

### 4. Run the Application

**Start the Server:**
```bash
cd server
npm run dev
```

**Start the Client:**
```bash
cd client
npm run dev
```

## 📁 Project Structure

```
job-portal-project/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images and icons
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context
│   │   ├── pages/         # Page components
│   │   └── main.jsx       # App entry point
│   ├── index.html
│   └── package.json
├── server/                # Node.js backend
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Custom middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── uploads/          # File uploads
│   ├── server.js         # Server entry point
│   └── package.json
├── vercel.json           # Vercel deployment config
└── README.md
```

## 🔗 API Endpoints

### Job Routes
- `GET /api/jobs` - Get all jobs
- `POST /api/jobs` - Create new job (Recruiter only)
- `PUT /api/jobs/:id` - Update job (Recruiter only)
- `DELETE /api/jobs/:id` - Delete job (Recruiter only)

### User Routes
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/update-profile` - Update user profile
- `POST /api/users/update-resume` - Upload resume
- `GET /api/users/applications` - Get user applications

### Company Routes
- `POST /api/company/register` - Register company
- `POST /api/company/login` - Company login
- `GET /api/company/applications` - Get company applications

### Application Routes
- `POST /api/applications/apply` - Apply for job
- `GET /api/applications` - Get applications
- `PUT /api/applications/:id` - Update application status

## 🚀 Deployment

This project is configured for easy deployment on Vercel:

1. **Push to GitHub** - Ensure your code is in a GitHub repository
2. **Connect to Vercel** - Import your repository in Vercel dashboard
3. **Set Environment Variables** - Add all required environment variables in Vercel
4. **Deploy** - Vercel will automatically build and deploy your application

### Environment Variables for Deployment
Make sure to set all environment variables from your `.env` files in your deployment platform.

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **📱 Mobile phones** (320px+)
- **📱 Tablets** (768px+)
- **💻 Desktop** (1024px+)
- **🖥️ Large screens** (1280px+)

## 🔒 Security Features

- **🛡️ Secure Authentication** - Clerk integration with JWT
- **🔐 Protected Routes** - Authentication middleware
- **📁 File Upload Security** - File type and size validation
- **🚫 XSS Protection** - Input sanitization
- **🔒 Environment Variables** - Sensitive data protection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- **Clerk** for authentication services
- **Cloudinary** for file storage
- **MongoDB Atlas** for database hosting
- **Tailwind CSS** for styling framework
- **React** community for excellent documentation

## 📞 Contact

For any questions or support, please contact:
- **Email**: venkatsunkara9959@gmail.com
- **Linkedin**: www.linkedin.com/in/venkat-sunkara

---

<div align="center">
  <p>Made with ❤️ by Venkt </p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>

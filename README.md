# MBC Hackathon Project

A modern mobile application built with React Native and Express.js for the MBC Hackathon.

## Team

- **Team Lead**: [Your Name]
- **Frontend Developer**: [Team Member Name]
- **Backend Developer**: [Team Member Name]
- **UI/UX Designer**: [Team Member Name]

## Tech Stack

### Frontend
- **React Native** - Cross-platform mobile development
- **React Navigation** - Navigation and routing
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **RESTful API** - API architecture

### Development Tools
- **Git** - Version control
- **VS Code** - Code editor
- **Postman** - API testing

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- React Native development environment
- iOS Simulator / Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd MBC-Hackathon-Project
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the React Native app**
   ```bash
   cd frontend
   npx react-native run-android
   # or for iOS
   npx react-native run-ios
   ```

### Development

- Backend runs on `http://localhost:3000`
- React Native metro bundler runs on `http://localhost:8081`

## Project Structure

```
MBC-Hackathon-Project/
├── frontend/          # React Native mobile app
├── backend/           # Express.js API server
├── docs/             # Documentation
├── scripts/          # Utility scripts
└── .github/          # GitHub templates and workflows
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
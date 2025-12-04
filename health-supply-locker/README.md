# Health Locker - Privacy-First Healthcare Supply Chain

A comprehensive web application demonstrating zero-knowledge proofs for healthcare supply chain verification, featuring zkML, zkLocation, and verifiable credentials.

## 🚀 Features

### Core Technologies
- **zkML (Zero-Knowledge Machine Learning)**: Run AI models on-device without data leakage
- **zkLocation**: Prove location within geofences without revealing GPS coordinates
- **Verifiable Credentials**: Digital certificates from manufacturer to patient

### App Features
- **Landing Page**: Professional marketing site with feature overview
- **Authentication**: Secure login/signup with healthcare provider accounts
- **Dashboard**: Comprehensive overview with real-time statistics
- **Mobile Demo**: Interactive demonstration of all three technologies
- **Supply Chain Management**: Track and verify complete supply chains
- **Notifications**: Alert system for critical supply issues
- **Profile Management**: User account and security settings

## 📁 Project Structure

```
health-supply-locker/
├── index.html                 # Landing page
├── pages/
│   ├── login.html            # Authentication page
│   └── dashboard.html        # Main dashboard (with integrated mobile demo)
├── css/
│   ├── styles.css            # Global styles
│   ├── landing.css           # Landing page styles
│   ├── auth.css              # Authentication styles
│   └── dashboard.css         # Dashboard & mobile demo styles
├── js/
│   ├── app.js                # Main app functionality
│   ├── auth.js               # Authentication logic
│   └── dashboard.js          # Dashboard & mobile demo functionality
└── README.md
```

## 🛠️ Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Local web server (for proper functionality)

### Installation

1. **Clone or download the project**
   ```bash
   # Navigate to the health-supply-locker directory
   cd health-supply-locker
   ```

2. **Start a local web server**
   ```bash
   # Using Python (if available)
   python -m http.server 8080

   # Using Node.js (if available)
   npx http-server -p 8080

   # Or use any local server of your choice
   ```

3. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📱 Usage Guide

### 1. Landing Page
- Browse the feature overview and security information
- Click "Get Started" to access the authentication system

### 2. Authentication
- **Sign Up**: Create a new healthcare provider account
- **Sign In**: Login with existing credentials
- Password strength indicator and validation included

### 3. Dashboard
- **Overview**: Real-time statistics and quick actions
- **Mobile Demo**: Interactive demonstration of zkML, zkLocation, and VC
- **Navigation**: Access different sections via sidebar

### 4. Mobile Demo Features
- **zkML Tab**: Generate privacy-preserving proofs for supply predictions
- **zkLocation Tab**: Verify delivery locations without GPS exposure
- **Credentials Tab**: Manage verifiable credentials and supply chain verification

## 🔒 Security Features

### Zero-Knowledge Proofs
- **Confidentiality**: Prove statements without revealing underlying data
- **Local Computation**: All sensitive processing happens on-device
- **Blockchain Verification**: Immutable proof storage on Base L2

### Privacy by Design
- No personal health data leaves your device
- Cryptographic verification without data exposure
- Secure credential management

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Success**: Green (#10b981)
- **Warning**: Orange (#f59e0b)
- **Error**: Red (#ef4444)
- **Background**: Clean whites and grays

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Code Font**: JetBrains Mono
- **Hierarchy**: Clear heading structure with proper spacing

### Components
- Modern card-based layouts
- Smooth animations and transitions
- Responsive design for all devices
- Accessible form controls and navigation

## 🏗️ Technical Implementation

### Frontend Architecture
- **Vanilla JavaScript**: No frameworks for maximum compatibility
- **Modular CSS**: Organized stylesheets for different sections
- **Local Storage**: Client-side data persistence
- **Responsive Design**: Mobile-first approach

### Key Technologies Demonstrated
- **Zero-Knowledge Proofs**: Privacy-preserving verification
- **Web Cryptography API**: Browser-based cryptographic operations
- **Progressive Web App**: Service worker and offline capabilities
- **Modern CSS**: Grid, Flexbox, and CSS custom properties

## 📊 Dashboard Features

### Real-time Statistics
- Verification counts and success rates
- System health monitoring
- Recent activity feed
- Critical alerts and notifications

### Interactive Elements
- Live data updates
- Animated counters
- Status indicators
- Notification system

## 🔧 Development

### Adding New Features
1. Create new pages in the `pages/` directory
2. Add corresponding CSS in `css/` directory
3. Implement JavaScript logic in `js/` directory
4. Update navigation and routing

### Customization
- Modify color variables in CSS custom properties
- Update content in HTML templates
- Extend JavaScript functionality as needed

## 📈 Performance

### Optimizations
- Lazy loading of page content
- Efficient CSS with minimal repaints
- Optimized images and assets
- Minimal JavaScript bundle

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

This is a demonstration project showcasing privacy-preserving healthcare technology. For production use, consider:

- Backend API integration
- Database implementation
- Enhanced security measures
- User testing and validation
- Accessibility improvements

## 📄 License

This project is for educational and demonstration purposes. See individual file headers for licensing information.

## 🆘 Support

For questions about the implementation or privacy-preserving technologies:

- Review the inline code comments
- Check the browser console for debugging information
- Refer to the technical documentation in each JavaScript file

---

**Built with ❤️ for healthcare privacy and security**

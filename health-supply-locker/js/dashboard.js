// Dashboard JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

// Initialize Dashboard
function initializeDashboard() {
    checkAuthentication();
    setupNavigation();
    setupMobileMenu();
    loadDashboardData();
    setupPageSwitching();
}

// Check Authentication
function checkAuthentication() {
    const isLoggedIn = Storage.get('isLoggedIn', false);
    const currentUser = Storage.get('currentUser');

    if (!isLoggedIn || !currentUser) {
        // Redirect to login if not authenticated
        window.location.href = 'login.html';
        return;
    }

    // Update UI with user data
    updateUserInterface(currentUser);
}

// Update User Interface
function updateUserInterface(user) {
    // Update header user info
    const userGreeting = document.querySelector('.user-greeting');
    const userAvatar = document.querySelector('.user-avatar-small');

    if (userGreeting) {
        userGreeting.textContent = `Welcome, ${user.firstName || 'User'}`;
    }

    if (userAvatar) {
        userAvatar.textContent = user.avatar || 'U';
    }

    // Update sidebar user info
    const sidebarUserName = document.querySelector('.user-name');
    const sidebarUserRole = document.querySelector('.user-role');
    const sidebarUserAvatar = document.querySelector('.user-avatar');

    if (sidebarUserName) {
        sidebarUserName.textContent = `${user.firstName} ${user.lastName}`;
    }
    if (sidebarUserRole) {
        sidebarUserRole.textContent = user.role || 'User';
    }
    if (sidebarUserAvatar) {
        sidebarUserAvatar.textContent = user.avatar || 'U';
    }
}

// Setup Navigation
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });
}

// Setup Mobile Menu
function setupMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('show');
            }
        });
    }
}

// Navigate to Page
function navigateToPage(pageName) {
    // Update navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeNav = document.querySelector(`[data-page="${pageName}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }

    // Update page content
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');

        // Update page title
        const pageTitles = {
            overview: 'Dashboard Overview',
            verification: 'Mobile Verification',
            'supply-chain': 'Supply Chain Management',
            credentials: 'Verifiable Credentials',
            notifications: 'Notifications',
            analytics: 'Analytics Dashboard',
            profile: 'Profile Settings'
        };

        const pageTitle = document.getElementById('page-title');
        if (pageTitle) {
            pageTitle.textContent = pageTitles[pageName] || 'Dashboard';
        }
    }
}

// Setup Page Switching
function setupPageSwitching() {
    // Handle action card clicks
    document.querySelectorAll('.action-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('onclick');
            if (href) {
                const page = href.match(/navigateToPage\('([^']+)'\)/)[1];
                navigateToPage(page);
            }
        });
    });
}

// Load Dashboard Data
function loadDashboardData() {
    // Simulate loading dashboard stats
    updateDashboardStats();

    // Load recent activity
    loadRecentActivity();

    // Load system status
    loadSystemStatus();

    // Initialize mobile demo if on verification page
    if (document.getElementById('verification-page').classList.contains('active')) {
        initializeMobileDemo();
    }
}

// Update Dashboard Stats
function updateDashboardStats() {
    // Simulate real-time data updates
    const stats = {
        verifications: 1247,
        alerts: 3,
        successRate: 99.8,
        avgTime: 2.3
    };

    // Update stat numbers with animation
    animateNumber('verifications-today', stats.verifications);
    animateNumber('critical-alerts', stats.alerts);
    animateNumber('success-rate', stats.successRate);
    animateNumber('avg-verification-time', stats.avgTime);
}

// Animate Number Counter
function animateNumber(elementId, targetValue) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const startValue = parseFloat(element.textContent) || 0;
    const duration = 1000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);

        const currentValue = startValue + (targetValue - startValue) * easeOut;

        if (elementId.includes('rate')) {
            element.textContent = currentValue.toFixed(1);
        } else if (elementId.includes('time')) {
            element.textContent = currentValue.toFixed(1);
        } else {
            element.textContent = Math.floor(currentValue);
        }

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// Load Recent Activity
function loadRecentActivity() {
    const activities = [
        {
            icon: 'check-circle',
            type: 'success',
            title: 'Supply Chain Verified',
            desc: 'Insulin batch #INS-2024-12345 verified successfully',
            time: '2 minutes ago'
        },
        {
            icon: 'exclamation-triangle',
            type: 'warning',
            title: 'Low Stock Alert',
            desc: 'Mask inventory below threshold at LA Shelter',
            time: '15 minutes ago'
        },
        {
            icon: 'info-circle',
            type: 'info',
            title: 'New Credential Issued',
            desc: 'Temperature compliance certificate added to wallet',
            time: '1 hour ago'
        },
        {
            icon: 'check-circle',
            type: 'success',
            title: 'Location Proof Generated',
            desc: 'Delivery verified at NYC Community Clinic',
            time: '2 hours ago'
        }
    ];

    const activityList = document.querySelector('.activity-list');
    if (!activityList) return;

    activityList.innerHTML = '';

    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activity-item';
        activityItem.innerHTML = `
            <div class="activity-icon ${activity.type}">
                <i class="fas fa-${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.title}</div>
                <div class="activity-desc">${activity.desc}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        `;
        activityList.appendChild(activityItem);
    });
}

// Load System Status
function loadSystemStatus() {
    const systems = [
        {
            name: 'Base L2 Network',
            status: 'online',
            desc: 'All systems operational'
        },
        {
            name: 'Zero-Knowledge Services',
            status: 'online',
            desc: 'Proof generation active'
        },
        {
            name: 'Supply Chain Monitor',
            status: 'warning',
            desc: '3 alerts pending review'
        }
    ];

    const statusGrid = document.querySelector('.status-grid');
    if (!statusGrid) return;

    systems.forEach(system => {
        const statusItem = document.createElement('div');
        statusItem.className = 'status-item';
        statusItem.innerHTML = `
            <div class="status-indicator ${system.status}"></div>
            <div class="status-info">
                <div class="status-name">${system.name}</div>
                <div class="status-desc">${system.desc}</div>
            </div>
        `;
        statusGrid.appendChild(statusItem);
    });
}

// Logout Function
function logout() {
    // Clear user session
    Storage.remove('currentUser');
    Storage.remove('isLoggedIn');
    Storage.remove('rememberMe');

    showToast('Logged out successfully', 'info');

    // Redirect to landing page
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1000);
}

// Refresh Dashboard Data
function refreshDashboard() {
    showSpinner();

    // Simulate data refresh
    setTimeout(() => {
        loadDashboardData();
        hideSpinner();
        showToast('Dashboard refreshed', 'success');
    }, 1500);
}

// Mobile Demo Integration
function initializeMobileDemo() {
    // Mobile demo variables (similar to mobile.js)
    const airplaneToggle = document.getElementById('airplane-toggle');
    const generateBtn = document.getElementById('generate-btn');
    const submitBtn = document.getElementById('submit-btn');
    const submitCard = document.getElementById('submit-card');
    const terminal = document.getElementById('terminal-output');
    const submitStatus = document.getElementById('submit-status');
    const signalIcon = document.getElementById('signal-icon');
    const wifiIcon = document.getElementById('wifi-icon');

    let proofGenerated = false;

    // Navigation variables
    const navHome = document.getElementById('nav-home');
    const navDelivery = document.getElementById('nav-delivery');
    const navCredentials = document.getElementById('nav-credentials');
    const homeView = document.getElementById('home-view');
    const deliveryView = document.getElementById('delivery-view');
    const credentialsView = document.getElementById('credentials-view');

    // Location proof variables
    const verifyLocBtn = document.getElementById('verify-loc-btn');
    const locTerminal = document.getElementById('loc-terminal');

    // Chain verification variables
    const verifyChainBtn = document.getElementById('verify-chain-btn');
    const chainTerminal = document.getElementById('chain-terminal');

    // 1. Handle Airplane Mode
    if (airplaneToggle) {
        airplaneToggle.addEventListener('change', (e) => {
            const isOffline = e.target.checked;
            if (isOffline) {
                signalIcon.style.opacity = '0.3';
                wifiIcon.style.opacity = '0.3';
                submitCard.classList.add('disabled');
                submitBtn.disabled = true;
                submitStatus.textContent = '';
                if (proofGenerated) {
                    submitStatus.textContent = '⚠️ Connect to internet to submit proof';
                    submitStatus.style.color = '#ff9f0a';
                }
            } else {
                signalIcon.style.opacity = '1';
                wifiIcon.style.opacity = '1';
                if (proofGenerated) {
                    submitCard.classList.remove('disabled');
                    submitBtn.disabled = false;
                    submitStatus.textContent = '';
                }
            }
        });
    }

    // 2. Generate Proof
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            terminal.style.display = 'block';
            terminal.innerHTML = '<div class="line">> Initializing Secure Enclave...</div>';
            generateBtn.disabled = true;
            generateBtn.innerHTML = '<span class="btn-icon">⏳</span> Computing...';

            await wait(800);
            log('> Loading ONNX Model (2.4MB)...');
            await wait(800);
            log('> Reading Local Data: [Insulin, NYC]');
            await wait(1000);
            log('> Generating Witness...');
            await wait(1200);
            log('> Generating ZK-Proof (Halo2)...');
            await wait(800);
            log('SUCCESS: Proof Generated', 'success');
            log('Hash: 0x8f2...b91', 'success');

            proofGenerated = true;
            generateBtn.innerHTML = '<span class="btn-icon">✅</span> Proof Ready';
            generateBtn.style.background = '#30d158';

            if (!airplaneToggle.checked) {
                submitCard.classList.remove('disabled');
                submitBtn.disabled = false;
            } else {
                submitStatus.textContent = '⚠️ Connect to internet to submit proof';
                submitStatus.style.color = '#ff9f0a';
            }
        });
    }

    // 3. Submit to Chain
    if (submitBtn) {
        submitBtn.addEventListener('click', async () => {
            submitBtn.innerHTML = '<span class="btn-icon">☁️</span> Submitting...';
            submitBtn.disabled = true;
            await wait(1500);
            submitBtn.innerHTML = '<span class="btn-icon">✅</span> Verified on Base';
            submitBtn.style.color = '#30d158';
            submitBtn.style.borderColor = '#30d158';
            submitBtn.style.background = 'rgba(48, 209, 88, 0.1)';
            submitStatus.textContent = 'Transaction Confirmed: Block #192834';
            submitStatus.style.color = '#30d158';
        });
    }

    // Mobile Navigation
    function switchMobileView(viewName) {
        homeView.style.display = 'none';
        deliveryView.style.display = 'none';
        credentialsView.style.display = 'none';

        navHome.classList.remove('active');
        navDelivery.classList.remove('active');
        navCredentials.classList.remove('active');

        if (viewName === 'home') {
            homeView.style.display = 'block';
            navHome.classList.add('active');
        } else if (viewName === 'delivery') {
            deliveryView.style.display = 'block';
            navDelivery.classList.add('active');
        } else if (viewName === 'credentials') {
            credentialsView.style.display = 'block';
            navCredentials.classList.add('active');
        }
    }

    if (navHome) navHome.addEventListener('click', () => switchMobileView('home'));
    if (navDelivery) navDelivery.addEventListener('click', () => switchMobileView('delivery'));
    if (navCredentials) navCredentials.addEventListener('click', () => switchMobileView('credentials'));

    // 5. zkLocation Logic
    if (verifyLocBtn) {
        verifyLocBtn.addEventListener('click', async () => {
            locTerminal.style.display = 'block';
            locTerminal.innerHTML = '<div class="line">> Accessing Secure Enclave GPS...</div>';
            verifyLocBtn.disabled = true;
            verifyLocBtn.innerHTML = '<span class="btn-icon">🛰️</span> Verifying...';

            await wait(1000);
            logLoc('> Current Pos: [HIDDEN]');
            logLoc('> Target Zone: NYC_CLINIC_A');
            await wait(1000);
            logLoc('> Calculating Geofence Circuit...');
            logLoc('> Distance < 50m ? CHECKING...');
            await wait(1200);
            logLoc('> Generating zk-SNARK Proof...');
            await wait(800);
            logLoc('SUCCESS: Location Verified', 'success');
            logLoc('Proof: 0x9a...2k1', 'success');

            verifyLocBtn.innerHTML = '<span class="btn-icon">✅</span> Arrival Confirmed';
            verifyLocBtn.style.background = '#30d158';
        });
    }

    // 6. Supply Chain Verification
    if (verifyChainBtn) {
        verifyChainBtn.addEventListener('click', async () => {
            chainTerminal.style.display = 'block';
            chainTerminal.innerHTML = '<div class="line">> Initializing verification...</div>';
            verifyChainBtn.disabled = true;
            verifyChainBtn.innerHTML = '<span class="btn-icon">⏳</span> Verifying...';

            await wait(1000);
            logChain('> Verificando Vendor Credential (FDA)...');
            await wait(1200);
            logChain('✓ Vendor: Manufacturer Certificate Valid', 'success');
            logChain('  - Batch #INS-2024-12345 verified');
            logChain('  - FDA compliance confirmed');

            await wait(1000);
            logChain('> Verifying Supplier Credential (State Board)...');
            await wait(1200);
            logChain('✓ Supplier: Licensed Pharmacy Valid', 'success');
            logChain('  - NY License active');
            logChain('  - Temperature compliance verified');

            await wait(1000);
            logChain('> Verifying User Credential (Health Dept)...');
            await wait(1200);
            logChain('✓ User: Patient Authorization Valid', 'success');
            logChain('  - Prescription valid through 2025-12-31');

            await wait(800);
            logChain('', '');
            logChain('═══════════════════════════════', '');
            logChain('✅ SUPPLY CHAIN VERIFIED', 'success');
            logChain('Complete trust from manufacturer to patient', 'success');
            logChain('═══════════════════════════════', '');

            verifyChainBtn.innerHTML = '<span class="btn-icon">✅</span> Supply Chain Verified';
            verifyChainBtn.style.background = '#30d158';
        });
    }

    // Helper functions for mobile demo
    function log(text, className = '') {
        const div = document.createElement('div');
        div.className = `line ${className}`;
        div.textContent = text;
        if (terminal) {
            terminal.appendChild(div);
            terminal.scrollTop = terminal.scrollHeight;
        }
    }

    function logLoc(text, className = '') {
        const div = document.createElement('div');
        div.className = `line ${className}`;
        div.textContent = text;
        if (locTerminal) {
            locTerminal.appendChild(div);
            locTerminal.scrollTop = locTerminal.scrollHeight;
        }
    }

    function logChain(text, className = '') {
        const div = document.createElement('div');
        div.className = `line ${className}`;
        div.textContent = text;
        if (chainTerminal) {
            chainTerminal.appendChild(div);
            chainTerminal.scrollTop = chainTerminal.scrollHeight;
        }
    }

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Export functions for global use
window.navigateToPage = navigateToPage;
window.logout = logout;
window.refreshDashboard = refreshDashboard;

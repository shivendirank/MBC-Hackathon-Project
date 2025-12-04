// Authentication JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
});

// Initialize Authentication
function initializeAuth() {
    setupTabSwitching();
    setupPasswordStrength();
    setupFormValidation();
}

// Tab Switching
function setupTabSwitching() {
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');

    // Update forms
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById(`${tabName}-form`).classList.add('active');
}

// Password Strength Monitoring
function setupPasswordStrength() {
    const passwordInput = document.getElementById('signup-password');

    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            updatePasswordStrength(this.value);
        });
    }
}

// Form Validation Setup
function setupFormValidation() {
    // Login form
    const loginForm = document.getElementById('login-form');
    if (loginForm && loginForm.tagName === 'FORM') {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Signup form
    const signupForm = document.getElementById('signup-form');
    if (signupForm && signupForm.tagName === 'FORM') {
        signupForm.addEventListener('submit', handleSignup);
    }
}

// Handle Login
async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    // Basic validation
    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    if (!password) {
        showToast('Please enter your password', 'error');
        return;
    }

    // Show loading
    showSpinner();

    try {
        // Simulate API call
        await simulateApiCall(2000);

        // For demo purposes, accept any email/password
        // In real app, this would validate against backend

        // Store user session
        const user = {
            id: 1,
            email: email,
            name: 'Dr. Jane Doe',
            role: 'Healthcare Provider',
            avatar: 'JD',
            loginTime: new Date().toISOString()
        };

        Storage.set('currentUser', user);
        Storage.set('isLoggedIn', true);

        if (rememberMe) {
            Storage.set('rememberMe', true);
        }

        showToast('Login successful! Redirecting...', 'success');

        // Redirect to dashboard after short delay
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);

    } catch (error) {
        showToast('Login failed. Please try again.', 'error');
    } finally {
        hideSpinner();
    }
}

// Handle Signup
async function handleSignup(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const organization = document.getElementById('organization').value;
    const termsAccepted = document.getElementById('terms-agree').checked;

    // Validation
    if (!firstName || !lastName) {
        showToast('Please enter your full name', 'error');
        return;
    }

    if (!validateEmail(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }

    if (!validatePassword(password)) {
        showToast('Password must be at least 8 characters long', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }

    if (!termsAccepted) {
        showToast('Please accept the Terms of Service', 'error');
        return;
    }

    // Show loading
    showSpinner();

    try {
        // Simulate API call
        await simulateApiCall(3000);

        // Create user account
        const user = {
            id: Date.now(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            organization: organization,
            role: 'Healthcare Provider',
            avatar: `${firstName.charAt(0)}${lastName.charAt(0)}`,
            createdAt: new Date().toISOString(),
            verified: false
        };

        // Store user data
        Storage.set('currentUser', user);
        Storage.set('isLoggedIn', true);

        // Show success modal
        showModal('success-modal');

    } catch (error) {
        showToast('Signup failed. Please try again.', 'error');
    } finally {
        hideSpinner();
    }
}

// Redirect to Dashboard
function redirectToDashboard() {
    window.location.href = 'dashboard.html';
}

// Simulate API Call
function simulateApiCall(delay = 1000) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

// Check if user is already logged in
function checkAuthStatus() {
    const isLoggedIn = Storage.get('isLoggedIn', false);
    const currentUser = Storage.get('currentUser');

    if (isLoggedIn && currentUser) {
        // User is logged in, redirect to dashboard
        window.location.href = 'dashboard.html';
    }
}

// Auto-fill login if remember me was checked
function autoFillLogin() {
    const rememberMe = Storage.get('rememberMe', false);
    const currentUser = Storage.get('currentUser');

    if (rememberMe && currentUser) {
        const emailInput = document.getElementById('login-email');
        const rememberCheckbox = document.getElementById('remember-me');

        if (emailInput) {
            emailInput.value = currentUser.email;
        }
        if (rememberCheckbox) {
            rememberCheckbox.checked = true;
        }
    }
}

// Initialize auth check and auto-fill on page load
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    autoFillLogin();
});

// Export functions for global use
window.switchTab = switchTab;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.redirectToDashboard = redirectToDashboard;

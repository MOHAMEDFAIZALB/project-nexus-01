document.getElementById('loginBtn').addEventListener('click', displayLogin);
document.getElementById('signupBtn').addEventListener('click', displaySignup);

function displayLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('signupForm').classList.remove('active');
}

function displaySignup() {
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Add your login validation logic here

    document.getElementById('loginError').style.display = "none"; // Hide error message
}

function handleSignup() {
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword) {
        document.getElementById('signupError').textContent = "Passwords do not match.";
        document.getElementById('signupError').style.display = "block";
    } else {
        document.getElementById('signupError').style.display = "none";
        // Handle successful signup logic here
    }
}

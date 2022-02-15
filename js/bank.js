document.getElementById('login-button').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passField = document.getElementById('user-password');
    const userPass = passField.value;

    if(userEmail == 'test.com' && userPass == 'test1234'){
        window.location.href = 'banking.html';
    }
    else{
        console.log('Invalid user');
    }
})
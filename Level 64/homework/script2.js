const registrationForm = document.getElementById('registrationForm');
let dateBase = [];

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (password.length < 8) {
        alert('Password is too short');
        return;
    }

    const user = {
        name,
        email,
        password,
        gender
    };

    dateBase.push(user);
    console.log(dateBase);
});
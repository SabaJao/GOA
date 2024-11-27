const form = document.getElementById('registrationForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // ვაჩერებთ ფორმის ნორმალურ გაგზავნას

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const agree = document.getElementById('agree').checked;

    if (!name || !email || !password || !agree) {
        alert('ყველა ველი აუცილებელია შეავსოთ და დაეთანხმოთ პირობებს.');
    } else {
        console.log('მომხმარებლის მონაცემები:');
        console.log('სახელი:', name);
        console.log('ელ. ფოსტა:', email);
        console.log('პაროლი:', password);
    }
});
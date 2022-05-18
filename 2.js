var firstNameInput = document.querySelector('#firstname');
var lastNameInput = document.querySelector('#lastname');
var emailInput = document.querySelector('#email');
var phoneInput = document.querySelector('#phone');
var form = document.querySelector('form');
var clear = document.querySelector('.clear');
var db = localStorage.getItem('informations') || [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;

    var information = {
        firstName,
        lastName,
        email,
        phone,
    }

    db.push(information);
    localStorage.setItem('informations', JSON.stringify(db));
})

clear.addEventListener('click', e => {
    e.preventDefault();
    form.reset();
})







let showPasswordBtn = document.querySelector('.show-password');
let passwordInp = document.querySelector('.password-input');

showPasswordBtn.addEventListener('click', () => {

    // toggle icon 

    // font awesome class for eye icon
    showPasswordBtn.classList.toggle('fa-eye');

    // font awesome class for slashed eye icon
    showPasswordBtn.classList.toggle('fa-eye-slash');

    // ternary operator a shorthand for if and else to change the type of password input
    passwordInp.type = passwordInp.type === 'password' ? 'text' : 'password';

})
let passwordChecklist = document.querySelectorAll('.list-item');

let validationRegex = [
    { regex: /.{8,}/ }, // min 8 letters,
    { regex: /[0-9]/ }, // numbers from 0 - 9
    { regex: /[a-z]/ }, // letters from a - z (lowercase)
    { regex: /[A-Z]/ }, // letters from A-Z (uppercase),
    { regex: /[^A-Za-z0-9]/ } // special characters
]

passwordInp.addEventListener('keyup', () => {
    validationRegex.forEach((item, i) => {

        let isValid = item.regex.test(passwordInp.value);

        if (isValid) {
            passwordChecklist[i].classList.add('checked');



        } else {
            passwordChecklist[i].classList.remove('checked');



        }

    })

})

function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/; //here we can check the string is valid or not
    return re.test(str);
}
let click = document.querySelector('.button'); //control over the button
click.addEventListener('click', () => {
    if (checkPassword(passwordInp.value)) { //if valid password then we can access the next page and also notification is pop up
        document.getElementById('demo').innerHTML = 'Hurrayy Now you are safe from your Gf :)';
        document.getElementById('demo').style.color = 'green'
    } else {   //if not then we can't access the page and red notification is pop up
        document.getElementById('demo').innerHTML = 'Buddy please give valid Password otherwise your GF access your account :)'
        document.getElementById('demo').style.color = 'red'
    }
})
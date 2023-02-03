let namee = document.getElementById("name");
let message = document.getElementById("message");
let email = document.getElementById("email");
var submit = document.getElementById('submit');
let nameError = document.getElementById("nameError");
let mailError = document.getElementById("email");
let messageError = document.getElementById("message");
const regexMail = new RegExp('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$');
const regname = new RegExp('^[a-zA-A]');
const regMessage = new RegExp('^.{1,500}$');
form.addEventListener("submit", function (e) {
    let hasError = false;
    e.preventDefault();
    const validateInputs = () => {
        if (namee.value === "" || email.value === "" || message.value === "") {
            if (namee.value === "" || !regname.test(namee.value)) {
                hasError = true;
                namee.style.borderColor = "red";
                nameError.textContent = "veuillez saisir un nom";
            } else {
                namee.style.borderColor = "green";
            }
            if (email.value === "" || !regexMail.match(message.value)) {
                email.style.borderColor = "red";
                mailError.textContent = "veuillez saisir un email";
            } else {
                email.style.borderColor = "green";
            }
            if (message.value === "" || !regMessage.match(message.value)) {
                message.style.borderColor = "red";
                messageError.textContent = "veuillez ecire un message";
            } else {
                message.style.borderColor = "green";
            }
        } else {
            form.submit();
        }
    }
    Email.send({
        SecureToken: "d9e5134d-75a4-4a74-9e3d-7be1d038a4bf",
        To: 'meriem.safi90@gmail.com',
        From: "meryoumatou@hotmail.fr",
        Subject: "mail CV",
        Body: "De:" + email.value + "   " + message.value,
    }).then(
        message => alert(message)
    )
})
validateInputs();


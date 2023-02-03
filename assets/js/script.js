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
    e.preventDefault();
    let hasError = false;
    //Vérification du nom
    if ((!namee.value)) {
        nameError.textContent = "veuillez saisir un nom";
        namee.focus();
        hasError = true;
        console.log(hasError);
    } else if (!regname.test(namee.value)) {
        nameError.textContent = "le format du nom est incorrect";
        namee.focus();
        hasError = true;
    }
    // Vérification de l'adresse mail
    if (!email.value) {
        mailError.textContent = "l'adresse mail est invalide";
        email.focus();
        hasError = true;
    } else if (!regexMail.test(email.value)) {
        mailError.textContent = "le format de l/email est invalide";
        email.focus();
        hasError = true;
    }
    if ((!message.value)) {
        messageError.textContent = "veuillez saisir un message";
        message.focus();
        hasError = true;
    } else if (!regMessage.test(message.value)) {
        messageError.textContent = "le format du message est incorrect";
        message.focus();
        hasError = true;
    } else {
        Email.send({
            SecureToken: "d9e5134d-75a4-4a74-9e3d-7be1d038a4bf",
            To: 'meriem.safi90@gmail.com',
            From: "meryoumatou@hotmail.fr",
            Subject: "mail CV",
            Body: "De:" + email.value + "\n" + message.value,
        }).then(
            message => alert(message)
        )
    };
});


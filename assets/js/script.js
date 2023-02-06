let namee = document.getElementById("name");
let message = document.getElementById("message");
let email = document.getElementById("email");
var submit = document.getElementById('submit');
let nameError = document.getElementById("nameError");
let mailError = document.getElementById("mailError");
let messageError = document.getElementById("messageError");
const regexMail = new RegExp('^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$');
const regname = new RegExp('^[a-zA-A]');
const regMessage = new RegExp('^.{1,500}$');
let hasError = {};
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('gygy');
    if (namee.value === "" || !regname.test(namee.value)) {
        namee.style.borderColor = "red";
        nameError.textContent = "erreur";
        hasError['name'] = true;
    } else {
        namee.style.borderColor = "green";
        nameError.textContent = "";
        hasError['name'] = false;
    }
    if (email.value === "" || !regexMail.test(email.value)) {
        email.style.borderColor = "red";
        mailError.textContent = "erreur mail";
        hasError['mail'] = true;
    } else {
        email.style.borderColor = "green";
        mailError.textContent = "";
        hasError['name'] = false;
    }
    if (message.value === "" || !regMessage.test(message.value)) {
        message.style.borderColor = "red";
        messageError.textContent = "veuillez ecire un message";
        hasError['msg'] = true;
    } else {
        message.style.borderColor = "green";
        messageError.textContent = "";
        hasError['name'] = false;
    }
    if (!hasError['name'] && !hasError['mail'] && !hasError['msg']) {
        Email.send({
            SecureToken: "d9e5134d-75a4-4a74-9e3d-7be1d038a4bf",
            To: 'meriem.safi90@gmail.com',
            From: "meryoumatou@hotmail.fr",
            Subject: "mail CV",
            Body: "De:" + email.value + "   " + message.value,
        }).then(
            message => alert(message)
        )
    }

})













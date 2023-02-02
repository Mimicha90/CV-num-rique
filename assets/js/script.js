let namee = document.getElementById("name");
let message = document.getElementById("message");
let email = document.getElementById("email");
var submit = document.getElementById('submit');
function verif() {
    if (namee.value == "") {
        alert("veuillez saisir un nom !");
        namee.focus();
        return false;
    }
    if (email.value == "") {
        alert("Tapez un email valable pour avoir une réponse.");
        document.getElementById("email").focus();
        return false;
    }
    if (message.value == "") {
        alert("Pensez à taper un message !");
        message.focus();
        return false;
    }
}


submit.addEventListener('click', function (e) {
    verif();
    e.preventDefault();
    Email.send({
        SecureToken: "d9e5134d-75a4-4a74-9e3d-7be1d038a4bf",
        To: 'meriem.safi90@gmail.com',
        From: "meryoumatou@hotmail.fr",
        Subject: "mail CV",
        Body: "De:" + email.value + " " + message.value,
    }).then(
        message => alert(message)
    );
});


<?php
var_dump($_POST);
$formErrors = [];
$regex = [
    'lastname' => '/^[A-Za-z \-\'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]{1,30}$/',
];

if (isset($_POST['submit'])) {
    if (!empty($_POST['lastname'])) {
        if (preg_match($regex['lastname'], $_POST['lastname'])) {
            $lastname = strip_tags(strtoupper($_POST['lastname']));
        } else {
            $formErrors['lastname'] = 'Le nom de famille ne peut contenir que des lettres, des tirets, des espaces, des accents et des apostrophes.';
        }
    } else {
        $formErrors['lastname'] = 'Le nom de famille est obligatoire.';
    }
    if (!empty($_POST['email'])) {
        if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $email = $_POST['email'];
        } else {
            $formErrors['email'] = 'L\'adresse mail doit comporter uniquement des lettres, des chiffres, des tirets, des underscores et un arobase';
        }
    } else {
        $formErrors['email'] = 'L\'adresse mail est obligatoire.';
    }
    if (!empty($_POST['message'])) {
        $message = $_POST['message'];
    } else {
        $formErrors['message'] = 'Veuillez m\écrire un message';
    }
}

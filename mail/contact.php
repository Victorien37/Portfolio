<?php
    // $civilite = $_POST['civilite'];
    // if($civilite == 'on'){
    //     $civilite = "Mr";
    // }
    // else {
    //     $civilite = "Mme";
    // }
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $mail = $_POST['mail'];
    $tel = $_POST['tel'];
    $mail = $_POST['mail'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];

    $msg = "$nom $prenom" . "\r\n" . "$message" . "\r\n" . "Contact : $tel";

    if(mail($mail, $sujet, $msg)) {
        echo "success";
    }
    else {
        echo "failed";
    }
?>
<?php
    //Récupération des données par le fichier ajax.js
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $mail = $_POST['mail'];
    $tel = $_POST['tel'];
    $mail = $_POST['mail'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];
    //Construction du message pour le client
    $bateau = "$nom $prenom" . "\r\n" . "Votre demande a bien été prise en compte et monsieur Rodrigues vous recontactera prochainement." . "\r\n" . "Bien Cordialement";

    //Mail du support
    $contact = "contact@portfolio-victorien-rodrigues.fr";
    //Construction du message pour le mail contact du portfolio
    $msg = "$nom $prenom" . "\r\n" . "$message" . "\r\n" . "Contact : $tel";
    
    //Test de la réponse du mail contact. Si il fonctionne, envoie du mail + envoie du mail au client + return success pour ajax.js
    if(mail($contact, $sujet, $msg)) {
        mail($mail, "Contact Victorien Rodrigues", $bateau);
        echo "success";
    }
    //Sinon return failed pour ajax.js
    else {
        echo "failed";
    }
?>
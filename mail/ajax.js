$(document).ready(function(){
    //Quand on click sur le bouton "Envoyer"
    $("#submit").click(function(e){
        e.preventDefault(); //Permet le bloquage du click par default.
        //Déclaration des variables concernant le formulaire
        var nom = $("#nom").val();
        var prenom = $("#prenom").val();
        var tel = $("#tel").val();
        var mail = $("#mail").val();
        var sujet = $("#sujet").val();
        var message = $("#message").val();
        //Déclaration des regexs
        let regexNomPrenom = new RegExp('[a-zA-Zé-]');
        let regexTel = new RegExp('[0-9]{10}');
        let regexMail = new RegExp('[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}');

        // Test des entrées du formulaire
        if (nom == "" && mail != "" && sujet != "" && message != ""){
            alert("Le champs nom n'a pas été saisie");
        }
        else if (mail == "" && nom != "" && sujet != "" && message != "") {
            alert("Le champs mail n'a pas été saisie");
        }
        else if (sujet == "" && nom != "" && mail != "" && message != "") {
            alert("Le champs sujet n'a pas été saisie");
        }
        else if (message == "" && nom != "" && mail != "" && sujet != "") {
            alert("Le champs message n'a pas été saisie");
        }
        else if (nom == "" || mail == "" || sujet == "" || message == "") {
            alert("Au moins un élément obligatoire n'a pas été saisie");
        }
        // Test des regex du formulaire
        else if (regexNomPrenom.test(nom) == false) {
            alert("Le champs nom n'est pas correctement renseigné");
        }
        else if (prenom != "" && regexNomPrenom.test(prenom) == false) {
            alert("Le champs prenom n'est pas correctement renseigné");
        }
        else if (tel != "" && regexTel.test(tel) == false) {
            alert("Le champs téléphone n'est pas correctement renseigné");
        }
        else if (regexMail.test(mail) == false) {
            alert("Le champs mail n'est pas correctement renseigné");
        }
        else {
            //Affichage du message le temps de l'envoie des mails.
            $(".message").html('<div class="message">Envoi en cours...</div>');
            $("#spin").html('<div class="loader"></div>');
            //Envoie de toutes les valeurs à contact.php
            $.post(
                'mail/contact.php',
                {
                    nom : $("#nom").val(),
                    prenom : $("#prenom").val(),
                    tel : $("#tel").val(),
                    mail : $("#mail").val(),
                    sujet : $("#sujet").val(),
                    message : $("#message").val()
                },
                function(data){
                    //Change le message affiché en fonction de message renvoyé par contact.php 
                    if(data == 'success'){
                        $("#resultat").html("<div>Mail envoyé</div>");
                    }
                    else {
                        $("#resultat").html("<div>Echec de l'envoie du mail</div>");
                    }
                }
            );
        }
    });
});
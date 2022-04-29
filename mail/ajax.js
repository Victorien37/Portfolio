$(document).ready(function(){
    //Quand on click sur le bouton "Envoyer"
    $("#submit").click(function(e){
        e.preventDefault(); //Permet le bloquage du click par default.
        //Affichage du message le temps de l'envoie des mails.
        $(".message").html('<div class="message">Envoi en cours...</div>');
        $("#spin").html('<div class="loader"></div>')
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
    });
});
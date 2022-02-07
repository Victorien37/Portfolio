$(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
        $(".message").html('<div class="message">Envoi en cours...</div>');
        $("#spin").html('<div class="loader"></div>')
        $.post(
            'contact.php',
            {
                civilite : $("#civilite").val(),
                nom : $("#nom").val(),
                prenom : $("#prenom").val(),
                tel : $("#tel").val(),
                mail : $("#mail").val(),
                sujet : $("#sujet").val(),
                message : $("#message").val()
            },
            function(data){
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
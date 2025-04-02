//efeito de esconder formulário de cadastro

$(document).ready(function(){

     $("#botao-cadastrar").click(function(){0
        
        $("#form-cadastrar").slideToggle("slow")//aparecer o formulário
        $("#section-login").slideToggle("slow")//desaparece o login
        $("#botao-cadastrar").hide()
    });

});//iniciar o jquery
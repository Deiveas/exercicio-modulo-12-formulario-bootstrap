$(document).ready(function(){

    $('#carossel-imagens').slick({
        autoplay: true,
        arrows: false,
    });

    $("#text-button-red").addClass("text-danger");

    $('#tel').mask('(00) 00000-0000');

    let formCadastro = $('#form-cadastro');

    formCadastro.on('submit', function(e){
        e.preventDefault();
    });

});

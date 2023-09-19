$(document).ready(function () {
    $('#carossel-imagens').slick({
        autoplay: true,
        arrows: false,
    });

    $("#text-button-red").addClass("text-danger");

    $('#tel').mask('(00) 00000-0000');

    let formCadastro = $("#form-cadastro");

    $('#text-button-red').click(function (e) {
        e.preventDefault();

        if (formCadastro[0].checkValidity()) {
            formCadastro.submit(); // Submeter o formulário para a Vercel
        } else {
            formCadastro[0].reportValidity();
        }
    });
});

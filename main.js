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
            abrirImagemSucesso();
        } else {
            formCadastro[0].reportValidity();
        }
    });

    function abrirImagemSucesso() {
        window.open('https://www.acejundiai.com.br/wp-content/uploads/2020/06/CADASTRO-REALIZADO-COM-SUCESSO-1.jpg');
    }
});

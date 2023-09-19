<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email_cliente = $_POST["email"];
    
    // Construir o email de promoção
    $destinatario = $email_cliente;
    $assunto = "Promoção exclusiva para você";
    $mensagem = "Caro $nome,\n\n";
    $mensagem .= "Temos promoções exclusivas para você! Utilize o código EBAC_S_10 para ganhar 10% OFF e frete grátis.\n\n";
    $mensagem .= "Válido até 10/2022.\n\n";
    $headers = "From: deiveas@gmail.com\r\n";
    
    // Enviar o email
    mail($destinatario, $assunto, $mensagem, $headers);

    // Redirecionar de volta para a página promo.html (ou qualquer outra página de sucesso que você deseje)
    header("Location: https://sua-vercel-url/promo.html");
    exit();
}
?>

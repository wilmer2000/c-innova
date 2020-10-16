<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $comment = $_POST['comment'];
    $message = '';

    $to  = 'wilmervzla2000@gmail.com';
    $subject = 'Contacto desde la Página de C-INNOVA';

    // Mensaje
    // $message = '<p><strong>Nombre: <strong> {$name}</p><p><strong>Teléfono: <strong> {$phone}</p><p><strong>Email: <strong> {$mail}</p><p><strong>Comentario: <strong> {$comment}</p>';
    // $message = '{$name} {$phone} {$mail} {$comment}';
    $message ="Nombre: ".$name."\rTeléfono: ".$phone."\rEmail: ".$mail."\rComentarios: ". $comment ;


    // Para enviar un correo HTML, debe establecerse la cabecera Content-type
    $headers = "De: " . $_POST["name"] . "<". $_POST["mail"] .">\r\n";

    // Enviarlo
    mail($to, $subject, $message, $headers);
?>

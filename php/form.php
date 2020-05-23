<?php

$name = $_POST['name'];
$email = $_POST["email"];
$comment = $_POST['comment'];

$to = "";
$header = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
mail($to, $email_subject, $email_body, $headers);

$email_from = "";
$email_subject = "Website Comment";
$email_body = "$name has sent a message: \n $comment";
<?php

$to = "sakals@mail.ua";
$subject = "YOUR SUBJECT HERE";
$body = "YOUR BODY GOES HERE";
$headers = "MIME-Version: 1.0
Content-Type: text/html; charset=UTF-8";
mail ($to, $subject, $body, $headers);

?>

<?php

$name = trim($_POST['name']);

$name = trim($_POST['lname']);

$email = trim($_POST['email']);

$email = trim($_POST['job']);

$phone = trim($_POST['phone']);

$subject = trim($_POST['subject']);

$message = trim($_POST['message']);	

$emailTo = 'your email id'; //Put your own email address here

if (empty($subject)) {

    $subject = 'Message from your website.';

}

$body = "Name: $name \n\nEmail: $email \n\nMessage: $message " ;

$headers = 'From: '.$email."\r\n" .

    'Reply-To: '.$email."\r\n";

mail($emailTo, $subject, $body, $headers);

$emailSent = true;

echo ('success');
?>
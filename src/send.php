<?php
date_default_timezone_set("America/Chicago");
$to      = "sakal.s@hotmail.com";
$subject = "IRI (Important Read Immediately)";
$date    = date("F j, Y, g:i a");
$body    = " 
    <html> 
        <head> 
         <title>" . $_POST["name"] . "</title> 
        </head> 
        <body> 
          <p>Author: <b>" . $_POST["name"] . "</b></p>  
          <p><b>" . $_POST["email"] . "</b></p> 
          <p>" . $_POST["message"] . "</p> 
        </body> 
        <p>$date</p> 
    </html>";
$headers = "MIME-Version: 1.0  
Content-Type: text/html; charset=UTF-8";
mail($to, $subject, $body, $headers);
?> 
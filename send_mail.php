<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $company = htmlspecialchars($_POST["company"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "info@aspiresap.com";  // Your email
    $subject = "New Contact Form Submission";
    
    // Email body
    $body = "
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> $name</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Company:</strong> $company</p>
    <p><strong>Message:</strong><br>$message</p>
    ";

    // Headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Message sending failed. Please try again later.'); window.location.href='contact.html';</script>";
    }
} else {
    header("Location: contact.html");
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    // Send email confirmation
    $to = $email;
    $subject = "Download Request Confirmation";
    $message = "Dear $name,\n\nThank you for your download request. Your request has been received. Please check your inbox for further instructions.\n\nBest regards,\nYour Website Team";
    $headers = "From: your-email@example.com"; // Replace with your email address

    // Send email
    mail($to, $subject, $message, $headers);
    
    // Display confirmation message
    echo "<h2>Your request has been submitted successfully.</h2>";
    echo "<p>Please check your inbox for further instructions.</p>";
} else {
    // Redirect to the form page if accessed directly
    header("Location: download_form.html");
    exit();
}
?>

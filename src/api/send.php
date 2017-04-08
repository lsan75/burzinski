<?php

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  if (
		strlen($_POST['email']) > 0 &&
		strlen($_POST['subject']) > 0 &&
		strlen($_POST['message']) > 0 &&
		strlen($_POST['name']) > 0
	) {

		$to = 'contact@burzinski.fr';
		$subject = stripslashes($_POST['subject']);
	  $message = stripslashes($_POST['message']);
	  $headers = 'From: ' . strlen($_POST['name']) . ' <' . stripslashes($_POST['email']) . '>';

	  if ( mail($to, $subject, $message, $headers) ) {
      http_response_code(200);
			echo '{"response": "Done"}';
		} else {
      http_response_code(503);
			echo '{"response": "Service Unavailable"}';
		}

	} else {
    http_response_code(400);
		echo '{"response": "Bad Request"}';
	}

?>

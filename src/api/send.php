<?php

  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	header('Content-type: application/json');

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$from_email = stripslashes($request->email);
	$from_subject = stripslashes($request->subject);
	$message = stripslashes($request->message);
	$from_name = stripslashes($request->name);

  if (
		strlen($from_email) > 0 &&
		strlen($from_subject) > 0 &&
		strlen($message) > 0 &&
		strlen($from_name) > 0
	) {

		$to = 'contact@burzinski.fr';
	  $headers = 'From: ' . $from_name . ' <' . $from_email . '>';

	  if ( mail($to, $from_subject, $message, $headers) ) {
      http_response_code(200);
			echo '{"response": "Done"}';
		} else {
      http_response_code(503);
			echo '{"response": "Service Unavailable"}';
		}

	} else {
    http_response_code(400);
		echo '{"response": "Bad Request - No Data Sent"}';
	}

?>

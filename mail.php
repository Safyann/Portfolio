<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $comment = $_POST['comment'];
  $mail_messange = '
    <html>
      <head>
        <title>Сообщение</title>
      </head>
      <body>
        <h2>Сообщение с сайта-портфолио</h2>
        <ul>
          <li>Имя: ' . $name . '</li>
          <li>E-mail: ' . $email . '</li>
          <li>Сообщение: ' . $comment . '</li>
        </ul>
      </body>
    </html>';
  $headers = "From: Администратор сайта\r\n".
  "MINE-Version: 1.0"."\r\n".
  "Content-type: text/html; charset=UTF-8"."\r\n";

  $mail = mail('alena.safyannikova@yandex.ru', 'Сообщение с сайта-портфолио', $mail_messange, $headers);
  
  if ($mail) {
    $data['status'] = "OK";
    $data['mes'] = "Письмо успешно отправлено";
  }else{
    $data['status'] = "ERROR";
    $data['mes'] = "На сервере произошла ошибка";
  }
  echo json_encode($data);
?>
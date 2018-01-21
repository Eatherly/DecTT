<?php

if (isset($_POST)) {
    print_r($_POST);


    $returnContract = new POST($_POST[name], $_POST[phone], $_POST[email], $_POST[text]);
    $returnContract->sentUserData();
};

class POST {

    public $name;
    public $phone;
    public $email;
    public $text;

    public function __construct($name, $phone, $email, $text) {
        $this->name = $name;
        $this->phone = $phone;
        $this->email = $email;
        $this->text = $text;
    }

    public function sentUserData() {
        $connection = mysqli_connect('localhost', 'root', '', 'dec');
        mysqli_set_charset($connection, 'utf8');
        if (mysqli_connect_errno())
            echo mysqli_connect_error();

        $query = "INSERT INTO users (name, phone , email , text) VALUES ('" . $this->name . "' , '" . $this->phone . "' ,'" . $this->email . "' ,'" . $this->text . "' );";

        $result = mysqli_query($connection, $query);
    }

}

?>
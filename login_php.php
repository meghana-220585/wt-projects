<?php
$email=$_POST['email'];
$password=$_POST['password'];

$conn=mysqli_connect("localhost","root","","userdb");

if(!$conn){
    die("connection failed:".mysqli_connect_error());
}

$sql="select * from userdetail where
email='$email' and password='$password'";
$result=mysqli_query($conn,$sql);
if (mysqli_num_rows($result)>0){
    echo "login successful";
}
else{
    echo "invalid email or password";
}
mysqli_close($conn);
?>
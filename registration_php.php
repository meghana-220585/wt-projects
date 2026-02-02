<?php
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];

$conn=mysqli_connect("localhost","root","","userdb");
if(!$conn){
    die("connection failed:".mysqli_connect_error());
}
$sql="insert into userdetail(username,email,password)values('$username','$email','$password')";
if(mysqli_query($conn,$sql)){
    echo "registration successfully";
}
else{
    echo "Error:".mysqli_error($conn);
}
mysqli_close($conn);
?>
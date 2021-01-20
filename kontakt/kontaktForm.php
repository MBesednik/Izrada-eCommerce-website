<?php 

    if(isset($_POST['btn-send']))
    {
       $UserName = $_POST['UName'];
       $Email = $_POST['Email'];
       $Subject = $_POST['Subject'];
       $Msg = $_POST['msg'];

       if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
       {
        alert("Molimo Vas da unesete podatke u polja.");
       }
       else
       {
           $to = "m.besednik69@gmail.com";

           if(mail($to,$Subject,$Msg,$Email))
           {
            alert("Vaš email je poslan, odgovorit ćemo Vam u najkraćem roku.");
        }
       }
?>
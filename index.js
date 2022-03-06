//Business logic

var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

var dateWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


//userInterface

function getInfo(){
    var day = parseInt(document.getElementById("day").value);
    
    var month = parseInt(document.getElementById("month").value);
    
    var year = parseInt(document.getElementById("year").value);
    
    var gender = radioInfo();

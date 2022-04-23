const electron = require('electron');
var date = new Date();
var mysql = require('mysql');
const Notification = electron.remote.Notification;

//=====================  My Sql Database Connection  =======================//
var connection = mysql.createConnection({
host     : 'sql5.freesqldatabase.com',
user     : 'sql5428386',
password : 'jr6CDZ75tK',
database : 'sql5428386',
port: 3306
});
connection.connect();

//=====================  Handle the HTML FORM (id)  =======================//
const taskForm = document.querySelector('#taskForm');
const taskEmail = document.querySelector('#taskEmail');
const taskName = document.querySelector('#taskName');
const taskSubject = document.querySelector('#taskSubject');
const taskTextarea = document.querySelector('#taskTextarea');

//=====================  Get the today and todaytime =======================//
var day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    hour = date.getHours(),
    min  = date.getMinutes();

month = (month < 10 ? "0" : "") + month;
day = (day < 10 ? "0" : "") + day;
hour = (hour < 10 ? "0" : "") + hour;
min = (min < 10 ? "0" : "") + min;

var today = year + "-" + month + "-" + day,
    displayTime = hour + ":" + min; 

//=====================  Display Notifications =======================//
  
const options_1 = {
    title: 'Have a nice day.',
    body: 'The form details is send.',
    silent: false,
    icon: __dirname + './hassan.ico',
}
const options_2 = {
    title: 'Have a nice day.',
    body: 'The form details is not send.',
    silent: false,
    icon: __dirname + "./hassan.ico",
}

//===================== Setting for FROM submission. =======================//

taskForm.addEventListener('submit', e =>{
    e.preventDefault();
    
    //      Just for development time we use.
    // console.log('Name :' + taskName.value);
    // console.log('Email :' + taskEmail.value);
    // console.log('Subject :' + taskSubject.value);
    // console.log('TextArea :' + taskTextarea.value);
    // console.log('Today : ' + today);
    // console.log('Display Time : '+displayTime);
 
    var sql = "INSERT INTO electron_js_node_js (name,email,subject,textArea,today,displayTime) VALUES (?,?,?,?,?,?)";
    connection.query(sql,[taskName.value,taskEmail.value,taskSubject.value,taskTextarea.value,today,displayTime],(err, res) => {
        console.log("SQL database connection is success.");
        if(err) {
            console.log('Error in SQL : \n '+ err);
            let myNotification = new Notification(options_2);

            myNotification.show();
        }else{
            console.log('Last insert ID: \n', res.insertId);
            
            let myNotification = new Notification(options_1);

            myNotification.show();
            
        }
        connection = mysql.createConnection(connection.config);
        connection.connect();
    });

    taskForm.reset();
});
               

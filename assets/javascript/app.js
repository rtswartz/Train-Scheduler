$(document).ready(function() {
  //Initilize Firebase
  var config = {
    apiKey: "AIzaSyA5l3a_r27GJmITKrMXkK4P-Cq9gcOiWyA",
    authDomain: "train-scheduler-e608e.firebaseapp.com",
    databaseURL: "https://train-scheduler-e608e.firebaseio.com",
    projectId: "train-scheduler-e608e",
    storageBucket: "train-scheduler-e608e.appspot.com",
    messagingSenderId: "1077859171222"
  };
firebase.initializeApp(config);
database = firebase.database();

});

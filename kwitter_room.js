var firebaseConfig = {
      apiKey: "AIzaSyAcLeQIGNoOaK4Iw6TrBU34hgNBuC5_fZU",
      authDomain: "nexgen-kwit.firebaseapp.com",
      databaseURL: "https://nexgen-kwit-default-rtdb.firebaseio.com",
      projectId: "nexgen-kwit",
      storageBucket: "nexgen-kwit.appspot.com",
      messagingSenderId: "917984667172",
      appId: "1:917984667172:web:502b598a0bac2056419ab1",
      measurementId: "G-L5133NSG93"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addroom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      setTimeout("rediru()", 100);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Names-" +Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirect_to_room_name(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      setTimeout("rediru()", 100);
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function rediru() {
   window.location.replace="https://iaprofessional.github.io/kwittwer/kwitternextgen_page.html";
}

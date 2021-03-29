function login() {
	user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location.replace("https://iaprofessional.github.io/kwitter/kwitternextgen_room.html");
    }      
    setTimeout("login()", 20000);

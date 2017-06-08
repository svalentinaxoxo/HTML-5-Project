function validateForm(form) {
    var fieldsFilled = true;
    var results = "";
    var username = form.elements["username"].value;
    if (username == null || username == "") {
        results += "User Name must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(username)) {
        results += "User name must be text only\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (username.length < 10 || username > 18) {
        results += "Username must be between 10 and 18 charachters\n";
        fieldsFilled = fieldsFilled && false;
    }
    var password = form.elements["psw"].value;
    var exp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
    if (password == null || password == "") {
        results += "Password must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(password)) {
        results += "password must be text only\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!exp2.test(password)) {
        results += "password is invalid\n";
        fieldsFilled = fieldsFilled && false;
    }
    // if invalid
    if (results !== "") {
        alert(results);
        location.href = "/home.html";//redirecting to home.html
    }
    // if valid
    if (results == "") {
        alert("Cookie was written to your computer!");
        location.href = "/private.html";//redirecting to private.html
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth();
        var currentDayOfMonth = currentDate.getDate();
        var expDate = currentDate.setDate(currentDayOfMonth + 14);
        if (username != "" && username != null) {
            //creating the cookie called Library
            document.cookie = "Library=" + username +
                + password + currentDate + ";expires=" + expDate.toGMTString();
        } // end inner if
    } // end outer if
} // end validateForm

function getCookie(Library) {
    var name = Library + "=";
    var value = document.cookie.split(';');
    for (var i = 0; i < value.length; i++) {
        var c = value[i];
        while (c.charAt(0) == '') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);    
        } // end if
    } // end for
    return "";
    document.getElementById("results").innerHTML = document.write(getCookie("Library"));
//} // end if 
}//end getCookie
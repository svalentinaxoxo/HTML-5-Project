function validateForm(form) {
    var results = "";
    var fieldsFilled = true;
    var  firstname= form.elements["firstname"].value;
    if (firstname == null || firstname == "") {
        results += "First name must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(firstname)) {
        results += "First name must be text only\n";
        fieldsFilled = fieldsFilled && false;
    }
    var lastname = form.elements["lastname"].value;
    if (lastname == null || lastname == "") {
        results += "Last name must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(lastname)){
        results += "Last name must be text only\n";//go back and change all the x to the names and add the if !isNaN
        fieldsFilled = fieldsFilled && false;
    }
    var streetaddress = form.elements["streetaddress"].value;
    if (streetaddress == null || streetaddress == "") {
        results += "Street Address must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(streetaddress)) {
        results += "Street address must be text only\n";
        fieldsFilled = fieldsFilled && false;
    }
    var city = form.elements["city"].value;
    if (city == null || city == "") {
        results += "City must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(city)) {
        results += "City must be text only\n";
        fieldsFilled = fieldsFilled && false;
    }
    var state = form.elements["state"].value;
    if (state == null || state == "") {
        results += "State must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(state)) {
        results += "State must be text only\n";
        fieldsFilled = fieldsFilled && false;
    }
    var zipcode = form.elements["zipcode"].value;
    if (zipcode == null || zipcode == "") {
        results += "Zip Code must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
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
    var email = form.elements["emailaddress"].value;
    var exp = /\S+@\S+\.\S+/;
    if (email == null || email == "") {
        results += "Email Address must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(email)) {
        results += "Email Address must be text only\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!exp.test(email)) {
        results += "email is invalid\n";
        fieldsFilled = fieldsFilled && false;
    }
    var x = form.elements["phonenumber"].value;
    if (x == null || x == "") {
        results += "Phone Number must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(phonenumber)) {
        results += "Phone Number must be text only\n";
        fieldsFilled = fieldsFilled && false;
    }
    var x = form.elements["rating"].value;
    if (x == null || x == "") {
        results += "Rating must be filled out\n";
        fieldsFilled = fieldsFilled && false;
    }
    var checkBoxes = form.elements["manuscripts"];
    var selected = false;
    for (var i = 0; i < checkBoxes.length; i++)
    {
        if (checkBoxes[i].checked)
        {
            selected = true;
        }
    }
    if (selected == false)
    {        
        results += "Choose atleast one manuscript\n";
        fieldsFilled = fieldsFilled && false;
    }
    var x = form.elements["comments"].value;
    if (x == null || x == ""){
        results += "Comments must be filled out";
        fieldsFilled = fieldsFilled && false;
    }
    if (!isNaN(comments)) {
        results += "Comments must be text only\n";
        fieldsFilled = fieldsFilled && false;
    }
    if (fieldsFilled == false) {
        alert(results);
    }
    var finalMessage = document.getElementById("results");
    if (results != "") {
        finalMessage.innerHTML = results;
    }

}

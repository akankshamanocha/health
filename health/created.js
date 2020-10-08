
function thank()
{
    alert("Thankyou! I have got enough information.\nPreparing your assessment report..");
}


//Login validation
function validate()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email ==="" || password ==="")
    {
        alert("Login failed");
        return false;
    }else{
        alert("Login successful");
    }
}


function checkSym(){
    var symptom = document.getElementById("sym").value;
    if (symptom == "cold" || symptom == "Cold" || symptom =="COLD"){
        window.location="questionsCold.html";
    }else if (symptom == "Fever" || symptom == "fever" || symptom =="FEVER"){
        window.location="questionsFever.html";
    }else if (symptom == "skin rash" || symptom == "Skin rashes" || symptom =="SKIN RASH" || symptom =="skin infection" ){
        window.location="questionsSkin.html";
    }
    
}




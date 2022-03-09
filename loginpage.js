var player1name = ""
var player2name = ""

function addUser(){
    player1name = document.getElementById("P1input").value
    player2name = document.getElementById("P2input").value

    localStorage.setItem("player1name",player1name)
    localStorage.setItem("player2name",player2name)

    window.location = "gamepage.html"
}
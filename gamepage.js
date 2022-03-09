var p1name = ""
var p2name = ""
var p1score = 0
var p2score = 0
var answerturn = "player1"
var questionturn = "player2"

function Set() {
    p1name = localStorage.getItem("player1name")
    p2name = localStorage.getItem("player2name")



    document.getElementById("p1turn").innerHTML = "Answer turn : " + p1name
    document.getElementById("p2turn").innerHTML = "Question turn : " + p2name

    document.getElementById("p1name").innerHTML = p1name + " : "
    document.getElementById("p2name").innerHTML = p2name + " : "

    
    document.getElementById("p1score").innerHTML = 0
    document.getElementById("p2score").innerHTML = 0
}

function Send() {

    n1 = document.getElementById("no1").value
    n2 = document.getElementById("no2").value



    ans = parseInt(no1) * parseInt(no2)

    question = "<h4>" + n1 + "X" + n2 + "</h4>"
    input = "<br> Answer : <input type = 'number' id = 'ansinput'>"
    btn = "<br><br><button style='width30% height8% ' id='checkbtn' onclick = 'Check()' >Check</button>"
    row = question + input + btn
    document.getElementById("div").innerHTML = row
}

function Check() {
    getanswer = document.getElementById("ansinput").value
    console.log(getanswer)
    if (getanswer == ans) {
        if (answerturn == "player1") {
            p1score = p1score + 1
            document.getElementById("p1score").innerHTML = p1score
        } else {
            p2score = p2score + 1
            document.getElementById("p2score").innerHTML = p2score
        }
        if (answerturn == "player1") {
            answerturn = "player2"
            document.getElementById("p1").innerHTML = p2name
            questionturn = "player1"
            document.getElementById("p2").innerHTML = p1name
        } else {
            answerturn = "player1"
            document.getElementById("p2").innerHTML = p1name
            questionturn = "player2"
            document.getElementById("p1").innerHTML = p2name
        }
    }
    document.getElementById("div").innerHTML = ""
}
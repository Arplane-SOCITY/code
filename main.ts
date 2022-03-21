function ReciveMesssage () {
    if (_try > 0) {
        passwordfromrecive = game.askForNumber("Password?", 10)
        if (passwordfromrecive == password) {
            game.splash(message)
        } else {
            game.splash("ERROR!", "Try" + _try + "Times")
        }
    } else {
        game.splash("Need Reset!")
    }
}
function ShowIntroduce () {
    game.showLongText("Introduce 1.Enter To Go To The Code Insert 2. Code:0 = Return 1 = Sent Message* ;2 = Recive Message* *In Device Only ", DialogLayout.Full)
    AskCode()
}
function AskCode () {
    code = game.askForNumber("Code?", 1)
}
function SentMessage () {
    message = game.askForString("Message?", 24)
    password = game.askForNumber("Password?", 10)
    if (game.ask("Go To Recive The Message")) {
        ReciveMesssage()
    } else {
        ShowIntroduce()
    }
}
let message = ""
let password = 0
let passwordfromrecive = 0
let code = 0
let _try = 0
_try = 7
ShowIntroduce()
if (code == 0) {
    ShowIntroduce()
} else if (code == 1) {
    SentMessage()
} else if (code == 2) {
    ReciveMesssage()
}

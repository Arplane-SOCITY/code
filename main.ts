enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    externalpassword = receivedNumber
})
function ReciveMesssage () {
    if (_try > -1) {
        passwordfromrecive = game.askForNumber("Password?", 10)
        if (passwordfromrecive == password) {
            game.splash(message)
            ShowIntroduce()
        } else {
            game.splash("ERROR!", "Try" + ("" + _try) + "Times")
            _try += -1
            ReciveMesssage()
        }
    } else {
        game.splash("Need Reset!")
    }
}
function ShowIntroduce () {
    game.showLongText("Introduce 1.Enter To Go To The Code Insert 2. Code:0 = Return 1 = Sent Message* ;2 = Recive Message* *In Device Only ; New! 3. Sent Message** 4. Recive Message** **External Device Support!", DialogLayout.Full)
    AskCode()
}
function SentMessageToExternalDevice () {
    radio.setGroup(100)
    externalmessage = game.askForString("Message?", 24)
    externalpassword = game.askForNumber("Password?", 10)
    radio.sendNumber(externalpassword)
    radio.sendString(externalmessage)
    if (game.ask("Go To Recive The Message")) {
        ReciveMessageToExternalDevice()
    } else {
        ShowIntroduce()
    }
}
radio.onReceivedString(function (receivedString) {
    externalmessage = receivedString
})
function AskCode () {
    code = game.askForNumber("Code?", 1)
}
function NotMatch () {
    game.splash("\"" + code + "\"" + "Is Not A Valid Code!" + "Click \"A\" To Continue...")
    AskCode()
}
function ReciveMessageToExternalDevice () {
    if (_try > -1) {
        externalpasswordfromrecive = game.askForNumber("Password?", 10)
        if (externalpasswordfromrecive == externalpassword) {
            game.splash(externalmessage)
            ShowIntroduce()
        } else {
            game.splash("ERROR!", "Try" + ("" + _try) + "Times")
            _try += -1
            ReciveMesssage()
        }
    } else {
        game.splash("Need Reset!")
    }
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
let externalpasswordfromrecive = 0
let externalmessage = ""
let message = ""
let password = 0
let passwordfromrecive = 0
let externalpassword = 0
let code = 0
let _try = 0
_try = game.askForNumber("Try Time?", 10)
ShowIntroduce()
if (code == 0) {
    ShowIntroduce()
} else if (code == 1) {
    SentMessage()
} else if (code == 2) {
    ReciveMesssage()
} else if (code == 3) {
    SentMessageToExternalDevice()
} else if (code == 4) {
    ReciveMessageToExternalDevice()
} else {
    NotMatch()
}

def ReciveMesssage():
    global passwordfromrecive, _try
    if _try > -1:
        passwordfromrecive = game.ask_for_number("Password?", 10)
        if passwordfromrecive == password:
            game.splash(message)
            ShowIntroduce()
        else:
            radio.send_message(radio.__message(0))
            game.splash("ERROR!", "Try" + str(_try) + "Times")
            _try += -1
            ReciveMesssage()
    else:
        game.splash("Need Reset!")
def ShowIntroduce():
    game.show_long_text("Introduce 1.Enter To Go To The Code Insert 2. Code:0 = Return 1 = Sent Message* ;2 = Recive Message* *In Device Only ; New! 3. Sent Message** 4. Recive Message** **External Device Support!",
        DialogLayout.FULL)
    AskCode()
def SentMessageToExternalDevice():
    global message, password
    message = game.ask_for_string("Message?", 24)
    password = game.ask_for_number("Password?", 10)
    if game.ask("Go To Recive The Message"):
        ReciveMessageToExternalDevice()
    else:
        ShowIntroduce()
def AskCode():
    global code
    code = game.ask_for_number("Code?", 1)
def ReciveMessageToExternalDevice():
    pass
def SentMessage():
    global message, password
    message = game.ask_for_string("Message?", 24)
    password = game.ask_for_number("Password?", 10)
    if game.ask("Go To Recive The Message"):
        ReciveMesssage()
    else:
        ShowIntroduce()
message = ""
password = 0
passwordfromrecive = 0
code = 0
_try = 0
_try = game.ask_for_number("Try Time?", 10)
ShowIntroduce()
if code == 0:
    ShowIntroduce()
elif code == 1:
    SentMessage()
elif code == 2:
    ReciveMesssage()
elif code == 3:
    SentMessageToExternalDevice()
elif code == 4:
    ReciveMessageToExternalDevice()
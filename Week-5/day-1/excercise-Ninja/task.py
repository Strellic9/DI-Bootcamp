class Phone:
    def __init__(self, phone_number: str) -> None:
        self.phone_number = phone_number
        self.call_history = list()
        self.messages = list()

    def call(self, other_phone:str) -> None:
        self.call_history.append(f'{other_phone} called {self.phone_number}')

    def show_call_history(self) -> None:
        print(self.call_history)

    def send_message(self, other_phone: str, content: str ='') -> None:
        msgDict = dict()
        msgDict['to'] = self.phone_number
        msgDict['from'] = other_phone
        msgDict['content'] = content
        self.messages.append(msgDict)
        print(self.messages)

    def show_outgoing_messages(self) -> None:
       for i in self.messages:
        if i['from'] == self.phone_number:
            print(i)

    def show_incoming_messages(self) -> None:
        for i in self.messages:
            if i['to'] == self.phone_number:
                print(i)

    def show_messages_from(self, other_phone:str) -> None:
        for i in self.messages:
            if i['from'] == other_phone:
                print(i)

myPhone = Phone('89117802820')
myPhone.call('0535789319')
myPhone.call('1535789319')
myPhone.show_call_history()
myPhone.send_message('0535789319', 'how pleased you are to chop away')
myPhone.send_message('0535789319', 'who will save the weak from the man who saves the weak?')



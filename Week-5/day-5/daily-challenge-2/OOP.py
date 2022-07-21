import random

class Deck():
    def __init__(self) -> None:
        Deck.createDeck(self)
    
    def createDeck(self):
        self.deck = list()
        self.suit = ['H','D', 'C', 'S']
        self.value = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
        for i in self.suit:
            for j in self.value:
                self.deck.append(i+'-'+j)
        # print(self.deck, len(self.deck))

    def shuffle(self) -> None:
        Deck.createDeck(self)
        for i in range(len(self.deck)):
            x = random.randint(0,len(self.deck)-1)
            temp1 = self.deck[x]
            self.deck[x] = self.deck[i]
            self.deck[i] = temp1
        print(self.deck)

    def deal(self) -> str:
        temp1 = self.deck[0]
        del self.deck[0]
        print(self.deck,len(self.deck))
        print(temp1)
        return temp1

d1 = Deck()
d1.shuffle()
d1.deal()
d1.deal()
d1.deal()
d1.deal()
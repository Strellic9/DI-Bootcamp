print('-------EXC 1------------')

print(abs(-3*3))
print(int('3'))
# print(input('throw me something'))

class Explanation():
    k = 0
    def File(self):
        self.name = 'ay'
        k+=1
        print(k)

    File.__doc__ = f'hey. Code runs very simple way. abs returns the 9 instead of -9. int returns integer instead of string. last one is obvious too'

# Explanation.__doc__ = f'hey'

help(Explanation.File)
# help(Explanation)

print('-------EXC 2------------')

class Currency:
    def __init__(self, currency:str, amount:int) -> None:
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return str(f'{self.amount} {self.currency}s')    

    def __int__(self):
        return self.amount

    def __repr__(self):
        return str(f'{self.amount} {self.currency}s') 

    def __add__(self, other):
        if type(other)==int:
            self.amount+=other
            return self.amount
        elif type(other)==type(self):
            if self.currency == other.currency:
                self.amount+=other.amount
                return self.amount
            else:
                raise Exception(f'cant add between {self.currency} and {other.currency}')
        else:
            raise Exception('u stoopid, cant add this. Only currency with currency') 

    def __iadd__(self, other):
        if type(other)==int:
            self.amount+=other
            return self
        elif type(other)==type(self):
            if self.currency == other.currency:
                self.amount+=other.amount
                return self
            else:
                raise Exception(f'cant add between {self.currency} and {other.currency}')

        else:
            raise Exception('u stoopid, cant add this. Only currency with currency') 

    def __call__(self):
        return str(f'{self.amount} {self.currency}s') 

    
    
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1+5)
# print(c1+c2)
# print(c1())

# c1+=5
# print(c1())

# c1+=c2
# print(c1())

print(c1+'dg')
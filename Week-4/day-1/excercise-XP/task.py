# EXC 1
from cmath import pi
from ssl import ALERT_DESCRIPTION_HANDSHAKE_FAILURE


print ('hello world \nhello world \nhello world \nhello world \n')

# EXC 2
print((99^3) * 8)

# EXC 3
print('my predictions: \n false \n true \n false \n error \n false')

# EXC 4
computer_brand = 'MSI'
print('i have an {} brand computer'.format(computer_brand))

# EXC 5
name = 'aleksei'
age = '24'
shoe_size = '27cm'
info = 'name`s {}, age`s {}, and the size of shoes are {}'.format(shoe_size,name,age)
print(info)

# EXC 6
a = 3;
b = 7;
if (b > a):
    print('praise the sun')

# EXC 7

numberCheckOdd = int(input('gib a nubmer '))
if numberCheckOdd % 2 == 0:
    print('even')
else:
    print('odd')

# EXC 8

userName = input('gib name ')
if userName==name:
    print('helo handsome')
else:
    print('no girls for u')

# EXC 9
userHeight = int(input('gib ur height in inches '))
userHeight *= 2.54
print(userHeight)
if userHeight>145:
    print('tall enough for rollercoaster')
else:
    print('not tall enough')
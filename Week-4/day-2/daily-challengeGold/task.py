space = ' '
palka = '_'
candle = 'i'
cakeCount = 1

# ____________ PART 1  calculating age


userX = input('gib ur birth date, DD-MM-YYYY \n')
date = '11-07-2022'
userX = userX.split('-')
dateX = date.split('-')

# [03,03,1998]
# 11-07-2022

for i in range(0,3):
    userX[i]=int(userX[i])
    dateX[i]=int(dateX[i])

print(userX, dateX)

age = 0

if userX[1]<dateX[1]:
    age=dateX[2]-userX[2]
elif userX[1]==dateX[1]:
    if userX[0]<=dateX[0]:
        age=dateX[2]-userX[2]
    else: 
        age=dateX[2]-userX[2]-1
else:
    age=dateX[2]-userX[2]-1

if userX[2] % 4 == 0:
    cakeCount = 2;
    
print('age', age)


# ____________ PART 2  DOING CAKES

x = age % 10
# print(x)

y = int((11-x)/2)
z = 11 - x - y
print (x,y,z)

for i in range(cakeCount):
    print(space*7+palka*y+candle*x+palka*z)
    
print('''      |:H:a:p:p:y:|
    __|___________|__
    |^^^^^^^^^^^^^^^^^|
    |:B:i:r:t:h:d:a:y:|
    |                 |
    ~~~~~~~~~~~~~~~~~~~ ''')
print('\n')
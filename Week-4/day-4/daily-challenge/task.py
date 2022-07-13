bigString = """7i3
Tsi
h%x
i #
sM 
$a 
#t%
^r!"""

print(bigString[3])

col1, col2, col3 = list(), list(), list()

for i in range(len(bigString)):
    if i % 4 == 0:
        col1.append(bigString[i])
    if i % 4 == 1:
        col2.append(bigString[i])
    if i % 4 == 2:
        col3.append(bigString[i])

print(col1,col2,col3)

matrix = [
    col1,
    col2,
    col3
] 

print(matrix)

import re

alphabet = '[a-zA-Z]' 
print(alphabet)
specialCharacters = '[!@#$%^&* ,./\| ]'

decodedList = list(' ')
for i in matrix:
    for j in range(len(i)):
        print(i,j,i[j])
        if i[j].isalpha():
            decodedList.append(i[j])
        else:
            index = len(decodedList)-1
            if decodedList[index]!=' ':
                decodedList.append(' ')

print(decodedList)
decodedString = ''.join(decodedList)
print(decodedString)
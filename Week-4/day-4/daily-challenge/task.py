bigString = """7i3
Tsi
h%x
i #
sM 
$a 
#t%
^r!"""

col1, col2, col3 = list(), list(), list()

for i in range(len(bigString)):
    if i % 4 == 0:
        col1.append(bigString[i])
    if i % 4 == 1:
        col2.append(bigString[i])
    if i % 4 == 2:
        col3.append(bigString[i])


matrix = [
    col1,
    col2,
    col3
] 

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
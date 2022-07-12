string =input('giv sentence, only words and whitespaces')
# string = 'making a mother of all omletes Jack'

list = string.split(' ')
print(list)

newList = []
newString = str()

for i in range(0,len(list)):
    newList.append(list[-i-1])

newString = ' '.join(newList)

print(newString)

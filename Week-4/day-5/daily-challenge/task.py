print('___________EXC1____________')

word = input('giv word')
letters = dict()

for i in range(len(word)):
    if word[i] not in letters:
        letters[str(word[i])] = [i]
        print(word[i])
        print(letters)
    else:
        letters[str(word[i])].append(i)
        print(word[i])


# print(letters)


print('___________EXC2____________')

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = '$1'

wallet = int(wallet[1:len(wallet)])
print(wallet)

items_purchase1 = {x: int(y[1:len(y)]) for x,y in items_purchase.items()}
print(items_purchase1)

affordableItems = list()

for key,value in items_purchase1.items():
    # print(key,value)
    if value<=wallet:
        affordableItems.append(key)

if affordableItems==[]:
    print('Nothing')
else:
    print(affordableItems)
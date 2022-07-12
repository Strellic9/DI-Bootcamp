print('EXC1 \n')

# length = input ('gib lengt \n')
# number = int (input ('gib number \n'))

# userSequence = list()

# for i in range(number):
#     userSequence.append(number*(i+1))

# print(userSequence)

print('EXC2 \n')

word = input('giv word with repeated cosecutive letters \n')
for i in range(1,len(word)): #слово длина 7, И от 1 до 7

    if i>=len(word):
            break
    while word[i-1] == word[i]:
        word = word[:i-1] + word[i:]
        if i==len(word):
            break

print(word)

# word = input('giv word with repeated cosecutive letters \n')
# for i in range(0,len(word)): #0:7
#     if i==len(word)-1:  # когда -1 - это уже конец строки; -2 - предпосл; если континью суда не приводит - не надо
#         break 
#     print(word[i])
#     if i==len(word)-2:
#         if word[i] == word[i+1]:
#              word = word[:i]
#         else:
#             while word[i] == word[i+1]:
#                 word = word[:i] + word[i+1:]
#                 # continue
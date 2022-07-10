string = input('give me a 10-letter string ')


while (len(string)!=10):
    if len(string)>10:
        print('u stoopid')
        string = input('give me a 10-letter string ')
    elif len(string)<10:
        print('u stoopid')
        string = input('give me a 10-letter string ')

print(string[0],string[len(string)-1])

for i in range(len(string)):
    print(string[0:i+1])

import random

string1 = ''.join(random.sample(string, len(string)))
print(string1)
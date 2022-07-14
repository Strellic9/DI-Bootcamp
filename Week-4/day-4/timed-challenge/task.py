string = 'rain falls, wind blows and the strong prey upon the weak'
char = 'r'

import re

x = re.findall(char, string)
# x = re.search(char, string)
print(x)

print(len(x))
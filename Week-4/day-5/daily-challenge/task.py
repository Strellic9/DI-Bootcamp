string = 'its,time,for,Jack,to,let,er,rip'

list = string.split(',')
sortedList = sorted(list)

newString = ','.join(sortedList)
print(newString)
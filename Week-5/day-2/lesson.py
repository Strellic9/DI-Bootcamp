from audioop import mul


my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]

sum = 0

for i in my_list:
    try:
        sum+=i
    except:
        print('oops, not a number here')
        pass

print(sum)

# for i in my_list:
#     if type(i) == int:
#         sum+=i

# print(sum)
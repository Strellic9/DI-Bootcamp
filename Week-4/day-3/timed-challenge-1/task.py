number = int(input('giv number'))

divisors = list()

for i in range (1,number):
    if number % i == 0:
        divisors.append(i)

print(divisors)
print(sum(divisors))

isPerfect = False
if number == sum(divisors):
    isPerfect = True

print(isPerfect)
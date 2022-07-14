print('_____________EXC 1___________ \n')
def get_full_name(fname: str, lname: str, mname: str = "") -> str:
    fullName = list()
    fullName.append(fname)
    if mname != '':
        fullName.append(mname)
    fullName.append(lname)
    fullNameString = ' '.join(fullName)
    return(fullNameString)

print(get_full_name (fname='Aleksei', lname='Baranenko'))


print('_____________EXC 2___________ \n')


print('_____________EXC 3___________ \n')



print('_____________EXC 4___________ \n')
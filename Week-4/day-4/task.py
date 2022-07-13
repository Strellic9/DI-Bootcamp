people = ["Rick", "Morty", "Beth", "Jerry", "Snowball",'Ray', 'May']

peopleNamesFourPlus = list(filter(lambda s: len(s)<5, people))

print(peopleNamesFourPlus)

hello = map(lambda s: print(f'hello {s}'), peopleNamesFourPlus)
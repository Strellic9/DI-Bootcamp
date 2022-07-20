from hashlib import new
from translate import Translator

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"] 

translator= Translator(to_lang='EN', from_lang='FR')
# result = translator.translate(french_words[0])
# print(result)

newDict = dict()
for i in french_words:
    newDict[i] = translator.translate(i)
print(newDict)
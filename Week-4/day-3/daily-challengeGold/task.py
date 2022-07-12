alphabet = 'abcdefghijklmnopqrstuvwxyz'

lengthAlphabet = len(alphabet)

message = 'If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.'
shift = 7

new_text = str()
letterIndex = int()

specialSymbols = [' ','.',';',',']

message = message.lower()

for letter in message:
    print(letter)
    if letter in specialSymbols:
        new_text += letter
    else:
        letterIndex = alphabet.index(letter)
        new_text += alphabet[(letterIndex+shift) % lengthAlphabet]

print(new_text)
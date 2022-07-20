# Create an @authenticated decorator that only allows the function to run is user1 has 'valid' set to True:
user1 = {
    'name': 'Sorna',
    'valid': True #changing this will either run or not run the message_friends function.
}


def authenticated(fn):
    def check(user: dict, *args, **kwargs):
        if user['valid'] == True:
            fn(user, *args, **kwargs)
        else:
            print('u stoopid')
    return check

@authenticated
def message_friends(user):
    print('message has been sent')

message_friends(user1)
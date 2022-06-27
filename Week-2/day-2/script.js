let userdata1 = {
	username: "Strellic9",
	password: '123456',
	timeline: '14:40',
	adress: {
		street: 'Levontin',
		house: 21,
		city: 'Tel-Aviv',
		country: 'Israel',
		zipcode: 999999,
	}
}
console.log(userdata1.adress.city)

let userdata2 = {
	username: "Strellic1",
	password: '123456',
	timeline: '11:40',

}

let userdata3 = {
	username: "Strellic2",
	password: '123456',
	timeline: '16:40',
}

let newsfeed = [userdata1, userdata2, userdata3]
console.log(newsfeed)
function pigIt(str) {
	return str
		.split(' ')
		.map(word =>
			word.match(/[\w\s]/g) ? word.substring(1) + word[0] + 'ay' : word
		)
		.join(' ');
}

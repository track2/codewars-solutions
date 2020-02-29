function isIsogram(str) {
	if (str.split('').length === 0) return true;
	return (
		str
			.toLowerCase()
			.split('')
			.filter(
				c => str.toLowerCase().indexOf(c) !== str.toLowerCase().lastIndexOf(c)
			).length === 0
	);
}

function solution(spell, dic) {
	let result = 2;
	dic.forEach(d => {
		if (spell.every(s => d.includes(s))) result = 1;
	});

	return result;
}


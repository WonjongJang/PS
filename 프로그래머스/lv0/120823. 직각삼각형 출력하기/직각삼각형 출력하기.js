const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const length = Number(input[0]);
	let result = '*';
	let i = 0;
	while (i < length) {
		console.log(result);
		result += '*';
		i++;
	}
});
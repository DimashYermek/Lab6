console.log("Excercise Number 1");
console.log("Hello, World!");
console.log("Hello, World!");
console.log("Hello, World!");

console.log('Excercise Number 10. To check if numbers are equal use Equalornot(n1,n2)')
function Equalornot(n1, n2) {
	if (n1 === n2) {
		console.log(`${n1} and ${n2} are equal numbers`);
	} 
	else {
		console.log(`${n1} and ${n2} are not equal numbers`);
	}
}

console.log('Excercise number 8. To convert dollars to tenge use convert(amount of dollars)')
function convert(d) {
	const t = d * 424.65;
	console.log(`${d} dollars is equal to ${t} tenge`);
}
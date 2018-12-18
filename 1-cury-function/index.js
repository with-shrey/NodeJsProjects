/**
 * Use node index.js to run file
 * @param num1
 * @returns {Function}
 */

function generateAdder(num1) {
	return function(num2){
		console.log(num1+num2)
	}
}

const adder = generateAdder(2)
adder(3)
adder(4)
adder(5)


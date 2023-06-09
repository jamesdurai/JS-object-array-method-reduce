let arr = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}]

var result = arr.reduce(function (acc, cv) { 
	return acc + cv.n; 
}, 0);

document.write("Summing Values in an Object Array Using Array Reduce "+result);

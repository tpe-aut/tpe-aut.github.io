var plan = [
  ["Introduction", []],
  ["I : L'industrie agro-alimentaire et les AUT", ["A : ça non plus", "B : ça non plus", "C : ça non plus"]],
  ["II : Fabrication des AUT", ["A : ça non plus", "B : ça non plus", "C : ça non plus"]],
  ["III : Impact et régulation des AUT", ["A : ça non plus", "B : ça non plus", "C : ça non plus"]],
  ["Conclusion", []]
];

for(let x = 0; x<plan.length; x++) {
  var el = document.getElementById('planP');
  el.appendChild(createDiv(plan[x][0], 1));
	for(let y = 0; y<plan[x][1].length; y++) {
		document.getElementById('planP').children[x+1].appendChild(createDiv(plan[x][1][y]));
	}
}


function createDiv(str, param) {
	let div = document.createElement("div");
	div.innerHTML = str;
	if(param==1) {
		div.setAttribute("class", "parTitle");
	}
	else{
		div.setAttribute("class", "sparTitle");
	}

return div;
}
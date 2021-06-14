	var divs = document.querySelectorAll("div");
	if(!divs[i].hasAttribute("role")){
		divs[i].classList.add("highlight");
		var divAbove = document.createElement("div");
		divAbove.classList.add("text-box");
		divAbove.title = 'Div lacks Role. This could indicate a lack of event handlers on custom controls.';
		divAbove.innerHTML = "Div: Lacks Role";
		divs[i].appendChild(divAbove);
	}
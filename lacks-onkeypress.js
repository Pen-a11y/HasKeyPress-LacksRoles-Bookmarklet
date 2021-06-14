	var divs = document.querySelectorAll("div");
	for(var i = 0; i < divs.length; i++){
			if(divs[i].hasAttribute("onclick") || divs[i].hasAttribute("onClick")){
				if(!divs[i].hasAttribute("onkeypress")){
					divs[i].classList.add("highlight");
					var divAbove = document.createElement("div");
					divAbove.classList.add("text-box");
					divAbove.title = 'Div Lacks onkeypress, but has a onClick element';
					divAbove.innerHTML = "Div";
					divs[i].appendChild(divAbove);
				}
			}
		}
	var spans = document.querySelectorAll("span");
	for(var i = 0; i < spans.length; i++){
		if(spans[i].hasAttribute("onclick" || "onClick")){
			if(!spans[i].hasAttribute("onkeypress")){
				spans[i].classList.add("highlight");
				var divAbove = document.createElement("div");
				divAbove.classList.add("text-box");
				divAbove.title = 'Span Lacks onkeypress, but has a onClick element';
				divAbove.innerHTML = "Span";
				spans[i].appendChild(divAbove);
			}
		}
	}
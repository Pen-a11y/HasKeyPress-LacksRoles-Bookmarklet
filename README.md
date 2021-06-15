# HasKeyPress-LacksRoles-Bookmarklet
This Repository is for an accessibility Bookmarklet. The bookmarklet highlights custom controls created with spans and divs that lack an onkeypress event handler, but have an onclick eventhandler. This creates an accessiblity barrier for keyboard users, as elements on webpages become inaccessible. 

There is also a secondary bookmarklet. This will highlight custom controls that lack a role element, as this can be a sign that a custom control is not keyboard accessible, and lacks certain event handlers.
<br>
## Instructions:
1. Copy the code below
2. Right Click on the bookmark section, and choose add page
3. Paste the copied code into the URL section
4. Add an appropriate name for the bookmarklet <br>
### Onclick/Onkeypress Bookmarklet
```
(javascript:( function(){ var divs = document.querySelectorAll("div"); for(var i = 0; i < divs.length; i++){ if(divs[i].hasAttribute("onclick") || divs[i].hasAttribute("onClick")){ if(!divs[i].hasAttribute("onkeypress")){ divs[i].style.border = 'solid yellow thick'; var divAbove = document.createElement("div"); divAbove.style.backgroundColor = "yellow"; divAbove.style.color = "blue"; divAbove.style.float = "left"; divAbove.style.position = "absolute"; divAbove.style.marginTop = "-30px"; divAbove.style.marginLeft = "-10px"; divAbove.title = 'Div Lacks onkeypress, but has a onClick element'; divAbove.innerHTML = "Div"; divs[i].appendChild(divAbove); }}} var spans = document.querySelectorAll("span"); for(var i = 0; i < spans.length; i++){ if(spans[i].hasAttribute("onclick" || "onClick")){ if(!spans[i].hasAttribute("onkeypress")){ spans[i].style.border = 'solid yellow thick'; var divAbove = document.createElement("div"); divAbove.style.backgroundColor = "yellow"; divAbove.style.color = "blue"; divAbove.style.float = "left"; divAbove.style.position = "absolute"; divAbove.style.marginTop = "-30px"; divAbove.title = 'Span Lacks onkeypress, but has a onClick element'; divAbove.innerHTML = "Span"; spans[i].appendChild(divAbove); }}}})();)
```
### Role Bookmarklet
```
(javascript: (function (){ var divs = document.querySelectorAll("div"); for(var i = 0; i < divs.length; i++){ if(!divs[i].hasAttribute("role")){ divs[i].style.border = 'solid yellow thick'; var divAbove = document.createElement("div"); divAbove.style.backgroundColor = "yellow"; divAbove.style.color = "blue"; divAbove.style.float = "left"; divAbove.style.position = "absolute"; divAbove.style.marginTop = "-30px"; divAbove.style.marginLeft = "-10px"; divAbove.title = 'Div lacks Role. This could indicate a lack of event handlers on custom controls.'; divAbove.innerHTML = "Div: Lacks Role"; divs[i].appendChild(divAbove); }} var spans = document.querySelectorAll("span"); for(var i = 0; i < spans.length; i++){ if(!divs[i].hasAttribute("role")){ divs[i].style.border = 'solid yellow thick'; var divAbove = document.createElement("div"); divAbove.style.backgroundColor = "yellow"; divAbove.style.color = "blue"; divAbove.style.float = "left"; divAbove.style.position = "absolute"; divAbove.style.marginTop = "-30px"; divAbove.title = 'Span lacks Role. This could indicate a lack of event handlers on custom controls.'; divAbove.innerHTML = "Span: Lacks Role"; divs[i].appendChild(divAbove); }}})();)
```

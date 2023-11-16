# Bugs

### 1 PRINT() twice when function define ###				###DONE###

### 2 List [1,2,3] - 1 ###

### 3 PRINT([1,2,3]) build in ###

### 4 PRINT ^^^^^^ arrow build in ###					###DONE###		

### 5 POP is not working right ###						###DONE###

### 6 <div/> click is not working ###					###DONE###

### 7 JavaScript Obfuscate ###  							###DONE###

### 8 While not PRINT  ### 								###NOT DONE### for single thread, no interupt

### 9 WAIT stop the program  ###                         ###NOT DONE### for single thread, no interupt

### 10 SRC_ADD need Wait  ###                            ###NOT DONE### for single thread, no interupt

### 11 the Archtecture of the DOM  ###
	


Finding HTML Elements

Method									Description
document.getElementById(id)				Find an element by element id
document.getElementsByTagName(name)		Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name

Changing HTML Elements

Property								Description
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value			Change the attribute value of an HTML element
element.style.property = new style		Change the style of an HTML element

Method									Description
element.setAttribute(attribute, value)	Change the attribute value of an HTML element

Adding and Deleting Elements

Method									Description
document.createElement(element)			Create an HTML element
document.removeChild(element)			Remove an HTML element
document.appendChild(element)			Add an HTML element
document.replaceChild(new, old)			Replace an HTML element
document.write(text)					Write into the HTML output stream


Adding Events Handlers

Method									Description
document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event

### 10 atomic action ###

### 10.1 create_element ###



#Done#
DIV_CREATE_PRE( div_id, reference_id )
{
	const element = document.createElement('div');
	element.setAttribute('id', 'id');
	var referenceNode = document.getElementById("reference_id")
	referenceNode.parentNode.insertBefore(element, referenceNode);
}



#Done#
DIV_CREATE_POST( div_id, reference_id )
{
	const element = document.createElement('div');
	element.setAttribute('id', 'id');
	var referenceNode = document.getElementById("reference_id")
	referenceNode.parentNode.insertBefore(element, referenceNode.nextSibling);
}


#Done#
DIV_CREATE_CHILD_PRE( div_id, parent_id )
{
	const element = document.createElement('div');
	element.setAttribute('id', 'id');
	document.getElementById("parent_id").prepend(element);
}

#Done#
DIV_CREATE_POST( div_id, parent_id )
{

	const element = document.createElement('div');
	element.setAttribute('id', 'id');
	document.getElementById("parent_id").appendChild(element);

}

#Done#
DIV_CREATE_ATTRIBUTE(div_id,attribute,value)
{

	//document.getElementById("body")setAttribute("class", "democlass");
	document.getElementById("id").setAttribute(attribute, value);

}


### 10.2 change_element_content ###

#Done#
DIV_CHANGE_ATTRIBUTE(div_id, attribute, value)
{
	var div = document.getElementById(id);
	div.setAttribute(attribute, value)

}

#Done#
DIV_CHANGE_INNER_HTML(div_id, html_content)
{
	var div = document.getElementById(id);
	div.innerHTML = html_content

}

#Done#
DIV_OVERWRITE_STYLE(div_id, style)
{
	var div = document.getElementById(id);
	div.setAttribute('style','color:red;background-color:yellow');
}

#Done#
DIV_ADD_STYLE(div_id, style)
{
	var div = document.getElementById(id);
	div.style.cssText += 'color:red;background-color:yellow';
}


### 10.3 add_element() ###

#Done#
DIV_ADD_INSIDE(div_id, child_element) //This is setting the id in the child_element when input
{

	var div = document.getElementById(id);
	div.prepend(child_element)
}


#Done#
DIV_ADD_POST(div_id, child_element) //This is setting the id in the child_element when input
{

	var div = document.getElementById(id);
	div.appendChild(child_element)
}


#Done#
DIV_REMOVE(div_id)
{
	const element = document.getElementById("myLI");
	element.parentNode.removeChild(element);
}


### 10.4 add_event() ###

#Done#
EVENT_ADD(div_id, event, function(){code} )
{
	document.getElementById(id).addEventListener(event, function, true);
}

#Done#
EVENT_REMOVE(div_id, event, function(){code} )
{
	document.getElementById(id).removeEventListener(event, myFunction);
}

add_onclick(id,  function(){code} )
{
	document.getElementById(id).addEventListener("click", myFunction, true);
}

add_onmousedown(id,  function(){code} )
{
	document.getElementById(id).addEventListener("mousedown", myFunction, true);
}

add_onmouseup(id,  function(){code} )
{
	document.getElementById(id).addEventListener("mouseup", myFunction, true);
}


add_onmouseover(id,  function(){code} )
{
	document.getElementById(id).addEventListener("mouseover", myFunction, true);
}

add_onmouseout(id,  function(){code} )
{
	document.getElementById(id).addEventListener("mouseout", myFunction, true);
}

add_onload(id,  function(){code} )
{
	document.getElementById(id).addEventListener("load", myFunction, true);
}


add_onunload(id,  function(){code} )
{
	document.getElementById(id).addEventListener("unload", myFunction, true);
}

add_onchange(id,  function(){code} )
{
	document.getElementById(id).addEventListener("change(", myFunction, true);
}




###12 Simplify the DOM function  ###

1) document.getElementById(“my_squad”);

2) document.getElementsByTagName(“abc”);

3) Node:
node.childNodes
node.firstChild
node.lastChild
node.parentNode
node.nextSibling
node.previousSibling

4) document.createElement(“li”)

5) appendChild:
var myNewListItem = document.createElement(“li”)
var myNewProd = document.createElement(“prod5”);

var myLinkList = document.getElementById(“List”)
myLinkList.appendChild(myNewListItem);
myLinkList.LastChild.appendChild(myNewProd);

6) removeChild:
var myLinkList = document.getElementById(“list”)
var myRemovedLink = myLinkList.lastChild;
myLinkList.removeChild(myRemoveLink);

7) getAttribute:

var myLinkFive = document.getElementById(“Prod_5”);
var myLinkAttribute = myLinkFive.getAttribute(“abc”);

8) setAttribute:

Var myLinkFive = document.getElementById(“Prod_5);
myLinkFive.setAttribute(“abc”, ”Awesome”);

9) document.forms:

10) innerHTML:

Var myContentHolder = document.getElementById(“abc”);
myContentHolder.innerHTML = “<p> These are the most essential DOM methods in JavaScript</p>”;



/*
Here’s an easy and short explanation 👇

Property	|    What it gives	                             |   Includes HTML tags?    |                Notes

innerText	|    Visible text only (what you see on screen)	 |       ❌ No	          |          Ignores hidden text, respects CSS (like display:none)
textContent	|    All text inside (even hidden)	             |       ❌ No	          |          Ignores CSS, faster than innerText
innerHTML	|    HTML code inside the element	             |       ✅ Yes	          |          You get (or set) HTML markup
outerHTML	|    HTML code including the element itself	     |       ✅ Yes	          |          Gives full element + its inner HTML
*/

//Example:

<div id="box"><b>Hello</b> World</div>

/*
Property	        Result

innerText →         "Hello World"	
textContent →       "Hello World"	
innerHTML →         "<b>Hello</b> World"	
outerHTML →         "<div id='box'><b>Hello</b> World</div>"
*/
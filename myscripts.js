// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');
var img7 = document.getElementById('myImg7');
var img8 = document.getElementById('myImg8');
var img9 = document.getElementById('myImg9');
var img10 = document.getElementById('myImg10');
var img11 = document.getElementById('myImg11');
var img12 = document.getElementById('myImg12');
var img13 = document.getElementById('myImg13');
var img14 = document.getElementById('myImg14');
var img15 = document.getElementById('myImg15');
var img16 = document.getElementById('myImg16');
var img17 = document.getElementById('myImg17');
var img18 = document.getElementById('myImg18');
var img19 = document.getElementById('myImg19');
var img20 = document.getElementById('myImg20');
var img21 = document.getElementById('myImg21');
var img22 = document.getElementById('myImg22');
var img23 = document.getElementById('myImg23');
var img24 = document.getElementById('myImg24');
var img25 = document.getElementById('myImg25');
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");

img1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
}

img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
}

img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
}

img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
}

img7.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
}

img8.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
}

img9.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img10.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img11.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img12.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img13.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img14.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img15.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img16.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img17.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img18.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img19.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
}

img20.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;
}

img21.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img22.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img23.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img24.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;	
}

img25.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.title;		
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  document.body.style.overflow = "visible";	//show background scroll bar after pushing close button of an image pop up
}

function filterSelection(c) {	//Definition of function filterSelection
  var x, i;
  x = document.getElementsByClassName("img");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
	w3RemoveClass(x[i], "hide");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	if (x[i].className.indexOf(c) == -1) w3AddClass(x[i], "hide");	
  }
  numberOfImg("show");
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
// Get the container element
var btnContainer = document.getElementById("myBtnContainer");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function numberOfImg(name) {
 var txt1 = "#grid .";
 var txt = txt1+name;
 var numberOfImg = document.querySelectorAll(txt).length;
 //document.getElementById("test").innerHTML = numberOfImg;
 checkWidth(numberOfImg);
 if (x.matches) { // If media query matches
		//document.getElementById("grid").style.display="block";
		//document.getElementById("grid").style.marginLeft="20vw";
		//document.getElementById("grid").style.columnCount=1;
		//document.getElementById("grid").style.marginRight="20vw";
		//document.getElementById("grid").style.minWidth="100vw";
		//document.getElementById("grid").style.columnGap="0px";
		//document.getElementById("test").innerHTML = "f1";
	} //else {
 if($(window).width() >= 800){
		
 }
}

var x = window.matchMedia("(max-width: 800px)")
//myFunction(x) // Call listener function at run time
//x.addListener(numberOfImg()) // Attach listener function on state changes
document.getElementById("body").onload = function() {numberOfImg("img")};

$(document).ready(function(){
	var txt1 = "#grid .";
	var name = "img";
	var txt = txt1+name;
	var numberOfImg = document.querySelectorAll(txt).length;
	checkWidth(numberOfImg);
	//$(window).resize(checkWidth(numberOfImg));
})

$( window ).resize(function() {
	var txt1 = "#grid .";
	var name = "show";
	var txt = txt1+name;
	var numberOfImg = document.querySelectorAll(txt).length;
	checkWidth(numberOfImg);	
});



function checkWidth(numberOfImg){
		var windowSize = $(window).width();
		
		if(windowSize < 800){
			//alert("smaller than 800px");
			//document.getElementById("grid").style.maxWidth="90vw";
			//document.getElementById("grid").style.minWidth="90vw";
			document.getElementById("grid").style.display="block";
			document.getElementById("grid").style.marginTop="8px";
			document.getElementById("grid").style.columnCount=1;
			document.getElementById("grid").style.columnGap="8px";
			document.getElementById("grid").style.marginLeft="0vw";
			document.getElementById("grid").style.marginRight="10vw";
			document.getElementById("grid").style.maxWidth="100vw";
			var bilder = document.getElementsByClassName("img");
			for(var i=0, j=bilder.length;i<j;i++)
			{
				bilder[i].style.marginTop="8px";
				bilder[i].style.maxWidth="90vw";
				//bilder[i].style.minWidth="90vw";
				//bilder[i].style.minWidth="100vw";
				bilder[i].style.marginLeft="5vw";
				bilder[i].style.marginRight="5vw";
				bilder[i].style.height="100%";
				//bilder[i].style.justifyContent="center"
			}
		}
		if(windowSize >= 800){
			//alert("bigger than 800px");
			//document.getElementById("test").innerHTML = "f2";		
			 if (numberOfImg == 1) {
				document.getElementById("grid").style.display="block";
				document.getElementById("grid").style.marginTop="8px";
				document.getElementById("grid").style.columnCount=1;
				document.getElementById("grid").style.columnGap="8px";
				document.getElementById("grid").style.marginLeft="31vw";
				document.getElementById("grid").style.marginRight="39vw";
				document.getElementById("grid").style.maxWidth="30vw";
				var bilder = document.getElementsByClassName("img");
				for(var i=0, j=bilder.length;i<j;i++)
				{
					bilder[i].style.marginTop="8px";
					bilder[i].style.maxWidth="30vw";
					bilder[i].style.marginLeft="8px";
					bilder[i].style.height="100%";
				}
			  }
			 if (numberOfImg == 2) {
				document.getElementById("grid").style.display="flex";
				document.getElementById("grid").style.marginTop="8px";
				document.getElementById("grid").style.columnCount=1;
				document.getElementById("grid").style.columnGap="8px";
				document.getElementById("grid").style.marginLeft="16vw";
				document.getElementById("grid").style.marginRight="24vw";
				document.getElementById("grid").style.maxWidth="60vw";
				var bilder = document.getElementsByClassName("img");
				for(var i=0, j=bilder.length;i<j;i++)
				{
					bilder[i].style.marginTop="8px";
					bilder[i].style.maxWidth="30vw";
					bilder[i].style.marginLeft="8px";
					bilder[i].style.height="100%";
					bilder[i].style.marginRight="0vw";
				}
			  }
			 if (numberOfImg == 3) {
				document.getElementById("grid").style.display="flex";
				document.getElementById("grid").style.marginTop="8px";
				document.getElementById("grid").style.columnCount=1;
				document.getElementById("grid").style.columnGap="8px";
				document.getElementById("grid").style.marginLeft="3vw";
				document.getElementById("grid").style.maxWidth="90vw";
				document.getElementById("grid").style.minWidth="90vw";
				var bilder = document.getElementsByClassName("img");
				for(var i=0, j=bilder.length;i<j;i++)
				{
					bilder[i].style.marginTop="8px";
					bilder[i].style.maxWidth="30vw";
					bilder[i].style.marginLeft="8px";
					bilder[i].style.height="100%";
					bilder[i].style.marginRight="0vw";
				}
			  }
			 if (numberOfImg > 3) {
				document.getElementById("grid").style.display="block";
				document.getElementById("grid").style.marginTop="8px";
				document.getElementById("grid").style.columnCount=2;
				document.getElementById("grid").style.marginLeft="16vw";
				document.getElementById("grid").style.marginRight="24vw";
				document.getElementById("grid").style.maxWidth="60vw";
				document.getElementById("grid").style.minWidth="60vw";
				document.getElementById("grid").style.columnGap="8px";
				var bilder = document.getElementsByClassName("img");
				for(var i=0, j=bilder.length;i<j;i++)
				{
					bilder[i].style.marginTop="8px";
					bilder[i].style.maxWidth="30vw";
					bilder[i].style.marginLeft="8px";
					bilder[i].style.height="100%";
				}
			  }
		}
	}

//$(window).resize(checkWidth);
//document.getElementById("body").onload = function() {checkWidth()};

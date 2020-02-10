
function maininit(){
    IDsToVars();
    morebtn.addEventListener("click", showcontent);
    aboutbtn.addEventListener("click", showcontent);
    lessbtn.addEventListener("click", hidecontent);
   }

function showcontent(){
	// morebtn.style.display = "none";
	
	firstsup.style.display = "inline";
	hiddenwrapper.style.display = "block";
}
function hidecontent(){
	// morebtn.style.display = "inline";
	
	firstsup.style.display = "none";
	hiddenwrapper.style.display = "none";
}



function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
};
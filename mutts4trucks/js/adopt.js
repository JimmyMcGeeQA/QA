function init(){
    IDsToVars();
    modalclose.addEventListener("click", closeform);
    signupform.addEventListener("click", showform);
}

function closeform(){
    modalwindow.style.display = "none";

}
function showform(){
    modalwindow.style.display = "block";

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
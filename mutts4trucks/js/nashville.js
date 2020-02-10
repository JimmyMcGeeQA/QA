var galleryindex = 1;
var galimagecaption = ['','Country music star, Cassadee Pope, stopped by to lend a hand.','Driver, Amber Carlton-Wise, and her new co-pilot.','Driver, Aldrick Battle, meets his dog, Zoro, for the first time.','Did someone say trucks?','I love going for rides!','Driver, Jacinda Duran, with her new dog, Miles.','Cora gets a hug from her new mom, Shannon Vogel.','Did someone say belly rubs?']
function init(){
    


    IDsToVars();
    modalclose.addEventListener("click", closeform);
    showgallery.addEventListener("click", displaygallery);
    galleryprevious.addEventListener("click", displaygalleryprevious);
    gallerynext.addEventListener("click", displaygallerynext);

    mobilegallerycell.addEventListener("click", mobilegalleryshow);
    backtonasharticle.addEventListener("click", mobilegalleryhide);
}

function mobilegalleryshow(){
    copysection.style.display = "none";
    mobileopengallery.style.display = "block";
    mobileopengallery.scrollIntoView();
    containerall.style = "background-color:#e0e0e0;"

}
function mobilegalleryhide(){
    copysection.style.display = "block";
    mobileopengallery.style.display = "none";
    
    containerall.style = "background-color:#fff;"

}
function closeform(){
    modalwindow.style.display = "none";

}
function updateindex(newindex){
    galleryindex = newindex;
    displaygallery();
}
function displaygallery(){
    var imageindex = galleryindex.toString();
    galleryview.innerHTML = "<img src='img/galleryview"+imageindex+".jpg'>";
    gallerycount.innerHTML = "<span>"+imageindex+ " of 8</span>"
    gallerycaption.innerHTML = "<span>"+ galimagecaption[imageindex]+ "</span>"
    modalwindow.style.display = "block";

}
function displaygalleryprevious(){
    galleryindex --;
    if (galleryindex < 1){
        galleryindex = 8
    }
    var imageindex = galleryindex.toString();
    galleryview.innerHTML = "<img src='img/galleryview"+imageindex+".jpg'>";
    gallerycount.innerHTML = "<span>"+imageindex+ " of 8</span>";
    gallerycaption.innerHTML = "<span>"+ galimagecaption[galleryindex]+ "</span>"
}
function displaygallerynext(){
    galleryindex ++;
    if (galleryindex > 8){
        galleryindex = 1
    }
    var imageindex = galleryindex.toString();
    galleryview.innerHTML = "<img src='img/galleryview"+imageindex+".jpg'>";
    gallerycount.innerHTML = "<span>"+imageindex+ " of 8</span>"
    gallerycaption.innerHTML = "<span>"+ galimagecaption[galleryindex]+ "</span>"
    
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
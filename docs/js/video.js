
function init(){
    IDsToVars();
    
   
    heroplaybtn.addEventListener("click",function(){loadvideo('https://players.brightcove.net/5036649800001/default_default/index.html?videoId=6124441786001');});
    
    thumb1.addEventListener("click",function(){loadvideo('https://players.brightcove.net/5036649800001/default_default/index.html?videoId=6124433116001');});
    watchmilesbtn.addEventListener("click",function(){loadvideo('https://players.brightcove.net/5036649800001/default_default/index.html?videoId=6124433116001');});
    thumb2.addEventListener("click",function(){loadvideo('https://players.brightcove.net/5036649800001/default_default/index.html?videoId=6124433051001');});
    watchcompanionbtn.addEventListener("click",function(){loadvideo('https://players.brightcove.net/5036649800001/default_default/index.html?videoId=6124433051001');});
    thumb3.addEventListener("click",function(){loadvideo('https://players.brightcove.net/5036649800001/default_default/index.html?videoId=6124436090001');});
    watchcopilotbtn.addEventListener("click",function(){loadvideo('https://players.brightcove.net/5036649800001/default_default/index.html?videoId=6124436090001');});
    
}


function loadvideo(videourl){
    watch.innerHTML = "<div id='brightcovewrapper'><div id='brightcovecontainer' ><iframe id='bcplayer' src='"+ videourl +"' allowfullscreen='' allow='encrypted-media' ></iframe></div></div>";
   // watch.innerHTML = "<div id='brightcovewrapper'><div id='brightcovecontainer' ><video class='video-js' controls='controls' data-account='5036649800001' data-application-id='data-application-id' data-embed='default' data-player='H1yR_0TGZ' data-video-id='6124441786001' id='vjs_video_301'>&nbsp;</video></div></div>";
    watch.style.display = "block";
    watch.scrollIntoView();
    document.getElementById('vjs_video_301').play();
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
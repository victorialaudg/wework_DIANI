$(window).on("load resize orientationchange", function(){
    var width = $(window).width();
        if(width<=720){
            var fin = "-sm";
        }
        else{
            var fin = "-lg";
        }
        var vid = $('#videointro');
        $(vid).attr('src','../assets/video/videoapertura'+fin+'.mp4');
});

var rect=document.getElementById("center")

rect.addEventListener("mousemove",function(value){
    var location=rect.getBoundingClientRect();
    var insiderectval=value.clientX-location.left;

    if(insiderectval<location.width/2){
        var redcolor=gsap.utils.mapRange(0,location.width/2,255,0,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,

        });

    }
    else {
        var bluecolor=gsap.utils.mapRange(location.width/2,location.width,0,255,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4,

        }); 

    }
    // else{
    //     gsap.to(rect,{
    //         backgroundcolor:'white',
    //     })
    // }



});
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
       backgroundColor:"white", 
    })
})
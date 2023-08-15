
var crsr=document.querySelector('#cursor');
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    document.querySelector('#cursor-blur').style.left=dets.x-150+"px";
    document.querySelector('#cursor-blur').style.top=dets.y-150+"px";
})


// code for when curson hover on the navigation bar make white border round shape circle around cursor

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",

        end:"top -11%",
        scrub:1

    }
}) 

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start:"top -30%",
        end:"top -100%",
        scrub:2

    }
})
gsap.from(".sq1",{
    scale:0,
    rotate:"100%",
    backgroundColor:"violate",
    duration:2,
    delay:0.3
})
gsap.from(".sq2",{
    scale:0,
    rotate:"100%",
    backgroundColor:"violate",
    duration:2, 
    delay:0.3,
    scrollTrigger:{
        trigger:".sq2",
        scroller:"body",
        markers:true,
        start:"top 70%",
       
    }
})
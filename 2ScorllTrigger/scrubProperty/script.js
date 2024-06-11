gsap.from(".progress",{
    height:"0px",
    duration:1,
    scrollTrigger:{
        trigger:".progress",
        scroll:"body",
        markers:true,
        start:"top 90%",
        end:"top 20%",
        scrub:1,
    }
})
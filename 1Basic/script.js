gsap.to(".sq",{
    x:1000,
    duration:1,
    delay:0.5,
    backgroundColor:"red",
    scale:0.8,
    rotate:"50%",
    borderRadius:"50%",
    repeat:3,
    yoyo:true,  //comes to orignal potion after the animation done..
})

gsap.from("h1",{

    opacity:0,
    y:300,
    duratio:3,
    delay:1,
    stagger:1 // for smoothness and comes element one by one
    
})
gsap.from("h2",{

    opacity:0,
    x:-100,
    duratio:3,
    delay:1.3,
    stagger:1 // 
    
})
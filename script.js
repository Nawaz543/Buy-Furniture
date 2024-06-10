//nav animation
{
let t1=gsap.timeline();
t1.from("#logo",{
    x:-500,
    scale:2,
    duration:1
})
t1.to("#logo",{
    x:-100,
    duration:0.7,
    delay:0
})
t1.from("#logo h1",{
    scale:0,
    y:-100
})
let t2=gsap.timeline();
t2.from("#img",{
    x:500,
    scale:2,
    duration:1
})
t2.to("#img",{
    x:100,
    duration:0.7,
    delay:0
})
t2.from("#logo p",{
    scale:0,
    y:100
})
}

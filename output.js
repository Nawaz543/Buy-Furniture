const scroll = new LocomotiveScroll({
    el: document.querySelector ('[data-scroll-container]'),
    smooth: true
});

function count(){
let mynum=document.querySelectorAll(".no");
let speed=80;
mynum.forEach((mycount)=>{
let target_count=mycount.dataset.count;
let init_count=+mycount.innerText;
// console.log(target_count);
if(init_count<target_count){
  
let new_increment_num= Math.floor(target_count/speed);
const updateno=()=>{
    init_count+=new_increment_num;
    mycount.innerText=init_count;
    if(init_count<target_count){
        setTimeout(()=>{updateno()},5)
    }
}
updateno();
}
else return;
})
}
let c=0;
function change(){
    if(c==0){
    gsap.from("#conc1",{
       x:300,
       y:300,
       duration:3
    })
    gsap.to("#conc5",{
        x:300,
        y:-300,
        duration:3
     })
     gsap.from("#conc3",{
        x:100,
        y:-100,
        rotate:90,
        duration:3
     })
    }
    else return;
    c++;
}
let points = 0;
const scorediv = document.getElementById("scorediv")
const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");
const door3 = document.getElementById("door3");
const container = document.getElementById("container");
const start = document.getElementById("start")
const door1level = document.getElementById("door1level");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const back = document.getElementById('back')
const scoredivOperations = () => {scorediv.innerHTML = `${points}points`
scorediv.style.width = "100px";
scorediv.style.height ="50px";
scorediv.style.backgroundColor = "black"
scorediv.style.margin = "auto"
scorediv.style.textAlign = "center"}

btn1.addEventListener('click', ()=>{
    points--
    scoredivOperations();
    door1level.style.display = "none"
    p1.style.display = "block"
    back.style.display ="block"
})
btn3.addEventListener('click', ()=>{
    points += 5
    scoredivOperations()
    door1level.style.display = "none"
    p3.style.display = "block"
    back.style.display ="block"

})
btn2.addEventListener('click', ()=> {
    points--
    scoredivOperations()
    door1level.style.display = "none"
    p2.style.display = "block"
    back.style.display ="block"
})
back.addEventListener('click', ()=>{
     door1level.style.display = "block"
   //  container.style.display = "flex";
   p1.style.display = "none"
   p2.style.display = "none"
   p3.style.display = "none"

   back.style.display ="none"

})
door1.addEventListener("click", function instruction(){
    points += 2;
scoredivOperations();
container.style.display = "none";
door1level.style.display = "block";

},{once:true})



door2.addEventListener("click", function instruction2(){
    points += 2
    door2.style.backgroundColor = "orange"
    scoredivOperations()
},{once:true})

door3.addEventListener("click", instruction3 = () => {
    points--
    door3.style.backgroundColor = "black" 
    scoredivOperations()
},{once:true})

start.addEventListener("click", ()=> {
    container.style.display = "flex";
    start.style.display = "none";
},{once:true});
let points = 0;
const scorediv = document.getElementById("scorediv")
const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");
const door3 = document.getElementById("door3");
const scoredivOperations = () => {scorediv.innerHTML = `${points}points`
scorediv.style.width = "100px";
scorediv.style.height ="50px";
scorediv.style.backgroundColor = "black"
scorediv.style.margin = "auto"
scorediv.style.textAlign = "center"}

door1.addEventListener("click",function instruction(){
    points += 2
    door1.style.backgroundColor = "green"
door1.style.textAlign = "center"
scoredivOperations()
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
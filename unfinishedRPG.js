let points = 0;
const scorediv = document.getElementById("scorediv")
const door1 = document.getElementById("door1")

door1.addEventListener("click",function instruction(){
    points += 2
    door1.innerHTML = "You enter a room with two more doors points"
    door1.style.backgroundColor = "green"
door1.style.textAlign = "center"
scorediv.innerHTML = `${points}points`
})

const door2 = document.getElementById("door2")

door2.addEventListener("click", function instruction2(){
    door2.style.backgroundColor = "orange"

})
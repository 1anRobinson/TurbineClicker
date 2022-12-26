const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

c.fillStyle = 'cornflowerblue'
c.fillRect(0,0,canvas.width, canvas.height)

const backgroundImage = new Image()
backgroundImage.src = "turbine/backgroundA.png"

const pole = new Image()
pole.src = "turbine/pole.png"

const blades = new Image()
blades.src = "turbine/SpriteSheet.png"

const backgroundA = new Sprite
({
    image: backgroundImage,
    position: 
    {
        x: 0, 
        y: 0
    },
    frames: {max: 1}
})

const turbineA = new Sprite
({
    image: blades,
    position:
    {
        x: 246,
        y: 368
    },
    frames: {max:8},
})

const turbinePole = new Sprite
({
    image: pole,
    position:
    {
        x: 310,
        y: 437
    },
    frames:{max:1},
    layers:{max:1}
})

function animate()
{
    window.requestAnimationFrame(animate)
    backgroundA.draw()
    turbinePole.draw()
    turbineA.draw()
    
}
animate()

window.addEventListener('click', (e) => 
{
    if(e.offsetX >= 264 && e.offsetX <= 361 && 
        e.offsetY >= 400 && e.offsetY <= 528) //bounds for clicking the turbine
    {
       increment();
    }
    
})

let clicks = 0;
let numHouse = 1;
function increment()
{
   clicks++;
   
   if (clicks >= 15)
   {
       let wind = document.querySelector('wind');
       wind.textContent = "\nGust of Wind Unlocked!"
   }
   
   if (clicks >= 15)
   {
       let panel = document.querySelector('panel');
       panel.textContent = "Solar Panel Unlocked!"
   }

   if (clicks >= 13 && clicks % 13 == 0)//supposed to be >= 10,715
   {
       let house = document.querySelector('house');
       house.textContent = "You can now power 1 American home for " + clicks / 13 + " hours!"
   }

   document.querySelector('span').textContent = clicks;
}
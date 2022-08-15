const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

c.fillStyle = 'cornflowerblue'
c.fillRect(0,0,canvas.width, canvas.height)

const backgroundImage = new Image()
backgroundImage.src = "turbine/backgroundA.png"

const turbine = new Image()
turbine.src = "turbine/SpriteSheet.png"

class Sprite
{
    constructor({image, position, speed})
    {
        this.position = position
        this.image = image
    }

    draw()
    {
        c.drawImage(this.image, 0,0)
    }
}
const backgroundA = new Sprite
({
    image: backgroundImage,

    position: 
    {
        x: 0, 
        y: 0
    },

})

function animate()
{
    window.requestAnimationFrame(animate)
    backgroundA.draw()
    c.drawImage
    (
        turbine, 
        0,
        0,
        turbine.width / 4,
        turbine.height / 2,
        canvas.width / 2 - turbine.width / 2 -63,      // specific
        canvas.height / 2 - (turbine.height / 2) +247, // turbine placement
        turbine.width / 4,
        turbine.height / 2,
    )
}
animate()

window.addEventListener('click', (e) => 
{
    if(e.offsetX >= 264 && e.offsetX <= 361 && 
        e.offsetY >= 400 && e.offsetY <= 528) //bounds for clicking the turbine
    {
        console.log(e)
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
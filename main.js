const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

c.fillStyle = 'cornflowerblue';
c.fillRect(0,0,canvas.width, canvas.height);

const image = new Image();
image.src = "turbine/backgroundA.png";

let clicks = 0;
let numHouse = 1;

c.drawImage(image, 0,0);

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
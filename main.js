let image = document.querySelector('img');
let clicks = 0;

function stop()
{
    image.src = "turbine/turbine1.png";
}
function turn()
{
    image.src = "turbine/turbine.gif";
}
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

   if (clicks >= 15)
   {
       let house = document.querySelector('house');
       house.textContent = "You can now power 1 american home for [insert hours here] hours !"
   }

   document.querySelector('span').textContent = clicks;
}
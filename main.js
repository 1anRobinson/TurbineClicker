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
   let counter = document.querySelector('span');
   if (counter == 15)
   {
   }
   counter.textContent = clicks;
}
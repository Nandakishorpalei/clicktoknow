var partner1=prompt("what is your name ? ");
var partner2=prompt("what is your partner's name ? ");
document.querySelectorAll("h2")[0].innerHTML= "your name is " + partner1;
document.querySelectorAll("button")[0].addEventListener("click",othersname);

function othersname()
{
  document.querySelectorAll("h2")[1].innerHTML = " your partner is "+ partner2;
}

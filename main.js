document.querySelector('form').addEventListener('submit',lovecheak);

function lovecheak(event){
event.preventDefault();
let name= document.querySelector('#yname').value;
let gname= document.querySelector('#ygname').value;
display(name,gname);
}
function display(name,gname){
  let p=Math.floor(Math.random()*50)+50;
  document.querySelector('#res').innerText=name+" 💕 "+gname+" Love Is "+ p+"%";
  console.log(p)
}



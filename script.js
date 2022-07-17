document.addEventListener('DOMContentLoaded', articlesPlusMinus);

let buttonMinus = document.querySelector('.Header_button_minus');
let buttonPlus = document.querySelector('.Header_button_plus');
var counterNumber = 15;

function articlesPlusMinus() {
buttonMinus.onclick = function minus_article() {
    document.querySelector('.Header_form_number').stepDown(1);
    counterNumber --;
    document.querySelector('.out').innerHTML = counterNumber;
}
buttonPlus.onclick = function plus_article() {
    document.querySelector('.Header_form_number').stepUp(1);
    counterNumber ++;
    document.querySelector('.out').innerHTML = counterNumber;
}    

}

/*------------------------------------------------------------------------------------*/

let divContent = document.getElementById('divContent');
let listEnd = document.getElementById('listEnd');
let itemCount = 1;
let appending = false;

window.addEventListener('DOMContentLoaded', load);
function load(){
addItems();
}

function addItems(){
appending = true;
for(let i=0;i<counterNumber;i++){
  let item =generateDataBlock(['Article №', itemCount].join(''));
  divContent.appendChild(item);
  itemCount++;
}
appending = false;
}

function generateDataBlock(message){
let item = document.createElement('div');
item.setAttribute('class', 'item');
item.textContent = message;
return item;
}

let options = {
root: null,
rootMargin: '0px',
threshold: 1.0
};

let callback = (entries, observer)=>{
entries.forEach(entry => {
  if(entry.target.id === 'listEnd'){
    if(entry.isIntersecting && !appending){
      appending = true;
      setTimeout(() => {
        addItems();
      }, 3000);
    }
  }
});
};
let observer = new IntersectionObserver(callback, options);
observer.observe(listEnd); 

/*------------------------------------------------------------------------------------*/






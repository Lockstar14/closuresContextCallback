window.onload = function() {
    let items = document.querySelectorAll('.items .item')
    for(let item of items){
        item.onclick = activeItem
    }
  
function activeItem(){
    this .classList.toggle('active-item')
}
for(let item of items){
    item.onclick = function(){
        this.style.display = "none"
    }
}
// setInterval(function(){
//     let randomItems = Math.floor(Math.random()*items.length)
//     let randomItem = items[randomItems]
//     activeItem.call(randomItem)
//     // activeItem
// },1000)
}
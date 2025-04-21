function abdo(eee){
    let aaa=document.getElementById('menu')
    let list=document.getElementById('main-list')
    if (eee.src.includes('assets/images/icon-menu.svg')){
    eee.src="assets/images/icon-menu-close.svg"}
    else{eee.src ='assets/images/icon-menu.svg'}
    list.classList.toggle('move')
    console.log('h1')
}


const list = document.getElementById("main-list");
const aaa = document.getElementById("menu");

document.addEventListener('click', function(event) {
    if (!list.contains(event.target) && event.target.id !== "menu") {
        list.classList.remove("move");
        aaa.src = "assets/images/icon-menu.svg"; 
    }
});
function remove(){
    const list = document.getElementById("main-list");
    const aaa = document.getElementById("menu");
    if (window.innerWidth>770) {
        list.classList.remove("move");
        aaa.src = "assets/images/icon-menu.svg"; 
    }
}
window.addEventListener("resize", remove);
remove();
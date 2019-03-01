const adaptivList = document.querySelector('.adaptiv-list');
const selectedItem = adaptivList.querySelector('.selected-item');
const list = adaptivList.querySelector('.list');
let activeText = "World of Warplanes";
let dropDownOpen = false;
const textArr = ["World of Tanks", "World of Warplanes", "World of Warships"];
renderList();

function renderList() {
    textArr.map(option => createItem(option, option === activeText));
}

function createItem(item, active) {
    const link = document.createElement('a');
    const li = document.createElement('li');
    const text = document.createTextNode(item);
    link.setAttribute('href', '#');
    link.appendChild(text);
    li.appendChild(link);
    li.dataset.text = item;
    if(active) li.classList.add('active');
    list.appendChild(li);
}

adaptivList.addEventListener("click", function(e) {
    e.stopPropagation();
    toggleList();
})

list.addEventListener("click", function(e) {
    var target = e.target;
    while(target != this) {
        if(target.localName == "li") {         
            setActivate(target);
            return;
        }
        target = target.parentNode;
    }
})

function setActivate(target) {    
    for(let i = 0; i < list.children.length; i++) {
        list.children[i].classList.remove("active");
    }
    target.classList.add("active");
    selectedItem.children[0].innerText = target.dataset.text;
    activeText = target.dataset.text;
}

function toggleList() {
    dropDownOpen = !dropDownOpen;
    if(dropDownOpen) {        
        list.classList.add('show');
    } else {        
        list.classList.remove('show');
    }
}
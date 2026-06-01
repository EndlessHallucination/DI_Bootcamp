let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("strong");
}

function highlight() {
  allBoldItems.forEach(function(item) {
    item.style.color = "blue";
  });
}

function returnItemsToDefault(){
    allBoldItems.forEach(function(item){
        item.style.color = "black"
    })
}
getBoldItems();

const paragraph = document.getElementById('paragraph');
paragraph.addEventListener('mouseover', highlight)
paragraph.addEventListener('mouseout', returnItemsToDefault)


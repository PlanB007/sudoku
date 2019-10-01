let arr = [];

let items = document.getElementsByClassName("grid-item");

for (var i = 0; i < items.length; i++) {
  let value = items[i].dataset.value;

  if(value == '') {
    let newValue = i + 1;
    items[i].innerHTML = newValue;
    arr.push(parseFloat(newValue));
  } else {
      items[i].innerHTML = value;
      arr.push(parseFloat(value));
  }
}

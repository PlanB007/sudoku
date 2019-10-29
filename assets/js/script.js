let arr = [];

let container = document.getElementsByClassName("grid");


for (var c = 1; c <= container.length; c++) {

  let items = $(`.sudoku-${c} .grid-item`);
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
}

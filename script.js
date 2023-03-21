function new_game() {
  let sticks = Math.floor(Math.random() * 20) + 10;
  document.getElementById('new_game').style.display = "none";
  document.getElementById('count_left').style.display = "inline-block";
  document.getElementById("count_left").innerHTML = "Палочек осталось: " + sticks;
  document.getElementsByClassName('take')[0].style.display = "inline-block";
  document.getElementsByClassName('take')[1].style.display = "inline-block";
  document.getElementsByClassName('take')[2].style.display = "inline-block";
  document.getElementsByClassName('take')[3].style.display = "inline-block";
}

function take_1() {
  let sticks = parseInt(document.getElementById("count_left").innerHTML.match(/\d+/));
  if (sticks == 1) { lose(); }
  else { sticks -= 1;
    document.getElementById("count_left").innerHTML = "Палочек осталось: " + sticks; 
    if (sticks == 1) { win() }
    else { move() }
  }
}

function take_2() {
  let sticks = parseInt(document.getElementById("count_left").innerHTML.match(/\d+/));
  if (sticks <= 2) { lose() }
  else { sticks -= 2;
    document.getElementById("count_left").innerHTML = "Палочек осталось: " + sticks; 
    if (sticks == 1) { win() }
    else { move() }
  }
}

function take_3() {
  let sticks = parseInt(document.getElementById("count_left").innerHTML.match(/\d+/));
  if (sticks <= 3) { lose(); }
  else { sticks -= 3;
    document.getElementById("count_left").innerHTML = "Палочек осталось: " + sticks; 
    if (sticks == 1) { win() }
    else { move() }
  }
}

function take_4() {
  let sticks = parseInt(document.getElementById("count_left").innerHTML.match(/\d+/));
  if (sticks <= 4) { lose(); }
  else { sticks -= 4;
    document.getElementById("count_left").innerHTML = "Палочек осталось: " + sticks; 
    if (sticks == 1) { win() }
    else { move() }
  }
}

function lose() {
  document.getElementById("count_left").innerHTML = "Вы проиграли!";
  document.getElementById('new_game').style.display = "inline-block";
  document.getElementsByClassName('take')[0].style.display = "none";
  document.getElementsByClassName('take')[1].style.display = "none";
  document.getElementsByClassName('take')[2].style.display = "none";
  document.getElementsByClassName('take')[3].style.display = "none";
}

function win() {
  document.getElementById("count_left").innerHTML = "Вы выиграли!";
  document.getElementById('new_game').style.display = "inline-block";
  document.getElementsByClassName('take')[0].style.display = "none";
  document.getElementsByClassName('take')[1].style.display = "none";
  document.getElementsByClassName('take')[2].style.display = "none";
  document.getElementsByClassName('take')[3].style.display = "none";
}

function move() {
  let sticks = parseInt(document.getElementById("count_left").innerHTML.match(/\d+/));
  sticks -= (Math.floor(Math.random() * 4) + 1);
  if (sticks <= 0) { win() }
  else {
    document.getElementById("count_left").innerHTML = "Палочек осталось: " + sticks; 
    if (sticks == 1) { lose() }
  }
}

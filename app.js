function myFun() {
  let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;

  btn1 = document.getElementById('btn1').value;
  btn2 = document.getElementById('btn2').value;
  btn3 = document.getElementById('btn3').value;
  btn4 = document.getElementById('btn4').value;
  btn5 = document.getElementById('btn5').value;
  btn6 = document.getElementById('btn6').value;
  btn7 = document.getElementById('btn7').value;
  btn8 = document.getElementById('btn8').value;
  btn9 = document.getElementById('btn9').value;

  if (
    (btn1 == 'x' || btn1 == 'X') &&
    (btn2 == 'x' || btn2 == 'X') &&
    (btn3 == 'x' || btn3 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player X won');
  } else if (
    (btn1 == 'x' || btn1 == 'X') &&
    (btn4 == 'x' || btn4 == 'X') &&
    (btn7 == 'x' || btn7 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player X won');
  } else if (
    (btn7 == 'x' || btn7 == 'X') &&
    (btn8 == 'x' || btn8 == 'X') &&
    (btn9 == 'x' || btn9 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    window.alert('Player X won');
  } else if (
    (btn3 == 'x' || btn3 == 'X') &&
    (btn6 == 'x' || btn6 == 'X') &&
    (btn9 == 'x' || btn9 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn7').disabled = true;
    window.alert('Player X won');
  } else if (
    (btn1 == 'x' || btn1 == 'X') &&
    (btn5 == 'x' || btn5 == 'X') &&
    (btn9 == 'x' || btn9 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn8').disabled = true;
    window.alert('Player X won');
  } else if (
    (btn3 == 'x' || btn3 == 'X') &&
    (btn5 == 'x' || btn5 == 'X') &&
    (btn7 == 'x' || btn7 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player X won');
  } else if (
    (btn2 == 'x' || btn2 == 'X') &&
    (btn5 == 'x' || btn5 == 'X') &&
    (btn8 == 'x' || btn8 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player X won');
  } else if (
    (btn4 == 'x' || btn4 == 'X') &&
    (btn5 == 'x' || btn5 == 'X') &&
    (btn8 == 'x' || btn8 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player X won');
  } else if (
    (btn4 == 'x' || btn4 == 'X') &&
    (btn5 == 'x' || btn5 == 'X') &&
    (btn6 == 'x' || btn6 == 'X')
  ) {
    document.getElementById('print').innerHTML = 'Player X won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player X won');
  } else if (btn1 == '0' && btn2 == '0' && btn3 == '0') {
    document.getElementById('print').innerHTML = 'Player 0 won';
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player 0 won');
  } else if (btn1 == '0' && btn4 == '0' && btn7 == '0') {
    document.getElementById('print').innerHTML = 'Player 0 won';
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player 0 won');
  } else if (btn7 == '0' && btn8 == '0' && btn9 == '0') {
    document.getElementById('print').innerHTML = 'Player 0 won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    window.alert('Player 0 won');
  } else if (btn3 == '0' && btn6 == '0' && btn9 == '0') {
    document.getElementById('print').innerHTML = 'Player 0 won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn7').disabled = true;
    window.alert('Player 0 won');
  } else if (btn1 == '0' && btn5 == '0' && btn9 == '0') {
    document.getElementById('print').innerHTML = 'Player 0 won';
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn8').disabled = true;
    window.alert('Player 0 won');
  } else if (btn3 == '0' && btn5 == '0' && btn7 == '0') {
    document.getElementById('print').innerHTML = 'Player 0 won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player 0 won');
  } else if (btn2 == '0' && btn5 == '0' && btn8 == '0') {
    document.getElementById('print').innerHTML = 'Player 0 won';
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player 0 won');
  } else if (btn4 == '0' && btn5 == '0' && btn8 == '0') {
    document.getElementById('print').innerHTML = 'Player 0 won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player 0 won');
  } else if (btn4 == '0' && btn5 == '0' && btn6 == '0') {
    document.getElementById('print').innerHTML = 'Player 0 won';
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
    window.alert('Player 0 won');
  } else if (
    (btn1 == 'X' || btn1 == '0') &&
    (btn2 == 'X' || btn2 == '0') &&
    (btn3 == 'X' || btn3 == '0') &&
    (btn4 == 'X' || btn4 == '0') &&
    (btn5 == 'X' || btn5 == '0') &&
    (btn6 == 'X' || btn6 == '0') &&
    (btn7 == 'X' || btn7 == '0') &&
    (btn8 == 'X' || btn8 == '0') &&
    (btn9 == 'X' || btn9 == '0')
  ) {
    document.getElementById('print').innerHTML = 'Match tie';
    window.alert('Match tie');
  } else {
    if (flag == 1) {
      document.getElementById('print').innerHTML = 'Player x turn';
    } else {
      document.getElementById('print').innerHTML = 'Player 0 turn';
    }
  }
}

function myFun2() {
  location.reload();
  document.getElementById('btn1').value = '';
  document.getElementById('btn2').value = '';
  document.getElementById('btn3').value = '';
  document.getElementById('btn4').value = '';
  document.getElementById('btn5').value = '';
  document.getElementById('btn6').value = '';
  document.getElementById('btn7').value = '';
  document.getElementById('btn8').value = '';
  document.getElementById('btn9').value = '';
}

let flag = 1;

function myFun3() {
  if (flag == 1) {
    document.getElementById('btn1').value = 'X';
    document.getElementById('btn1').disabled = true;
    flag = 0;
  } else {
    document.getElementById('btn1').value = '0';
    document.getElementById('btn1').disabled = true;
    flag = 1;
  }
}

function myFun4() {
  if (flag == 1) {
    document.getElementById('btn2').value = 'X';
    document.getElementById('btn2').disabled = true;
    flag = 0;
  } else {
    document.getElementById('btn2').value = '0';
    document.getElementById('btn2').disabled = true;
    flag = 1;
  }
}
function myFun5() {
  if (flag == 1) {
    document.getElementById('btn3').value = 'X';
    document.getElementById('btn3').disabled = true;
    flag = 0;
  } else {
    document.getElementById('btn3').value = '0';
    document.getElementById('btn3').disabled = true;
    flag = 1;
  }
}
function myFun6() {
  if (flag == 1) {
    document.getElementById('btn4').value = 'X';
    document.getElementById('btn4').disabled = true;
    flag = 0;
  } else {
    document.getElementById('btn4').value = '0';
    document.getElementById('btn4').disabled = true;
    flag = 1;
  }
}
function myFun7() {
  if (flag == 1) {
    document.getElementById('btn5').value = 'X';
    document.getElementById('btn5').disabled = true;
    flag = 0;
  } else {
    document.getElementById('btn5').value = '0';
    document.getElementById('btn5').disabled = true;
    flag = 1;
  }
}
function myFun8() {
  if (flag == 1) {
    document.getElementById('btn6').value = 'X';
    document.getElementById('btn6').disabled = true;
    flag = 0;
  } else {
    document.getElementById('btn6').value = '0';
    document.getElementById('btn6').disabled = true;
    flag = 1;
  }
}
function myFun9() {
  if (flag == 1) {
    document.getElementById('btn7').value = 'X';
    document.getElementById('btn7').disabled = true;
    flag = 0;
  } else {
    document.getElementById('btn7').value = '0';
    document.getElementById('btn7').disabled = true;
    flag = 1;
  }
}
function myFun10() {
  if (flag == 1) {
    document.getElementById('btn8').value = 'X';
    document.getElementById('btn8').disabled = true;
    flag = 0;
  } else {
    document.getElementById('btn8').value = '0';
    document.getElementById('btn8').disabled = true;
    flag = 1;
  }
}
function myFun11() {
  if (flag == 1) {
    document.getElementById('btn9').value = 'X';
    document.getElementById('btn9').disabled = true;
    flag = 0;
  } else {
    document.getElementById('btn9').value = '0';
    document.getElementById('btn9').disabled = true;
    flag = 1;
  }
}

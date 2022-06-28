const player = {
  str: 2,
  def: 2,
  maxVit: 10,
  vit: 10,
  eng: 100,
  money: 1000,
}

const strStat = document.getElementById("str");
const defStat = document.getElementById("def");
const vitStat = document.getElementById("vit");
const engStat = document.getElementById("eng");
const moneyStat = document.getElementById("money");
const table = document.getElementById("table");
const messageText = document.getElementById("sm");
const btnStr = document.getElementById("btnStr");
const btnVit = document.getElementById("btnVit");
const btnDef = document.getElementById("btnDef");

function enabledbtn() {
  btnStr.disabled = false;
  btnVit.disabled = false;
  btnDef.disabled = false;
}
function disabledbtn() {
  btnStr.disabled = true;
  btnVit.disabled = true;
  btnDef.disabled = true;
}
//Entrenamiento//


function showTable() {
  table.classList.toggle("table-show");
}

function insufficient() {
  showTable();
  disabledbtn();
  setTimeout(enabledbtn, 3000);
  setTimeout(showTable, 3000);
}

let alertEng = "No tienes suficiente energia."
let alertMoney = "No tienes suficientes rupias."
let alertEngMoney = "No tienes ni rupias ni energia suficientes"

let strEngCost = 20;    //Estamina usada al entrenar Fuerza
let strMoneyCost = 100; //Monedas usadas al entrenar Fuerza


/*Si es jugador tiene suficiente estamina y monedas aumenta su estadistica y disminuye su estamia y monedas, 
sino arroja un mensaje para que sepa que le falta*/

//Entrenamiento de Fuerza

function trainStr() { 
  if ((player.eng >= strEngCost) && (player.money >= strMoneyCost)) {
    player.str++;
    player.eng -= strEngCost;
    player.money -= strMoneyCost;
    strStat.innerHTML = player.str;
    engStat.innerHTML = player.eng;
    moneyStat.innerHTML = player.money;
  } else if ((player.eng < strEngCost) && (player.money < strMoneyCost)) {
    messageText.innerHTML = alertEngMoney;
    insufficient();
  } else if (player.eng < strEngCost) {
    messageText.innerHTML = alertEng;
    insufficient();
  } else {
    messageText.innerHTML = alertMoney;
    insufficient();
  }
}

let defEngCost = 25;    //Estamina usada al entrenar Defensa
let defMoneyCost = 200; //Monedas usadas al entrenar Defensa

//Entrenamiento Defensa

function trainDef() { 
  if ((player.eng >= defEngCost) && (player.money >= defMoneyCost)) {
    player.def++;
    player.eng -= defEngCost;
    player.money -= defMoneyCost;
    defStat.innerHTML = player.def;
    engStat.innerHTML = player.eng;
    moneyStat.innerHTML = player.money;
  } else if ((player.eng < defEngCost) && (player.money < defMoneyCost)) {
    messageText.innerHTML = alertEngMoney;
    insufficient();
  } else if (player.eng < defEngCost) {
    messageText.innerHTML = alertEng;
    insufficient();
  } else {
    messageText.innerHTML = alertMoney;
    insufficient();
  }
}

//Entrenamiento vitalidad

let vitEngCost = 50;    //Estamina usada al entrenar Vitalidad
let vitMoneyCost = 250; //Monedas usadas al entrenar Vitalidad

function trainVit() {
  if ((player.eng >= vitEngCost) && (player.money >= vitMoneyCost)) {
    player.vit++;
    player.maxVit++;
    player.eng -= vitEngCost;
    player.money -= vitMoneyCost;
    vitStat.innerHTML = player.vit;
    engStat.innerHTML = player.eng;
    moneyStat.innerHTML = player.money;
  } else if ((player.eng < vitEngCost) && (player.money < vitMoneyCost)) {
    messageText.innerHTML = alertEngMoney;
    insufficient();
  } else if (player.eng < vitEngCost) {
    messageText.innerHTML = alertEng;
    insufficient();
  } else {
    messageText.innerHTML = alertMoney;
    insufficient();
  }
}





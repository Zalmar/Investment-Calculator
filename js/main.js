function getValues() {
  let deposit = document.getElementById("money").value
  let term = document.getElementById("mounths").value

  let radioBtns = document.getElementsByName("radio-buttons");
  for(let i = 0; i < radioBtns.length; i++){
    if(radioBtns[i].checked){
      checkBtn = radioBtns[i].value
      document.getElementById("pros").innerHTML = radioBtns[i].value; 
    }
  }
  
  let profit = calcProfit (deposit, checkBtn, term)

  document.getElementById("rangeMoney").innerHTML = document.getElementById("money").value
  document.getElementById("rangeMonths").innerHTML = document.getElementById("mounths").value

  document.getElementById("left-profit").innerHTML = calcProfit (deposit, 6.5, term)
  document.getElementById("right-profit").innerHTML = profit
}

function calcProfit (deposit, pros, term) {
  return Math.round(deposit * (1 + ((pros/100) / 12)) ** term) - deposit
}

getValues();
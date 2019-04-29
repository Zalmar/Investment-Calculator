function getSetValues() {
    // get the deposit and term from input range
    let deposit = parseInt(document.getElementById("money").value);
    let term = parseInt(document.getElementById("mounths").value);
    
    //get the percent from radio buttons
    let radioBtns = document.getElementsByName("radio-buttons");
    for(let i = 0; i < radioBtns.length; i++){
        if(radioBtns[i].checked){
            checkBtn = radioBtns[i].value;
            document.getElementById("perc").innerHTML = checkBtn;
        }
    }

    // set deposit and term
    document.getElementById("rangeMoney").innerHTML = deposit.toLocaleString();
    document.getElementById("rangeMounths").innerHTML = term;
    
    // set values in of the modal window
    document.getElementById("modalSumma").innerHTML = deposit.toLocaleString();
    document.getElementById("modalTerm").innerHTML = term.toLocaleString();
    document.getElementById("modalPercent").innerHTML = checkBtn;

    // calculation profit 
    let leftProfit = calcProfit(deposit, 6.5, term);
    let rightProfit = calcProfit(deposit, checkBtn, term);

    // set profit values
    document.getElementById("leftProfit").innerHTML = leftProfit.toLocaleString();
    document.getElementById("rightProfit").innerHTML = rightProfit.toLocaleString();

    // get elememt cylinders elememt
    let leftCylinder = document.getElementById("leftCylinder");
    let rightCylinder = document.getElementById("rightCylinder");

    // get maximum height cylinder
    let element = document.getElementById('leftCylinder');
    style = window.getComputedStyle(element);
    max_height = style.getPropertyValue('max-height').slice(0,3);

    // cylinder bottom
    let bottomHeight;
    if (max_height > 110) {
        bottomHeight = 50;
    } else {
        bottomHeight = 30;
    }

    // transform height
    cylinderHeight = max_height - bottomHeight;

    // calculation ratio profit
    let ratioProfit = (rightProfit - leftProfit) / rightProfit;
    let leftCylinderHeight = cylinderHeight - ((cylinderHeight * ratioProfit));
    
    // ratio term calculation. Cylinder height depends on the term
    // let ratioTerm = (60 - term) / 60;

    // ratio deposit calculation. Cylinder height depends on the amount of the deposit
    let ratioTerm = (5000000 - deposit) / 5000000;

    // set the height cylinders and duration animations
    leftCylinder.style.height = leftCylinderHeight - (leftCylinderHeight * ratioTerm) + bottomHeight  + 'px';
    leftCylinder.style.transitionDuration = "0.5s";

    rightCylinder.style.height = cylinderHeight - (cylinderHeight * ratioTerm) + bottomHeight + 5 + 'px';
    rightCylinder.style.transitionDuration = "0.5s";
    
    // input range progress bar
    let moneySlider = document.getElementById("money");
    moneySlider.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+moneySlider.value / 50000 +'%, #e6e6e6 ' + moneySlider.value / 50000 + '%, #e6e6e6 100%)';
    
    let mounthsSlider = document.getElementById("mounths");
    mounthsSlider.style.background = 'linear-gradient(to right, #4bd1a0 0%, #4bd1a0 '+ mounthsSlider.value * 1.6 +'%, #e6e6e6 ' + mounthsSlider.value * 1.6 + '%, #e6e6e6 100%)';
}

function calcProfit (deposit, perc, term) {
    // calculation deposits with monthly capitalization
    return Math.round(deposit * (1 + (perc / 100) / 12) ** term) - deposit;
}

function popupShow() {
    // show popup window
    let popup = document.getElementById("popUpWindow");
    popup.classList.toggle("show");
}

function popupHide(){
    // hide popup window
    let popup = document.getElementById("popUpWindow");
    popup.classList.remove("show");
}

// call function in start
getSetValues();

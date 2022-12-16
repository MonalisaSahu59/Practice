function subtract(event) {
    event.preventDefault()
    const e = document.getElementById("e");
    const f = document.getElementById("f");
    if (Number(e.value) > Number(f.value)) {
    const SubtractionResult = document.getElementById("SubtractionResult");
    var diffrence = Number(e.value) - Number(f.value)
    console.log(diffrence);
    SubtractionResult.innerHTML = "Diffrence of " + e.value + " and " + f.value + " = " + diffrence
}
else{
    alert("First Number should not be less than second Number")
}
}


function multiply(event) {
    event.preventDefault()
    const g = document.getElementById("g");
    const h = document.getElementById("h");
    const MultiplicationResult = document.getElementById("MultiplicationResult");
    var product = Number(c.value) * Number(d.value)
    console.log(product);
    MultiplicationResult.innerText = "Multiplication " + g.value + " and " + h.value + " = " + product  
      
}
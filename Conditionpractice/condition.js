function conditionalPractice(event)
{
    event.preventDefault();
    var number = document.getElementById("a");
    var result = document.getElementById("result");
    if (parseFloat(number.value) % 2 == 0)
    {
        result.innerText = "The number is even number"
    }
    else if (parseFloat(number.value) && parseFloat(number.value) %2 != 0)
   {
        result.innerText = "The number is odd number"
    }
    else{
        result.innerText = "Not a Valid Number"
    }
}

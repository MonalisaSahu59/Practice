function conditionalPractice(event)
{
    event.preventDefault();
    var number = document.getElementById("a");
    var result = document.getElementById("result");
    if (Number(number.value) % 2 == 0)
    {
        result.innerText = "The number is even number"
    }
    else if (Number(number.value) %2 == 1)
   {
        result.innerText = "The number is odd number"
    }
    else{
        result.innerText = "Not a Valid Number"
    }
}

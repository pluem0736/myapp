document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "Plus : " +sum;
});
document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result2").innerHTML = "Negative : " +sum;
});
document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result3").innerHTML = "Multiply : " +sum;
});
document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result4").innerHTML = "Divisor : " +sum;
});

function myalert(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum;
    alert("result = "+sum)
}
function myalert2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum2 = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum2;
    alert("result = "+sum2)
}
function myalert3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum3 = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum3;
    alert("result = "+sum3)
}
function myalert4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum4 = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = " SUM : " +sum4;
    alert("result = "+sum4)
}

const img = document.createElement("img");
img.src = "1122.jpg"
img.style.width = "200px"

document.getElementById("myDiv").appendChild(img);
function myalert5(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = 100;
    var sum2 = num1 / sum;
    var sum3 = sum2 * sum2;
    var sum4 = num2 / sum3;
    document.getElementById("result").innerHTML = " BMI : " +sum4.toFixed(2);
    alert("result = "+sum4.toFixed(2))
}
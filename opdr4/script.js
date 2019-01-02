let x = document.getElementById("password");
let y = document.getElementById("confirmation");

function functienaam(){
    if (x.value === y.value){
        x.style.backgroundColor="green";
        y.style.backgroundColor="green";
    }
    else {
        x.style.backgroundColor="red";
        y.style.backgroundColor="red";
    }
}
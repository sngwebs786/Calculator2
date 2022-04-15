

function getData(a){
     var signs = ["%", "-", "+", "/", "*"]
     var inpBox = document.getElementById("user_inp");
     inpBox.value+=a;
    if (signs.includes(inpBox.value.charAt(0))) {
        alert("You cannot start with the operator !!")
        inpBox.value = ""
        return
    } else if (signs.includes(inpBox.value.charAt(inpBox.value.length - 1)) && signs.includes(inpBox.value.charAt(inpBox.value.length - 2))) {
        alert("You have mistakenly add the operator two times")
        backspace()
        return
    } else if (signs.includes(inpBox.value.charAt(inpBox.value.length - 1))) {
        return
    }
    else {
        inpBox.value = eval(input.value);
    }

}

function clearData(){
     var inpBox = document.getElementById("user_inp");
     inpBox.value = " "
}

function getResult(){
     var inpBox = document.getElementById("user_inp")
     inpBox.value = eval(inpBox.value)
     
}

function backspace(){
     var inpBox = document.getElementById("user_inp")
     inpBox.value = inpBox.value.substr(0,inpBox.value.length-1)
}
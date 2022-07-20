function clrbutton(){
    document.getElementById("screen").value=""
}


function buttonClick(val){
    document.getElementById("screen").value += val
}

function equalButton(){
    var inp = document.getElementById("screen").value
    var result = eval(inp)
    document.getElementById("screen").value = result
}
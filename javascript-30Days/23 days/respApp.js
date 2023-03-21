let btn = document.getElementById("flexSwitchCheckDefault");
function toggle(){
    if(document.body.style.backgroundColor != "black"){
        btn = document.body.style.backgroundColor = " black";
        btn = document.body.style.color = "white"
    }
    else{
        btn = document.body.style.backgroundColor = "white";
        btn = document.body.style.color = "black"

    }
}

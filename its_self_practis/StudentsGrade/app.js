
const addData = ()=>{
    let math = document.querySelector("#math").value;
    let chem = document.querySelector("#chem").value;
    let phy = document.querySelector("#phy").value;
    let eng = document.querySelector("#eng").value;
    let grades = "";

    let totaledata =
             parseFloat(math) +
            parseFloat(chem) +
            parseFloat(phy) +
             parseFloat(eng); 

    let percentage = (totaledata / 400) *100;

    if(percentage <= 100 && percentage >=80 ){
        grades = "A";
    }
    else if(percentage <=79 && percentage >= 65){
        grades ="B";
    }
    else if(percentage <=64 && percentage >= 40){
        grades = "C";
    }
    else{
        grades = "F"
    };

    if(math == "" || chem == "" || phy == "" || eng == ""){
        document.querySelector("#showData").innerHTML  = "please enter your all fields"
    }
    else{
        if(percentage >= 39.5){
            document.querySelector("#showData").innerHTML =  ` Out of 400 your total is  ${totaledata} 
            and percentage is ${percentage}%. <br> 
            Your grade is ${grades}. You are Pass. `;
        }
        else{
            document.querySelector(
                "#showData"
              ).innerHTML = 
                ` Out of 400 your total is  ${totaledata} 
                and percentage is ${percentage}%. <br> 
                Your grade is ${grades}. You are Fail. `;
        }
    }

}



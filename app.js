const containerEl = document.getElementById("container");

let turbidity = parseInt(prompt("Enter turbidity of water sample in NTU:"));

function check(){
    if(turbidity<=10)
        result = "Low turbid";
    else if(turbidity>10&&turbidity<=50)
        result = "Moderate turbid";
    else if(turbidity>50&&turbidity<=100)
        result ="High turbid";
    else
        result = "Very high turbid";

return result;

}

function display(check){
  val = check();
  containerEl.innerText = " The water sample is " +val;
}

display(check);
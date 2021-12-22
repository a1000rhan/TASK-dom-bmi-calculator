function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  //challenge 1
  const heigtInM=height/100;
  const BMI =(weight/(Math.pow(heigtInM,2)));
  alert(BMI);
//challenge 2

  // if(BMI<18.5){
  //   alert("Underweight");
  // }
  // else if(BMI<24.9){
  //  alert("Healthy Weight"); 
  // }
  // else if(BMI<29.9){
  //   alert("Overweight"); 
  //  }
  //  else {
  //    alert("Above Obesity");
  //  }
   
   //challenge 3

 if(age>19 && age<24){

    if(BMI<19){
      alert("Underweight");
    }
    else if(BMI<24){
     alert("Healthy Weight"); 
    }
  
     else {
       alert("Above Obesity");
     }
 }else if(age<34){
    if(BMI<20){
      alert("Underweight");
    }
    else if(BMI<25){
     alert("Healthy Weight"); 
    }
   
     else {
       alert("Above Obesity");
     }
  }else if(age<44){
    if(BMI<21){
      alert("Underweight");
    }
    else if(BMI<26){
     alert("Healthy Weight"); 
    }
   
     else {
       alert("Above Obesity");
     }
   }else if(age <54){
    if(BMI<22){
      alert("Underweight");
    }
    else if(BMI<27){
     alert("Healthy Weight"); 
    }
   
     else {
       alert("Above Obesity");
     }
   }else if(age<64){
    if(BMI<23){
      alert("Underweight");
    }
    else if(BMI<28){
     alert("Healthy Weight"); 
    }
   
     else {
       alert("Above Obesity");
     }
  }else{
    if(BMI<24){
      alert("Underweight");
    }
    else if(BMI<29){
     alert("Healthy Weight"); 
    }
     else {
       alert("Above Obesity");
     }
   }
   
}





const checkAge=(age)=>{
  if(age>=18){
    return console.log("You are eligiable for voting card");
  }else{
    return console.log("you are not eligiable for voting");
  }
}

checkAge(18);
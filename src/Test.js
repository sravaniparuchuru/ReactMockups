function hello(){
   
  return "smnth"
}

function hello2(){
 
  return hello;
}

function main(){

  var retnHello2 = hello2()
  console.log(retnHello2())
}
main()

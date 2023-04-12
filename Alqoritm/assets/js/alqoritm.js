// 1.Verilmiş 3 rəqəmli ədədin bütün reqemlərinin bir-birindən fərqli olub-olmadığını tapan alqoritmi yazın.

var num=prompt("Ededi daxil edin:")
if(num>99 && num<1000){
var a=num%10;
var b=((num-a)/10)%10;
var x=(b*10+a);
var c=(num-x)/100;
    if(a==b && b==c){
     console.log("Ededin reqemleri bir-birine beraberdir.")
    }
    else{
     console.log("Ededin reqemleri bir-birine beraber deyil.")
   }
}
else{
    console.log("3 reqemli eded daxil edin.")
}




// 2. İstifadəçi char tipindən dəyər daxil edib(input) char 'a' hərfinə bərabərdirsə ekrana "Azərbaycan dili seçildi" yazısı gəlsin, 'r' hərfinə bərabərdirsə "Rus dili seçildi" yazısı gəlsin. Digər bütün hallarda "Yanlış sorğu" yazısı gəlsin.
      // fərqli olsun deyə birini console ilə digərini isə alert ilə yazdım.
var char=prompt("Veriləni daxil edin:")
if(char=='a'){
    alert("Azərbaycan dili seçildi.")
}
else if(char=='r'){
    alert("Rus dili seçildi.")
}
else {
    alert("Yanlış sorğu")
}
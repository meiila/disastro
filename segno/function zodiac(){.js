function zodiac(){
   var mese = document.getElementById("mese").value;
    var giorno = document.getElementById("giorno").value;
  var result = " Se non inserisci la data non sapremo mai qual'è il tuo segno. &#129335";
 
 
 if (mese == 1&& giorno >= 20 || mese == 2 && giorno <= 18
     ){
         result = ("Aquario") ;
      document.getElementById("photo").innerHTML="<img src='aquario.png'width=20%>";
      document.getElementById("output").style.color ="#cc99cc";
      document.getElementById("output").style.fontSize ="50pt";
      document.getElementById("output").style.fontWeight ="bold";
   
     }
 
     if (mese == 2&& giorno >= 19 || mese == 3&& giorno <= 20){
        result = ("Pesci");
        document.getElementById("photo").innerHTML="<img src='pesci.png'width=20%>";
        document.getElementById("output").style.color ="#6633ff";
        document.getElementById("output").style.fontSize ="50pt";
        document.getElementById("output").style.fontWeight ="bold";
       
     }
    if (mese == 3&& giorno >= 21 || mese == 4 && giorno <= 19){
        result = ("Ariete");
       document.getElementById("photo").innerHTML="<img src='ariete.png'width=20%>";
       document.getElementById("output").style.color ="#ff6633";
       document.getElementById("output").style.fontSize ="50pt";
       document.getElementById("output").style.fontWeight ="bold";
      
    }
   
     if (mese == 4&& giorno >= 20|| mese == 5 && giorno <= 20){
         result = ("Toro");
        document.getElementById("photo").innerHTML="<img src='toro.png'width=20%>";
        document.getElementById("output").style.color ="#ffcc66";
        document.getElementById("output").style.fontSize ="50pt";
        document.getElementById("output").style.fontWeight ="bold";
        
       
     }
   
     if (mese == 5&& giorno >= 21 || mese == 6 && giorno <= 20
      ){
         result = ("Gemelli");
        document.getElementById("photo").innerHTML="<img src='gemelli.png'width=20%>";
        document.getElementById("output").style.color ="#cc99cc";
        document.getElementById("output").style.fontSize ="50pt";
        document.getElementById("output").style.fontWeight ="bold";
      
      
     }
   
     if (mese == 6&& giorno >= 21 || mese == 7&& giorno <= 22){
         result = ("Cancro");
        document.getElementById("photo").innerHTML="<img src='cancro.png'width=20%>";
        document.getElementById("output").style.color ="#6633ff";
        document.getElementById("output").style.fontSize ="50pt";
        document.getElementById("output").style.fontWeight ="bold";
      
     }
     if (mese == 7&& giorno >= 23 || mese == 8 && giorno <= 22){
         result = ("Leone");
        document.getElementById("photo").innerHTML="<img src='leone.png'width=20%>";
        document.getElementById("output").style.color ="#ff6633";
        document.getElementById("output").style.fontSize ="50pt";
        document.getElementById("output").style.fontWeight ="bold";
            
     }
     if (mese == 8 && giorno >= 23 || mese == 9 && giorno <= 22){
         result = ("Vergine");
        document.getElementById("photo").innerHTML="<img src='vergine.png'width=20%>";
        document.getElementById("output").style.color ="#ffcc66";
        document.getElementById("output").style.fontSize ="50pt";
        document.getElementById("output").style.fontWeight ="bold";
          }
     if (mese == 9&& giorno >= 23 || mese == 10&& giorno <= 22){
       result = ("Bilancia");
        document.getElementById("photo").innerHTML="<img src='bilancia.png'width=20%>";
        document.getElementById("output").style.color ="#cc99cc";
        document.getElementById("output").style.fontSize ="50pt";
        document.getElementById("output").style.fontWeight ="bold";
         
     }
     if (mese == 10 && giorno >= 23|| mese == 11 && giorno <= 21){
        result = ("Scorpione");
        document.getElementById("photo").innerHTML="<img src='scorpione.png'width=20%>";
        document.getElementById("output").style.color ="#6633ff";
        document.getElementById("output").style.fontSize ="50pt";
        document.getElementById("output").style.fontWeight ="bold";
          }
     if (mese == 11 && giorno >= 22 || mese == 12 && giorno <= 21){
         result = ("Sagittario");
        document.getElementById("photo").innerHTML="<img src='sagittario.png'width=20%>";
        document.getElementById("output").style.color ="#ff6633";
        document.getElementById("output").style.fontSize ="50pt";
        document.getElementById("output").style.fontWeight ="bold";
         }
   
   if(mese == 12 && giorno >= 22 || mese == 1 && giorno <= 19){
  
         result = ("Capricorno");
      document.getElementById("photo").innerHTML="<img src='capricorno.png'width=20%>";
      document.getElementById("output").style.color ="#ffcc66";
      document.getElementById("output").style.fontSize ="50pt";
      document.getElementById("output").style.fontWeight ="bold";
      
     }else if (mese>12||giorno>31){
        alert("Per favore inserisci una data plausibile ");
     }
  document.getElementById("output").innerHTML= result;
 }
   
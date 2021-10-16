<template>
  <div id="app">
 <!--//<div>
     //  <router-view>
     //  </router-view>  
     //</div>
 -->

<h1>CINEMA</h1>
<hr>
<pre>
     A1          A2          A3          A4          A5          A6         A7          A8          A9          A10   
</pre>
<!--<img :src="silla-vip40.png" id="A1" @click="changeimage('A1')" >-->
<IMG src="silla-vip40.png" id="A1" @click="changeImage2('A1',0)"  />
<!--  <IMG src="silla1.png">    -->
<IMG src="silla-vip40.png" id="A2" @click="changeImage2('A2',1)"  />
<IMG src="silla-vip40.png" id="A3" @click="changeImage2('A3',2)"  />
<IMG src="silla-vip40.png" id="A4" @click="changeImage2('A4',3)"  />
<IMG src="silla-vip40.png" id="A5" @click="changeImage2('A5',4)"  />
<IMG src="silla-vip40.png" id="A6" @click="changeImage2('A6',5)"  />
<IMG src="silla-vip40.png" id="A7" @click="changeImage2('A7',6)"  />
<IMG src="silla-vip40.png" id="A8" @click="changeImage2('A8',7)"  />
<IMG src="silla-vip40.png" id="A9" @click="changeImage2('A9',8)"  />
<IMG src="silla-vip40.png" id="A10" @click="changeImage2('A10',9)"  />
<br>
<pre>
     B1          B2          B3          B4          B5          B6         B7          B8          B9          B10   

</pre> 
<IMG src="silla-vip40.png" id="B1" @click="changeImage2('B1',10)"  />
<IMG src="silla-vip40.png" id="B2" @click="changeImage2('B2',11)"  />
<IMG src="silla-vip40.png" id="B3" @click="changeImage2('B3',12)"  />
<IMG src="silla-vip40.png" id="B4" @click="changeImage2('B4',13)"  />
<IMG src="silla-vip40.png" id="B5" @click="changeImage2('B5',14)"  />
<IMG src="silla-vip40.png" id="B6" @click="changeImage2('B6',15)"  />
<IMG src="silla-vip40.png" id="B7" @click="changeImage2('B7',16)"  />
<IMG src="silla-vip40.png" id="B8" @click="changeImage2('B8',17)"  />
<IMG src="silla-vip40.png" id="B9" @click="changeImage2('B9',18)"  />
<IMG src="silla-vip40.png" id="B10" @click="changeImage2('B10',19)"  />
<br>
<pre>
     C1          C2          C3          C4          C5          C6         C7          C8          C9          C10   
</pre>
<IMG src="silla-vip40.png" id="C1" @click="changeImage2('C1',20)"  />
<IMG src="silla-vip40.png" id="C2" @click="changeImage2('C2',21)"  />
<IMG src="silla-vip40.png" id="C3" @click="changeImage2('C3',22)"  />
<IMG src="silla-vip40.png" id="C4" @click="changeImage2('C4',23)"  />
<IMG src="silla-vip40.png" id="C5" @click="changeImage2('C5',24)"  />
<IMG src="silla-vip40.png" id="C6" @click="changeImage2('C6',25)"  />
<IMG src="silla-vip40.png" id="C7" @click="changeImage2('C7',26)"  />
<IMG src="silla-vip40.png" id="C8" @click="changeImage2('C8',27)"  />
<IMG src="silla-vip40.png" id="C9" @click="changeImage2('C9',28)"  />
<IMG src="silla-vip40.png" id="C10" @click="changeImage2('C10',29)"  />
<br>
<pre>
     D1          D2          D3          D4          D5          D6         D7          D8          D9          D10   
 </pre>
<!-- <IMG src="silla11.png" id="D1" @click="changeImage()"  /><br> -->

<IMG src="silla11.png" id="D1" @click="changeImage('D1',30)"  />
<IMG src="silla11.png" id="D2" @click="changeImage('D2',31)"  />
<IMG src="silla11.png" id="D3" @click="changeImage('D3',32)"  />
<IMG src="silla11.png" id="D4" @click="changeImage('D4',33)"  />
<IMG src="silla11.png" id="D5" @click="changeImage('D5',34)"  />
<IMG src="silla11.png" id="D6" @click="changeImage('D6',35)"  />
<IMG src="silla11.png" id="D7" @click="changeImage('D7',36)"  />
<IMG src="silla11.png" id="D8" @click="changeImage('D8',37)"  />
<IMG src="silla11.png" id="D9" @click="changeImage('D9',38)"  />
<IMG src="silla11.png" id="D10" @click="changeImage('D10',39)"  />
<br>
<pre>
     E1          E2          E3          E4          E5          E6         E7          E8          E9          E10   
</pre>
<IMG src="silla11.png" id="E1" @click="changeImage('E1',40)"  />
<IMG src="silla11.png" id="E2" @click="changeImage('E2',41)"  />
<IMG src="silla11.png" id="E3" @click="changeImage('E3',42)"  />
<IMG src="silla11.png" id="E4" @click="changeImage('E4',43)"  />
<IMG src="silla11.png" id="E5" @click="changeImage('E5',44)"  />
<IMG src="silla11.png" id="E6" @click="changeImage('E6',45)"  />
<IMG src="silla11.png" id="E7" @click="changeImage('E7',46)"  />
<IMG src="silla11.png" id="E8" @click="changeImage('E8',47)"  />
<IMG src="silla11.png" id="E9" @click="changeImage('E9',48)"  />
<IMG src="silla11.png" id="E10" @click="changeImage('E10',49)"  />
<br>
<pre>
     F1          F2          F3          F4          F5          F6         F7          F8          F9          F10   
</pre>
<IMG src="silla11.png" id="F1" @click="changeImage('F1',50)"  />
<IMG src="silla11.png" id="F2" @click="changeImage('F2',51)"  />
<IMG src="silla11.png" id="F3" @click="changeImage('F3',52)"  />
<IMG src="silla11.png" id="F4" @click="changeImage('F4',53)"  />
<IMG src="silla11.png" id="F5" @click="changeImage('F5',54)"  />
<IMG src="silla11.png" id="F6" @click="changeImage('F6',55)"  />
<IMG src="silla11.png" id="F7" @click="changeImage('F7',56)"  />
<IMG src="silla11.png" id="F8" @click="changeImage('F8',57)"  />
<IMG src="silla11.png" id="F9" @click="changeImage('F9',58)"  />
<IMG src="silla11.png" id="F10" @click="changeImage('F10',59)"  />
<br>
<pre>
     G1          G2          G3          G4          G5          G6         G7          G8          G9          G10   
</pre>
<IMG src="silla11.png" id="G1" @click="changeImage('G1',60)"  />
<IMG src="silla11.png" id="G2" @click="changeImage('G2',61)"  />
<IMG src="silla11.png" id="G3" @click="changeImage('G3',62)"  />
<IMG src="silla11.png" id="G4" @click="changeImage('G4',63)"  />
<IMG src="silla11.png" id="G5" @click="changeImage('G5',64)"  />
<IMG src="silla11.png" id="G6" @click="changeImage('G6',65)"  />
<IMG src="silla11.png" id="G7" @click="changeImage('G7',66)"  />
<IMG src="silla11.png" id="G8" @click="changeImage('G8',67)"  />
<IMG src="silla11.png" id="G9" @click="changeImage('G9',68)"  />
<IMG src="silla11.png" id="G10" @click="changeImage('G10',69)"  />
<br>
<pre>
     H1          H2          H3          H4          H5          H6         H7          H8          H9          H10   
</pre>
<IMG src="silla11.png" id="H1" @click="changeImage('H1',70)"  />
<IMG src="silla11.png" id="H2" @click="changeImage('H2',71)"  />
<IMG src="silla11.png" id="H3" @click="changeImage('H3',72)"  />
<IMG src="silla11.png" id="H4" @click="changeImage('H4',73)"  />
<IMG src="silla11.png" id="H5" @click="changeImage('H5',74)"  />
<IMG src="silla11.png" id="H6" @click="changeImage('H6',75)"  />
<IMG src="silla11.png" id="H7" @click="changeImage('H7',76)"  />
<IMG src="silla11.png" id="H8" @click="changeImage('H8',77)"  />
<IMG src="silla11.png" id="H9" @click="changeImage('H9',78)"  />
<IMG src="silla11.png" id="H10" @click="changeImage('H10',79)"  />
<br>
<pre>
     I1          I2          I3          I4          I5          I6         I7          I8          I9          I10   
</pre>
<IMG src="silla11.png" id="I1" @click="changeImage('I1',80)"  />
<IMG src="silla11.png" id="I2" @click="changeImage('I2',81)"  />
<IMG src="silla11.png" id="I3" @click="changeImage('I3',82)"  />
<IMG src="silla11.png" id="I4" @click="changeImage('I4',83)"  />
<IMG src="silla11.png" id="I5" @click="changeImage('I5',84)"  />
<IMG src="silla11.png" id="I6" @click="changeImage('I6',85)"  />
<IMG src="silla11.png" id="I7" @click="changeImage('I7',86)"  />
<IMG src="silla11.png" id="I8" @click="changeImage('I8',87)"  />
<IMG src="silla11.png" id="I9" @click="changeImage('I9',88)"  />
<IMG src="silla11.png" id="I10" @click="changeImage('I10',89)"  />
<br>
<pre>
     J1          J2          J3          J4          J5          J6         J7          J8          J9          J10   
 </pre>
<IMG src="silla11.png" id="J1" @click="changeImage('J1',90)"  />
<IMG src="silla11.png" id="J2" @click="changeImage('J2',91)"  />
<IMG src="silla11.png" id="J3" @click="changeImage('J3',92)"  />
<IMG src="silla11.png" id="J4" @click="changeImage('J4',93)"  />
<IMG src="silla11.png" id="J5" @click="changeImage('J5',94)"  />
<IMG src="silla11.png" id="J6" @click="changeImage('J6',95)"  />
<IMG src="silla11.png" id="J7" @click="changeImage('J7',96)"  />
<IMG src="silla11.png" id="J8" @click="changeImage('J8',97)"  />
<IMG src="silla11.png" id="J9" @click="changeImage('J9',98)"  />
<IMG src="silla11.png" id="J10" @click="changeImage('J10',99)"  />
<br>
<hr>
<IMG src="pantalla11.png"/>  
</div>
 
</template>

<script>
import axios from "axios";
/*Vue.prototype.$sillas= "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
*/
/*import changeImage from 'cinemaUtils';*/
/*import changeImage from './router/cinemaUtils.js';*/
export default {
  name: 'App',
  data: () => ({
       
           sillas: {
                sillas: "00000000000000000000000000000000000000"},
           /*sillas: [ ]
           /*sillas: {
             type: String,
             default: "000000000000000000000" 
           },*/
           test: [],
           idx: 0
       
  }),
  created(){
       axios
      .get(`http://localhost:8000/consultaSillas`)
      .then(response => {
        this.sillas.sillas = response.data[0].sillas;   
        
        /*this.sillas = response.data;*/
      
      
      /*
      for (idx = 0 ; idx < this.sillas.sillas.length ; idx++ ) {
           if (this.sillas.sillas[idx] == "1" ) {
                  document.getElementById( "A" + idx.toString() ).src = "silla-vip41.png" ;
           }
      }*/

     console.log("Sillas:" + this.sillas.sillas) ;
     if (this.sillas.sillas[0] == "1" ) document.getElementById("A1").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[1] == "1" ) document.getElementById("A2").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[2] == "1" ) document.getElementById("A3").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[3] == "1" ) document.getElementById("A4").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[4] == "1" ) document.getElementById("A5").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[5] == "1" ) document.getElementById("A6").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[6] == "1" ) document.getElementById("A7").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[7] == "1" ) document.getElementById("A8").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[8] == "1" ) document.getElementById("A9").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[9] == "1" ) document.getElementById("A10").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[10] == "1" ) document.getElementById("B1").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[11] == "1" ) document.getElementById("B2").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[12] == "1" ) document.getElementById("B3").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[13] == "1" ) document.getElementById("B4").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[14] == "1" ) document.getElementById("B5").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[15] == "1" ) document.getElementById("B6").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[16] == "1" ) document.getElementById("B7").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[17] == "1" ) document.getElementById("B8").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[18] == "1" ) document.getElementById("B9").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[19] == "1" ) document.getElementById("B10").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[20] == "1" ) document.getElementById("C1").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[21] == "1" ) document.getElementById("C2").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[22] == "1" ) document.getElementById("C3").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[23] == "1" ) document.getElementById("C4").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[24] == "1" ) document.getElementById("C5").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[25] == "1" ) document.getElementById("C6").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[26] == "1" ) document.getElementById("C7").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[27] == "1" ) document.getElementById("C8").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[28] == "1" ) document.getElementById("C9").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[29] == "1" ) document.getElementById("C10").src = "silla-vip41.png" ; 
     if (this.sillas.sillas[30] == "1" ) document.getElementById("D1").src = "silla21.png" ; 
     if (this.sillas.sillas[31] == "1" ) document.getElementById("D2").src = "silla21.png" ; 
     if (this.sillas.sillas[32] == "1" ) document.getElementById("D3").src = "silla21.png" ; 
     if (this.sillas.sillas[33] == "1" ) document.getElementById("D4").src = "silla21.png" ; 
     if (this.sillas.sillas[34] == "1" ) document.getElementById("D5").src = "silla21.png" ; 
     if (this.sillas.sillas[35] == "1" ) document.getElementById("D6").src = "silla21.png" ; 
     if (this.sillas.sillas[36] == "1" ) document.getElementById("D7").src = "silla21.png" ; 
     if (this.sillas.sillas[37] == "1" ) document.getElementById("D8").src = "silla21.png" ; 
     if (this.sillas.sillas[38] == "1" ) document.getElementById("D9").src = "silla21.png" ; 
     if (this.sillas.sillas[39] == "1" ) document.getElementById("D10").src = "silla21.png" ; 
     if (this.sillas.sillas[40] == "1" ) document.getElementById("E1").src = "silla21.png" ; 
     if (this.sillas.sillas[41] == "1" ) document.getElementById("E2").src = "silla21.png" ; 
     if (this.sillas.sillas[42] == "1" ) document.getElementById("E3").src = "silla21.png" ; 
     if (this.sillas.sillas[43] == "1" ) document.getElementById("E4").src = "silla21.png" ; 
     if (this.sillas.sillas[44] == "1" ) document.getElementById("E5").src = "silla21.png" ; 
     if (this.sillas.sillas[45] == "1" ) document.getElementById("E6").src = "silla21.png" ; 
     if (this.sillas.sillas[46] == "1" ) document.getElementById("E7").src = "silla21.png" ; 
     if (this.sillas.sillas[47] == "1" ) document.getElementById("E8").src = "silla21.png" ; 
     if (this.sillas.sillas[48] == "1" ) document.getElementById("E9").src = "silla21.png" ; 
     if (this.sillas.sillas[49] == "1" ) document.getElementById("E10").src = "silla21.png" ; 
     if (this.sillas.sillas[50] == "1" ) document.getElementById("F1").src = "silla21.png" ; 
     if (this.sillas.sillas[51] == "1" ) document.getElementById("F2").src = "silla21.png" ; 
     if (this.sillas.sillas[52] == "1" ) document.getElementById("F3").src = "silla21.png" ; 
     if (this.sillas.sillas[53] == "1" ) document.getElementById("F4").src = "silla21.png" ; 
     if (this.sillas.sillas[54] == "1" ) document.getElementById("F5").src = "silla21.png" ; 
     if (this.sillas.sillas[55] == "1" ) document.getElementById("F6").src = "silla21.png" ; 
     if (this.sillas.sillas[56] == "1" ) document.getElementById("F7").src = "silla21.png" ; 
     if (this.sillas.sillas[57] == "1" ) document.getElementById("F8").src = "silla21.png" ; 
     if (this.sillas.sillas[58] == "1" ) document.getElementById("F9").src = "silla21.png" ; 
     if (this.sillas.sillas[59] == "1" ) document.getElementById("F10").src = "silla21.png" ; 
     if (this.sillas.sillas[60] == "1" ) document.getElementById("G1").src = "silla21.png" ; 
     if (this.sillas.sillas[61] == "1" ) document.getElementById("G2").src = "silla21.png" ; 
     if (this.sillas.sillas[62] == "1" ) document.getElementById("G3").src = "silla21.png" ; 
     if (this.sillas.sillas[63] == "1" ) document.getElementById("G4").src = "silla21.png" ; 
     if (this.sillas.sillas[64] == "1" ) document.getElementById("G5").src = "silla21.png" ; 
     if (this.sillas.sillas[65] == "1" ) document.getElementById("G6").src = "silla21.png" ; 
     if (this.sillas.sillas[66] == "1" ) document.getElementById("G7").src = "silla21.png" ; 
     if (this.sillas.sillas[67] == "1" ) document.getElementById("G8").src = "silla21.png" ; 
     if (this.sillas.sillas[68] == "1" ) document.getElementById("G9").src = "silla21.png" ; 
     if (this.sillas.sillas[69] == "1" ) document.getElementById("G10").src = "silla21.png" ; 
     if (this.sillas.sillas[70] == "1" ) document.getElementById("H1").src = "silla21.png" ; 
     if (this.sillas.sillas[71] == "1" ) document.getElementById("H2").src = "silla21.png" ; 
     if (this.sillas.sillas[72] == "1" ) document.getElementById("H3").src = "silla21.png" ; 
     if (this.sillas.sillas[73] == "1" ) document.getElementById("H4").src = "silla21.png" ; 
     if (this.sillas.sillas[74] == "1" ) document.getElementById("H5").src = "silla21.png" ; 
     if (this.sillas.sillas[75] == "1" ) document.getElementById("H6").src = "silla21.png" ; 
     if (this.sillas.sillas[76] == "1" ) document.getElementById("H7").src = "silla21.png" ; 
     if (this.sillas.sillas[77] == "1" ) document.getElementById("H8").src = "silla21.png" ; 
     if (this.sillas.sillas[78] == "1" ) document.getElementById("H9").src = "silla21.png" ; 
     if (this.sillas.sillas[79] == "1" ) document.getElementById("H10").src = "silla21.png" ; 
     if (this.sillas.sillas[80] == "1" ) document.getElementById("I1").src = "silla21.png" ; 
     if (this.sillas.sillas[81] == "1" ) document.getElementById("I2").src = "silla21.png" ; 
     if (this.sillas.sillas[82] == "1" ) document.getElementById("I3").src = "silla21.png" ; 
     if (this.sillas.sillas[83] == "1" ) document.getElementById("I4").src = "silla21.png" ; 
     if (this.sillas.sillas[84] == "1" ) document.getElementById("I5").src = "silla21.png" ; 
     if (this.sillas.sillas[85] == "1" ) document.getElementById("I6").src = "silla21.png" ; 
     if (this.sillas.sillas[86] == "1" ) document.getElementById("I7").src = "silla21.png" ; 
     if (this.sillas.sillas[87] == "1" ) document.getElementById("I8").src = "silla21.png" ; 
     if (this.sillas.sillas[88] == "1" ) document.getElementById("I9").src = "silla21.png" ; 
     if (this.sillas.sillas[89] == "1" ) document.getElementById("I10").src = "silla21.png" ; 
     if (this.sillas.sillas[90] == "1" ) document.getElementById("J1").src = "silla21.png" ; 
     if (this.sillas.sillas[91] == "1" ) document.getElementById("J2").src = "silla21.png" ; 
     if (this.sillas.sillas[92] == "1" ) document.getElementById("J3").src = "silla21.png" ; 
     if (this.sillas.sillas[93] == "1" ) document.getElementById("J4").src = "silla21.png" ; 
     if (this.sillas.sillas[94] == "1" ) document.getElementById("J5").src = "silla21.png" ; 
     if (this.sillas.sillas[95] == "1" ) document.getElementById("J6").src = "silla21.png" ; 
     if (this.sillas.sillas[96] == "1" ) document.getElementById("J7").src = "silla21.png" ; 
     if (this.sillas.sillas[97] == "1" ) document.getElementById("J8").src = "silla21.png" ; 
     if (this.sillas.sillas[98] == "1" ) document.getElementById("J9").src = "silla21.png" ; 
     if (this.sillas.sillas[99] == "1" ) document.getElementById("J10").src = "silla21.png" ; 
     


/* document.getElementById("A2").src = "silla-vip41.png" ; */
      
     /* console.log(this.sillas); */
     /* console.log(response); */
      /*this.sillas.sillas="00000000000000000000"   Inicializa todo en cero */
      })
  },
  methods:{
    actSillas(nsilla,status) {
    
    /*console.log(nsilla);
    console.log("Status"+status);
    
    console.log(this.sillas.sillas.length);
    console.log("abc".substr(1));
    */
    let mystring = String (this.sillas.sillas);
    
    console.log(this.sillas);
    console.log("xyz"+(mystring).substring(1,2));
   
    switch (nsilla){
        case 0 :
           this.sillas.sillas =  status + this.sillas.sillas.substring( nsilla + 1 ) ;     
           break ;
        case 99:
           this.sillas.sillas =  this.sillas.sillas.substr( 0, 98 ) + status ;
           break ;  
        default:
           this.sillas.sillas = this.sillas.sillas.substr(0, nsilla  ) + status + this.sillas.sillas.substr( nsilla + 1 ) ;     
      
    } 
    
    console.log(this.sillas);
    axios.put("http://localhost:8000/actualizaSillas/615e3b736740e73a28cb2ea0",this.sillas);
       
  },
    changeImage(posicion,nsilla) {
           console.log(this.sillas.sillas);
           console.log(nsilla) ;
            /*let nsilla="A1";*/
            /*alert(nsilla);*/
            /*console.log(nsilla) ;
            console.log(posicion) ;
            console.log(document.getElementById(posicion)) ;
            console.log(document.getElementById(posicion+"")) ;
            */
            document.getElementById(posicion).src = "silla21.png" ;
            this.actSillas(nsilla,"1"); 
  },
  changeImage2(posicion,nsilla) {
            console.log(this.sillas.sillas);
            console.log(nsilla) ;
            /*let nsilla="A1";*/
            /*alert(nsilla);*/
            /*console.log(nsilla) ;
            console.log(posicion) ;
            console.log(document.getElementById(posicion)) ;
            console.log(document.getElementById(posicion+"")) ;
            */
            document.getElementById(posicion).src = "silla-vip41.png" ;
            this.actSillas(nsilla,"1"); 
            
  },
  extraer(nsilla) {
     
     let ocupada = this.sillas.sillas.substring(nsilla,nsilla);
     let statusSilla="";

     if ( ocupada == "1" ) {
          statusSilla = "Silla ocupada";
     }else{
          statusSilla = "Silla desocupada";
     }
     console.log(statusSilla);
  }
  

  

  }
    
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

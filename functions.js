
    //BLOCCO DI FUNZIONI PER INCREMENTARE O DIMINUIRE IL MESE E L ANNO
       
       function aumentaMM(){
               var recupera=document.getElementById('mmCC').value;
               var z=recupera;
               var n=Number(z);
               var aggiungi=n+1;
               var scrivi=document.getElementById('mmCC').value=aggiungi;
               

       }
       function diminuisciMM(){
               var recupera1=document.getElementById('mmCC').value;
               var z1=recupera1;
               var n1=Number(z1);
               var sottrai1=n1-1;
               var scrivi1=document.getElementById('mmCC').value=sottrai1;
               
       }
       function aumentaAA(){
               var recupera2=document.getElementById('aaCC').value;
               var z2=recupera2;
               var n2=Number(z2);
               var aggiungi2=n2+1;
               var scrivi=document.getElementById('aaCC').value=aggiungi2;
               

       }
        function diminuisciAA(){
               var recupera2=document.getElementById('aaCC').value;
               var z2=recupera2;
               var n2=Number(z2);
               var sottrai2=n2-1;
               var scrivi=document.getElementById('aaCC').value=sottrai2;
               

       }
       
    //CON QUESTA FUNZIONE CREO UNA NUOVA DATA RECUPERANDO I VALORI MODIFICATI! 
       //SUCCESSIVAMENTE ANDRO A PASSARE QUESTA NUOVA DATA COME PARAMETRO A STAMPACALENDARIO COSI MI STAMPERA DI NUOVO IL MIO CALENDARIO MODIFICATO
       //IN QUESTO MODO A DIFFERENZA DEGLI ERRORI DEI GIORNI SCORSI RIESCO A TRATTARE LA DATA COME UN ENTITA UNICA E MI CAMBIERANNO DINAMICAMENTE 
       //GIORNI MESI ANNI! 
       
function nuovaData(){
   var aa=document.getElementById('aaCC').value;
   var mm=document.getElementById('mmCC').value;
    dataMod=new Date(aa,mm);
    
}//CREAZIONE NUOVA DATA
   
      
var dataOggi=new Date();//DATA DI OGGI, NELL BODY ONLOAD VIENE UTILIZZATA PER STAMPARE IL PRIMO CALENDARIO
       
function stampaCalendario(x){ //X E' LA DATA CHE PASSO
                               
    
                           var data=new Date(x);//TROVO LA DATA DI OGGI
                                           var oggi=data.getDate();//-----// 
                                           var anno=data.getFullYear();//ANNO
                                           document.getElementById('aaCC').value=anno;
                                           var mese=data.getMonth();// 
                                           document.getElementById('mmCC').value=mese;
                                           switch(mese){
                                               case 0 : 
                                                   mese='Gennaio';
                                                   break;
                                               case 1 :
                                                   mese='Febbraio';
                                                   break;
                                               case 2 :
                                                   mese='Marzo';
                                                   break;
                                               case 3 :
                                                   mese='Aprile';
                                                   break;
                                               case 4 :
                                                   mese='Maggio';
                                                   break;
                                               case 5 :
                                                   mese='Giugno';
                                                   break;
                                               case 6 :
                                                   mese='Luglio';
                                                   break;
                                               case 7 :
                                                   mese='Agosto';
                                                   break;
                                               case 8 :
                                                   mese='Settembre';
                                                   break;
                                               case 9 :
                                                   mese='Ottobre';
                                                   break;
                                               case 10 :
                                                   mese='Novembre';
                                                   break;
                                               case 11 :
                                                   mese='Dicembre';
                                                   break;
}//MESE IN LETTERE CON SWITCH CASE 
                                           var giorno=data.getDay();//   
                                           switch(giorno){
                                               case 1:
                                                   giorno='Lunedì';
                                                   break;
                                                 case 2:
                                                   giorno='Martedi';
                                                   break;
                                                     case 3:
                                                   giorno='Mercoledì';
                                                   break;
                                                     case 4:
                                                   giorno='Giovedì';
                                                   break;
                                                     case 5:
                                                   giorno='Venerdì';
                                                   break;
                                                     case 6:
                                                   giorno='Sabato';
                                                   break;
                                                     case 7:
                                                   giorno='Domenica';
                                                   break;
}//GIORNO IN LETTERE CON SWITCH CASE
                                           data.setDate(data.getDate()-oggi); //RISALGO AL PRIMO GIORNO DEL MESE QUANDO ERA OGGI-OGGI=0 

                                           document.getElementById('meseC').innerHTML=mese;//SCRIVO MESE
                                           document.getElementById('annoC').innerHTML=anno;//ANNO

                                           ///----CREATO GIORNO CORRENTE----///
                                           ///---INIZIO A STAMPARE NELLA TABELLA---///


     
                   var tabella='<tbody>'; //DICHIARO VAR TABELLA CON TBODY
       
       for(j=0;j<5;j++){  //RIGHE TABELLA 
           z='<tr>';
           tabella+=z;
                           for(i=0;i<7;i++){//
                                           
                                           data.setDate(data.getDate()+1); //AUMENTO DI UN GIORNO PERCHE SENNO MI TORNA AL 31 AGOSTO IN QUANTO OGGI-Oggi=0
                                           var numeroPrimoGG=data.getDate();//NUMERO PRIMO GG      
                                           var primoGiornoMese=data.getDay();//GIORNO IN NUMERO DEL PRIMO DEL MESE
                                           var giorno1=primoGiornoMese;
                                           switch(giorno1){
                       case 1:
                           giorno1='Lunedì';
                           break;
                         case 2:
                           giorno1='Martedi';
                           break;
                             case 3:
                           giorno1='Mercoledì';
                           break;
                             case 4:
                           giorno1='Giovedì';
                           break;
                             case 5:
                           giorno1='Venerdì';
                           break;
                             case 6:
                           giorno1='Sabato';
                           break;
                             case 0:
                           giorno1='Domenica';
                           break;
                   }//GIORNO DEL PRIMO DEL MESE IN LETTERE CON SWITCH CASE

                                           dataCalendario=numeroPrimoGG+' '+giorno1;//NUMERO MESE + GIORNO IN LETTERE CHE MI INCREMENTA OGNI VOLTA
                                           x='<td value='+data+'>'+dataCalendario+'<input type="text"><br><input type="text"><br><input type="text"><br><input type="text"></td>';//STAMPO IN UNA CELLA
                                           tabella+=x;   // ASSOCIO
                                                  
                                               }
           q='</tr>';
           tabella+=q;

            document.getElementById('gg').innerHTML=tabella+'</tbody>';//STAMPO NELLA TABELLA.
          
       }
}
   
//1.Chiedere all’utente di inserire una parola

  const parola = prompt ('Inserisci una parola');
  console.log (parola);


//2. Scomponi parola data da User in Array

  const array1 = parola.split ("");
  console.log ( " original array is " + array1);

//3. Crea un array di 'parola' al contrario 

  const array2 = []
    
  for ( let i = array1.length ; i>= 0 ; i--) {

    array2.push (array1[i]);

  }
  console.log ( " reversed array is " + array2);

    
//4.Funzione per capire se la parola inserita è palindroma:
  
  //function check_array1_array2 () {
    //blocco di codice


    //return risultato
  //} 


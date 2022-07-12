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

  //ricorstuisci array al contrario in una stringa

  const array2_Stringa = array2.join('');
  console.log (array2_Stringa)

  //check che ilconfronto tra i due array sia palindroma  con ciclo

  if (parola == array2_Stringa ) {
    alert ('la parola è palindroma')
  } else {
    alert ('la parola NON è palindroma')
  }

    
//4.Funzione per capire se la parola inserita è palindroma:
  
  function palindroma () {
  













    return true
  } 


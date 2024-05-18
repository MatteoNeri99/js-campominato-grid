Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


1) aggiungo un buttone un div.container al dom
2) aggiungo un evento "click" al button
3) richiamo il container e lo racchiudo in una variabile const
4) creo un elemento "article" e lo rachhiudo in una variabile const
5) creo un ciclo for che inserira per 100 volte l'elemento "article" nel div.container
6) sempre all'interno del ciclo inserisco il valore "index" (numero di ogni giro) all'interno del "article"
7) fuori dal ciclo for ma rimanendo sempre nell'evento aggiungo delle classi css (create in precedenza)
8) creo un evento "click" legato agli "article" per scrivere in console il numero della casella

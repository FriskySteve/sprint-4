// Napisz program, który wydrukuje wszystkie parzyste liczby od 1 do 20.

// for (let i = 1; i <= 20; i++){
//     if (i % 2 === 0) {
//         console.log (i)
//     }
// }

// Użyj pętli, aby stworzyć program, który wypisze kolejne liczby od 10 do 1, a na końcu wyświetli "Start!".
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   if (i === 1) {
//     console.log("Start!");
//   }
//   i--;
// }

// Napisz program, który używając pętli, znajdzie i wydrukuje wszystkie wielokrotności liczby 3 od 1 do 100.
let i = 1;
do {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);

/*
1. Staircase
- Write a function that prints a staircase according to the specs bellow
- Input: n Where 0 < n <= 100
- Output: A staircase of any special symbol (#, @, *, &, !, etc) right aligned composed of height n and width n

sample output:
4 
#
##
###
####
HACIA EL OTRO LADO


n = numero que pongan 
i = 0
espacios = n - i 
gatos = i - 1
*/

const staircaise = n =>{
    if(n > 0 && n <= 100){
        for(let i = 0; i <= n; i++){
            stairs = '';
            for(let j = 1; j <= n - i; j++){
                stairs += ' ';
            } 
            for(let j = 0; j <= i - 1; j++){
                stairs += '#';
            }
            console.log(stairs);
        }
    } else {
        console.log(`Error. Introduce un número entre el 0 y el 100`);
    }
}
staircaise(4);

/*2. Book
- You are reading a book and want to get to a certain page number inside that book since you forgot where you left it, count how many page turns you have to do untill you reach the desired page.
    - Take note that opening the book doesn't count as a page turn, and when opened, the right side of the page is always page 1.
    - When flipped, page 2 and 3 are in view, so that's pageTurns = 1, when flipped again pages 4 and 5 are in view, so that's pageTurns = 2
    - Every page, except first and last are always printed on both sides.
    2. The book is n pages long and you want to turn to page p
    3. Input: 
        - n: number of pages in book
        - p: page you want to get to
        - Constraints: 1 <= n <= 10^5, 1 <= p <= n
    4. Output: number of page turns
Sample input 
6, 2

Sample output
1


*/

const book = (n,p) =>{
    if(n >= 1 && n <= 10**5 && p >= 1 && p <= n){
        let bookPages = [0,1]; 
        let turnPages = 0;

        for (let i = 1; i < n; i++){
            if (bookPages[0] === p || bookPages[1] === p){
                console.log(`Para ir a la página ${p} tienes que pasar ${turnPages} páginas`);
            }
            bookPages[0] += 2;
            bookPages[1] += 2;
            turnPages ++;
        }
    } else{
        console.log(`Error. coloca dos números: Donde 'n' sea mayor que 1 y menor que 100,000 y 'p' sea mayor que 1 y menor que 'n'`);
    }
}
book(6,2);




/*
3. Birds in migration
- You are watching birds migrate in the country, taking notes on the different types of birds you encounter by setting their ID on an array. If more than 1 type has been spotted that maximum amount, return the smallest of their IDs.
    - Input: ```arr[4,4,2,2,3]``` 
        - Constrints: 2 < arr <= 2x10^5, where ```n``` inside the array is 0 < n <= 5
    - Output: Type: 2
        - Type 9 and 2 have two ocurrences (the maximum in the array), but 2 is the smallest of their IDs, so return 'Type: 2'


Sample input:

[1,4,4,2,1,1,1]

Sample output:

Type: 1

*/
const migrationBirds = [1,4,4,2,1,1,1];//output 1

const birds = (migrationBirds) =>{
    let arr = migrationBirds.length; //Sacamos el largo del array
    let n = Math.max(...migrationBirds); // Para conocer el valor mayor del array

    if(arr > 2 && arr <= 20**5 && n > 0 && n <=5){
        let largest = 1; //La mayor incidencia de pájaros del mismo tipo
        let counter = 0; //Incidencia de pájaros
        let type = 0; //El tipo
        let sortedBirds = migrationBirds.sort(); //1,1,1,2,4,4,

        for (let i = 0; i < sortedBirds.length; i++) {
            largest = (sortedBirds.lastIndexOf(sortedBirds[i]) - sortedBirds.indexOf(sortedBirds[i])) + 1; //1-> 2-0+1 = 3. Es decir, 3 veces visto el tipo 1.
            
            if (largest > counter) {
                counter = largest; 
                type = sortedBirds[i];
            }
        }
        console.log(type);
    } else {
        console.log(`Error. Coloca en el array más de 2 y menos de 2x10^5 pájaros. Y solo se aceptan págaros de tipo 1,2,3,4 y 5.`);
    }
}
birds(migrationBirds);

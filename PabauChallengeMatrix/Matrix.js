const matrixString = `>---A-@-+
        |
+-U-+   C
|   |   |
s   C---+`;
 
const matrix = matrixString.split('\n').map(row => row.split(''));
 
function isUppercaseLetter(char) {
    return typeof char === 'string' && char === char.toUpperCase() && /^[A-Z]$/.test(char);
}
 
function checkBeggining(matrix){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === '>'){
                path += matrix[i][j];
                return [i,j];
                
            }
        }
    }
}
 
let letter = '';
let path = '';
 
let [i,j] = checkBeggining(matrix);
 
let pastI = 1000;
let pastJ = 1000;
let x = 0;
 
function checkSpecialChar(value){
    if(value === '@' || value === '+' || value === '-' || value === '|'){
        return true;
    }
    return false;
}
 
while(x <= ((matrix.length) * (matrix[0].length))){
    if(matrix[i][j] === 's'){
        path += matrix[i][j];
        break;
    }
 
   // check left neighbor
    if((j-1 >= 0)){
        if((pastJ != j-1) && (checkSpecialChar(matrix[i][j-1]) || isUppercaseLetter(matrix[i][j-1]))){
            pastJ = j;
            pastI = i;
            j--;
            path += matrix[i][j];
            if(isUppercaseLetter(matrix[i][j])){
                letter += matrix[i][j];
            }
        }
    }
    // check right neighbor
    if((j+1 < matrix[i].length)){
        if((pastJ != j+1) && (checkSpecialChar(matrix[i][j+1]) || isUppercaseLetter(matrix[i][j+1]))){
            pastJ = j;
            pastI = i;
            j++;
            path += matrix[i][j];
            if(isUppercaseLetter(matrix[i][j])){
                letter += matrix[i][j];
            }
        }
    }
    // check upper neighbor
    if(i-1 >= 0) {
        if((pastI != i-1) && (checkSpecialChar(matrix[i-1][j]) || isUppercaseLetter(matrix[i-1][j]))){
            pastI = i;
            pastJ = j;
            i--;
            path += matrix[i][j];
            if(isUppercaseLetter(matrix[i][j])){
                letter += matrix[i][j];
            }
        }
    }
 
    // check lower neighbor
    if((i+1 < matrix.length)){
        if((pastI != i+1) && (checkSpecialChar(matrix[i+1][j])|| isUppercaseLetter(matrix[i+1][j]))){
            pastI = i;
            pastJ = j;
            i++;
            path += matrix[i][j];
            if(isUppercaseLetter(matrix[i][j])){
                letter += matrix[i][j];
            }
        }
    }
    x++;
}
 
console.log('Path:', path);
console.log('Letters:', letter);
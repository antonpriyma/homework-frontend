'use strict';

function append(char,count){
    let result = '';
    result += count > 1 ? count.toString() : '';
    return char+result;
}

const rle = (source=> {
    let dest = '';
    let count = 0;
    let buffer='';
    source.split('').forEach((char)=> {
        count+=1;
        if (char === buffer) {
            return;
        }
        if (buffer !== '') {
            dest += append(buffer, count)
        }
        buffer = char;
        count = 0;
    });
    dest += append(buffer, count + 1);
    return dest;
});

'use strict';

const rle = function (source) {
    let dest = "";
    let i = 0;
    while (i < source.length) {

        let runLength = 1;
        while (i + 1 < source.length && source.charAt(i) === source.charAt(i + 1)) {
            runLength++;
            i++;
        }
        dest += source.charAt(i);
        if (runLength > 1) {
            dest += runLength;
        }
        i++;

    }
    return dest;
};
"use strict";

/**
 * @param char
 * @param entriesCount
 * @returns {string}
 */
const append = (char, entriesCount) => {
    if (typeof char === "string") {
        return `${char}${entriesCount > 1 ? entriesCount : ""}`;
    }
};


/**
 * @param text
 * @returns {string}
 */
const rle = (text) => {
    let {encodedText, entriesCount, buffer} = text.split("").reduce((previousValue, char) => {
        const {encodedText, entriesCount, buffer} = previousValue;
        return {
            encodedText: ((char !== buffer) && (buffer)) ? encodedText + append(buffer, entriesCount + 1) : encodedText,
            buffer: (char !== buffer) ? char : buffer,
            entriesCount: ((char !== buffer) && (buffer)) ? 0 : entriesCount + 1
        };
    }, {
        encodedText: "",
        entriesCount: -1,
        buffer: ""
    });

    return `${encodedText}${append(buffer, entriesCount + 1)}`;
};


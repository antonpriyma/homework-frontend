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
 * @param text: Входная строка
 * @returns {string}: Закодированная строка
 */
const rle = (text) => {
    if (typeof text === "string") {
        const {encodedText, entriesCount, buffer} = text.split("").reduce((previousValue, char) => {
            const {encodedText, entriesCount, buffer} = previousValue;
            const isNewChar = char !== buffer;
            const bufferNotEmty = !!buffer;
            return {
                encodedText: isNewChar && bufferNotEmty ? `${encodedText}${append(buffer, entriesCount + 1)}` : encodedText,
                buffer: isNewChar ? char : buffer,
                entriesCount: isNewChar && bufferNotEmty ? 0 : entriesCount + 1
            };
        }, {
            encodedText: "",
            entriesCount: -1,
            buffer: ""
        });

        return `${encodedText}${append(buffer, entriesCount + 1)}`;
    }
};


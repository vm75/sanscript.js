/* National Library at Kolkata,
    * ---------------------------
    * Apart from using "ē" and "ō" instead of "e" and "o", this scheme is
    * identical to IAST. ṝ, ḷ, and ḹ are not part of the scheme proper.
    *
    * This is defined further below.
    */

/* Sanskrit Library Phonetic Basic
    * -------------------------------
    * With one ASCII letter per phoneme, this is the tersest transliteration
    * scheme in use today and is especially suited to computer processing.
    */
// eslint-disable-next-line no-undef
schemes.slp1 = {
    vowels      : ["a", "A", "i", "I", "u", "U", "f", "F", "x", "X", "", "e", "E", "", "o", "O"],
    other_marks : ["M", "H", "~"],
    virama      : [""],
    consonants  : ["k", "K", "g", "G", "N", "c", "C", "j", "J", "Y", "w", "W", "q", "Q", "R", "t", "T", "d", "D", "n", "p", "P", "b", "B", "m", "y", "r", "l", "v", "S", "z", "s", "h", "L", "kz", "jY"],
    symbols     : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "oM", "'", ".", ".."],
    candra      : ["̆"],
};

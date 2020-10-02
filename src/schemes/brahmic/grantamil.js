/* GranTamil
    * -----
    * Grantha in Bengali Range as per Elmar's Indolipi font e-Grantamil,
    * added for missing letters in Tamil, instead of number superscripts for EaswaranJi
    * use ந for na as per grantha,
    * use tamil maatraas with bengali consonants - errs in browsers
    */
// eslint-disable-next-line no-undef
schemes.grantamil = {
    vowels       : ["அ", "ஆ", "இ", "ஈ", "உ", "ஊ", "ঋ", "ৠ", "ঌ", "ৡ", "எ", "ஏ", "ஐ", "ஒ", "ஓ", "ஔ"],
    vowel_marks  : ["ா", "ி", "ீ", "ு", "ூ", "ৃ", "ৄ", "ৢ", "ৣ", "ெ", "ே", "ை", "ொ", "ோ", "ௌ"],  // needs some fixes for grantha characters for e ai o au
    other_marks  : ["ம்", "ঃ", "ঁ"],
    virama       : ["்"],
    consonants   : ["க", "খ", "গ", "ঘ", "ங", "ச", "ছ", "ஜ", "ঝ", "ஞ", "ட", "ঠ", "ড", "ঢ", "ண", "த", "থ", "দ", "ধ", "ந", "ப", "ফ", "ব", "ভ", "ம", "ய", "ர", "ல", "வ", "ஶ", "ஷ", "ஸ", "ஹ", "ৰ", "க்ஷ", "ஜ்ஞ"],
    symbols      : ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "ௐ", "ঽ", "।", "॥"],
    other        : ["", "", "", "", "", "", "", "", "ற", "ழ"],
    candra       : [""],
    // Vedic accent. Udatta and anudatta, double udatta and ardhachandra viraama.
    accent       : ["\u0951", "\u0952", "\u1cda", "\ua8f3"],
    combo_accent : ["", "", "", ""],
};

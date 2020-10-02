// eslint-disable-next-line no-undef
schemes.devanagari = {
    // "Independent" forms of the vowels. These are used whenever the
    // vowel does not immediately follow a consonant.
    vowels : ["अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ऎ", "ए", "ऐ", "ऒ", "ओ", "औ"],

    // "Dependent" forms of the vowels. These are used whenever the
    // vowel immediately follows a consonant. If a letter is not
    // listed in `vowels`, it should not be listed here.
    vowel_marks : ["ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॢ", "ॣ", "ॆ", "े", "ै", "ॊ", "ो", "ौ"],

    // Miscellaneous marks, all of which are used in Sanskrit.
    other_marks : ["ं", "ः", "ँ"],

    // In syllabic scripts like Devanagari, consonants have an inherent
    // vowel that must be suppressed explicitly. We do so by putting a
    // virama after the consonant.
    virama : ["्"],

    // Various Sanskrit consonants and consonant clusters. Every token
    // here has an explicit vowel. Thus "क" is "ka" instead of "k".
    consonants : ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह", "ळ", "क्ष", "ज्ञ"],

    // Numbers and punctuation
    symbols : ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "ॐ", "ऽ", "।", "॥"],

    // Non-Sanskrit consonants
    other : ["क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "य़", "ऱ", "ऴ"],

    candra : ["ॅ"],

    // Vedic accent. Udatta, anudatta, double udatta and ardhachandra viraama..
    accent : ["\u0951", "\u0952", "\u1cda", "\ua8f3"],

    // Accent combined with anusvara and and visarga. For compatibility
    // with ITRANS, which allows the reverse of these four.
    combo_accent : ["ः॑", "ः॒", "ं॑", "ं॒"],

    // Dummy consonant. This is used in ITRANS to prevert certain types
    // of parser ambiguity. Thus "barau" -> बरौ but "bara_u" -> बरउ.
    skip : [""],

    // Zero-width joiner. This is used to separate a consonant cluster
    // and avoid a complex ligature.
    zwj : ["\u200D"],
};

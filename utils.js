// Md Morshed Ali

const utils = {
    toBengaliNumbers: (input) => {
        const numbers = {'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};
        return String(input).replace(/[0123456789]/g, (s) => numbers[s]);
    },

    toEnglishNumbers: (str) => {
        const banglaNums = {'০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'};
        return String(str).replace(/[০-৯]/g, s => banglaNums[s]);
    },

    formatNumber: (num) => {
        return utils.toBengaliNumbers(num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    },

    convertToBengaliNumbers: (str) => {
        if (!str) return str;
        return str.toString().replace(/[0-9]/g, (digit) => {
            const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
            return bengaliDigits[parseInt(digit)];
        });
    },

    containsOnlyNumbers: (str) => {
        const cleaned = str.replace(/\s/g, '');
        return /^[0-9০-৯]+$/.test(cleaned);
    },

    containsLetters: (str) => {
        const letterRegex = /[a-zA-Zঀ-৿]/;
        return letterRegex.test(str);
    },

    containsNumbers: (str) => {
        const numberRegex = /[0-9০-৯]/;
        return numberRegex.test(str);
    },

    containsOnlyLettersAndSpaces: (str) => {
        return /^[a-zA-Zঀ-৿\s]+$/.test(str);
    }
};

//Md Morshed Ali
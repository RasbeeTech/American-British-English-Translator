const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');
const { titleCase } = require("title-case");

class Translator {
    translate(text, locale, done){
        // Check for required fields.
        if(text == '') return done('No text to translate');
        if(!text || !locale) return done('Required field(s) missing');
        
        // Check for locale.
        if(locale == 'american-to-british'){
            done(null, this.americanToBritsh(text));
        } else if(locale == 'british-to-american'){
            this.britishToAmerican(text);
        } else {
            return done('Invalid value for locale field');
        }
    }

    americanToBritsh(text){
        /*
            Handles American to British translations.
        */
        // Check for american phrase translations.
        let translatedText = text;

        Object.keys(americanOnly).forEach((key) => {
            let translation = '<span class="highlight">' + americanOnly[key] + '</span>'
            translatedText = translatedText.replace(key, translation);
        });

        // Check for American to British spelling and titles.
        let textArray = translatedText.split(' ');
        let punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

        textArray.forEach((rawText) => {
            let cleanText = rawText.replace(punctuation, '');

            if(Object.keys(americanToBritishTitles).includes(rawText.toLowerCase())){
                let britishTitle = americanToBritishTitles[rawText.toLowerCase()]
                let translation = '<span class="highlight">' + titleCase(britishTitle) + '</span>';
                translatedText = translatedText.replace(rawText, translation);
            }
            if(Object.keys(americanToBritishSpelling).includes(cleanText.toLowerCase())){
                let translation = '<span class="highlight">' + americanToBritishSpelling[cleanText.toLowerCase()] + '</span>';
                translatedText = translatedText.replace(cleanText, translation);
            }
            // Check for time translation.
            if(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(rawText)){
                let britishTime = rawText.replace(':', '.');
                let translation = '<span class="highlight">' + britishTime + '</span>';
                translatedText = translatedText.replace(rawText, translation);
            }
        });

        return translatedText !== text ? translatedText: 'Everything looks good to me!';
    }

    britishToAmerican(text){
        /*
            Handles British to American translations.
        */
    }
}

module.exports = Translator;
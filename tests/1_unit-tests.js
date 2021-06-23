const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator;
suite('Unit Tests', () => {
    suite('American-to-British translations:', () => {
        let locale = 'american-to-british';
        test('1. Translate: "Mangoes are my favorite fruit."', ()=> {
            let text = 'Mangoes are my favorite fruit.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'Mangoes are my favourite fruit.';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('2. Translate: "I ate yogurt for breakfast."', ()=> {
            let text = 'I ate yogurt for breakfast.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'I ate yoghurt for breakfast.';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('3. Translate: ' + "We had a party at my friend's condo.", ()=> {
            let text = "We had a party at my friend's condo.";
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = "We had a party at my friend's flat";
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('4. Translate: "Can you toss this in the trashcan for me?"', ()=> {
            let text = 'Can you toss this in the trashcan for me?';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'Can you toss this in the bin for me';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('5. Translate: "The parking lot was full."', ()=> {
            let text = 'The parking lot was full.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'The car park was full';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('6. Translate: "Like a high tech Rube Goldberg machine."', ()=> {
            let text = 'Like a high tech Rube Goldberg machine.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'Like a high tech Heath Robinson device';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('7. Translate: "To play hooky means to skip class or work."', ()=> {
            let text = 'To play hooky means to skip class or work.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'To bunk off means to skip class or work';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('8. Translate: "No Mr. Bond, I expect you to die."', ()=> {
            let text = 'No Mr. Bond, I expect you to die.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'No Mr Bond, I expect you to die';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('9. Translate: "Dr. Grosh will see you now."', ()=> {
            let text = 'Dr. Grosh will see you now.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'Dr Grosh will see you now';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('10. Translate: "Lunch is at 12:15 today."', ()=> {
            let text = 'Lunch is at 12:15 today.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'Lunch is at 12.15 today';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
    });
    suite('British-to-American translations:', () => {
        let locale = 'british-to-american';
        test('1. Translate: "We watched the footie match for a while."', ()=> {
            let text = 'We watched the footie match for a while.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'We watched the soccer match for a while';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('2. Translate: "Paracetamol takes up to an hour to work."', ()=> {
            let text = 'Paracetamol takes up to an hour to work.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'Tylenol takes up to an hour to work';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('3. Translate: "First, caramelise the onions."', ()=> {
            let text = 'First, caramelise the onions.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'First, caramelize the onions';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('4. Translate: "I spent the bank holiday at the funfair."', ()=> {
            let text = 'I spent the bank holiday at the funfair.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'I spent the public holiday at the carnival';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('5. Translate: "I had a bicky then went to the chippy."', ()=> {
            let text = 'I had a bicky then went to the chippy.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'I had a cookie then went to the fish-and-chip shop';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('6. Translate:' +  "I've just got bits and bobs in my bum bag.", ()=> {
            let text = "I've just got bits and bobs in my bum bag.";
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = "I've just got odds and ends in my fanny pack";
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('7. Translate: "The car boot sale at Boxted Airfield was called off."', ()=> {
            let text = 'The car boot sale at Boxted Airfield was called off.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'The swap meet at Boxted Airfield was called off';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('8. Translate: "Have you met Mrs Kalyani?"', ()=> {
            let text = 'Have you met Mrs Kalyani?';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'Have you met Mrs. Kalyani';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('9. Translate:' + "Prof Joyner of King's College, London.", ()=> {
            let text = "Prof Joyner of King's College, London.";
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = "Prof. Joyner of King's College, London.";
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
        test('10. Translate: "Tea time is usually around 4 or 4.30."', ()=> {
            let text = 'Tea time is usually around 4 or 4.30.';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let correctTranslation = 'Tea time is usually around 4 or 4:30.';
                
                correctTranslation.split(' ').forEach((word) => {
                    assert.include(translatedText, word, 'Should be translated');
                })
            });
        });
    });
    suite('Highlightted translations:', () => {
        test('1. Highlight: "Mangoes are my favorite fruit."', ()=> {
            let text = 'Mangoes are my favorite fruit.';
            let locale = 'american-to-british';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let highlight = '<span class="highlight">'
                assert.include(translatedText, highlight, 'should highlight translated texts');
            });
        });
        test('2. Highlight: "I ate yogurt for breakfast."', ()=> {
            let text = 'I ate yogurt for breakfast.';
            let locale = 'american-to-british';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let highlight = '<span class="highlight">'
                assert.include(translatedText, highlight, 'should highlight translated texts');
            });
        });
        test('3. Highlight: "We watched the footie match for a while."', ()=> {
            let text = 'We watched the footie match for a while.';
            let locale = 'british-to-american';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let highlight = '<span class="highlight">'
                assert.include(translatedText, highlight, 'should highlight translated texts');
            });
        });
        test('4. Highlight: "Paracetamol takes up to an hour to work."', ()=> {
            let text = 'Paracetamol takes up to an hour to work.';
            let locale = 'british-to-american';
            translator.translate(text, locale, (err, translatedText) => {
                assert.isNull(err, 'There should be no error');
                let highlight = '<span class="highlight">'
                assert.include(translatedText, highlight, 'should highlight translated texts');
            });
        });
    });
});

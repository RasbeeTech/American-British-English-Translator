'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let { text } = req.body;
      let { locale } = req.body;

      translator.translate(text, locale, (err, translatedText) => {
        if(err) return res.json({error: err});
        res.json({text: text, translation: translatedText})
      });

    });
};

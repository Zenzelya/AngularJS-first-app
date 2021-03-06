(function () {
'use strict';

angular
    .module('parseToSentences', [])
    .factory('parseToSentences', parseToSentences);

function parseToSentences() {
    
    let input_text = '';

    let parseToSentences = {
      getInputText,
      setInputText,
      toSentences,
      toWords
    };

    return parseToSentences;

    function getInputText() {
      return input_text;
    }

    function setInputText(text) {
       input_text = text;
    }

    function toSentences (text) {
      let sent_breaker = /\.|\!|\?/,
          punct = /["',@\/#!$%\^&\*;:{}=\-_`~()/{\n}]/g;

      return text.trim().replace(punct, '').split(sent_breaker);
    }

    function toWords(text) {
      let space = /\s{2,}/g,
          sentences = [];

      for (let i = 0; i < text.length; i++) {
        if (text[i].length > 0) {
          sentences.push(text[i].replace(space, " ")
                                .trim()
                                .split(' ')
                                .sort((a, b) => { a.toLowerCase() < b.toLowerCase() ? -1 : 1 }));
        }
      };

      return sentences;
    };
        
}
})();
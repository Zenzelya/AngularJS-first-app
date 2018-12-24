angular
    .module('parseToSentences')
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
      let sent_breaker = /\.|\!|\?/;
      return text.split(sent_breaker);
    }

    function toWords (text) {

      let punct = /["'.,@\/#!$%\^&\*;:{}=\-_`~()]/g,
        bufer = toSentences(text),
        sentences = [];

      for (let i = 0; i < bufer.length; ++i) {
        sentences.push(bufer[i].replace(punct, '')
          .replace(/\s{2,}/g, " ")
          .trim().split(' '))

      };

      return sentences;

    }
        
}
(function () {
'use strict';
angular
  .module('app.show.csv', [])
  .controller('ShowCsvCtrl', ShowCsvCtrl);

ShowCsvCtrl.$inject = ['parseToSentences'];

function ShowCsvCtrl(parseToSentences) {
  
  var vm = this;
  vm.text = parseToSentences.getInputText();
  vm.max_length = 0;
  vm.sentences;

  vm.getMaxSentenceSize = getMaxSentenceSize;
  vm.showCVS = showCVS;


  function showCVS() {
    vm.text = parseToSentences.getInputText();
    if (vm.text) {
      vm.sentences = parseToSentences.toWords(parseToSentences.toSentences(vm.text));
      vm.max_length = vm.getMaxSentenceSize();

    } else {
      alert('Please enter text');
    }
  }

  function getMaxSentenceSize(sentence = vm.sentences) {
    var max = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (max < sentence[i].length) {
        max = sentence[i].length;
      }
    }
    return max;
  }

}
})();
(function () {
'use strict';
angular
  .module('app.show.csv', [])
  .controller('ShowCsvCtrl', ShowCsvCtrl);

ShowCsvCtrl.$inject = ['parseToSentences'];

function ShowCsvCtrl(parseToSentences) {
  
  let vm = this;
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

  function getMaxSentenceSize(sentences = vm.sentences) {
    return  sentences.reduce((max, {length}) => max < length ? length : max, 0);
  }

}
})();
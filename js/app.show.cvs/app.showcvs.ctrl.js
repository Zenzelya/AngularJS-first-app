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

  function getMaxSentenceSize() {
    var max = 0;

    for (let i = 0; i < vm.sentences.length; i++) {
      if (max < vm.sentences[i].length) {
        max = vm.sentences[i].length;
      }
    }
    return max;
  }

}
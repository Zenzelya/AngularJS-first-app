angular
    .module('app.input', [])
    .controller('InputCtrl', InputCtrl);

 InputCtrl.$inject = ['parseToSentences'];

function InputCtrl(parseToSentences) {
		var vm = this;
		vm.text = '';
		vm.onChange = onChange;

		function onChange() {
				parseToSentences.setInputText(vm.text)
		}


 }
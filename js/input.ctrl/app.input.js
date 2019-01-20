(function () {
'use strict';
angular.module('app.input', [])
			 .controller('InputCtrl', InputCtrl);

 InputCtrl.$inject = ['parseToSentences'];

	function InputCtrl(parseToSentences) {
		let vm = this;
		vm.text = 'Mary had a little lamb. Peter called for the wolf, and Aesop came. Cinderella likes shoes';
		vm.onChange = onChange;

		parseToSentences.setInputText(vm.text);
		
		function onChange() {
			parseToSentences.setInputText(vm.text);
		}
 	}
 })();
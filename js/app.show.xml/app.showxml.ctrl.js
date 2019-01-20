(function () {
'use strict';

angular
    .module('app.show.xml', [])
    .controller('ShowXmlCtrl', ShowXmlCtrl);

 ShowXmlCtrl.$inject = ['parseToSentences'];

function ShowXmlCtrl(parseToSentences) {
		var vm = this;
		vm.text = parseToSentences.getInputText();
		vm.xmlHeader;
		vm.xmltext;
		vm.xmltextend; 
		vm.sentences;
		vm.showXML = showXML;

		function showXML () {
			vm.text = parseToSentences.getInputText();
			
			if (vm.text) {
			vm.xmlHeader = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
			vm.xmltext = '<text>'; 
			vm.xmltextend = '</text>';	
			vm.sentences = parseToSentences.toWords(parseToSentences.toSentences(vm.text));
			}
			else {
				alert('Please enter text');
			}
		}
 }

})();
 
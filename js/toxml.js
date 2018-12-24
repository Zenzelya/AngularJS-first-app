angular.module('toXml', ['parseToSentences'])
				.controller('toXmlCtrl', [ 'parseToSentences', '$scope', function ($scope, parseToSentences){
					$scope.text = '1';
				}]);
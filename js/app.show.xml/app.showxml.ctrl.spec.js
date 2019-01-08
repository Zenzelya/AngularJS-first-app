(function () {
'use strict';

describe('app.show.xml test', function() {
  var ShowXmlCtrl, parseToSentences, $controller;

  beforeEach(module('app.show.xml'));
  beforeEach(module('parseToSentences'));
  

  beforeEach(inject(function(_$controller_, _parseToSentences_ ) {

    parseToSentences = _parseToSentences_;
    $controller = _$controller_;
    
    ShowXmlCtrl = $controller('ShowXmlCtrl', {
        'parseToSentences': _parseToSentences_
    });

  }));

  describe("ShowXmlCtrl test", function() {

    it("should be created successfully", function() {
        expect(ShowXmlCtrl).toBeDefined();
        
    });

    

});
});
})();
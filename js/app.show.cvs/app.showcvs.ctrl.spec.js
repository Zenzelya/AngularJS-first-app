(function () {
'use strict';

describe('app.show.csv test', function() {
  let ShowCsvCtrl, parseToSentences, $controller;

  beforeEach(module('app.show.csv'));
  beforeEach(module('parseToSentences'));

  beforeEach(inject(function(_$controller_, _parseToSentences_ ) {

    parseToSentences = _parseToSentences_;
    $controller = _$controller_;
    
    ShowCsvCtrl = $controller('ShowCsvCtrl', {
        'parseToSentences': _parseToSentences_
    });

  }));

  describe("ShowCsvCtrl", function() {

    it("should be created successfully", function() {
        expect(ShowCsvCtrl).toBeDefined();
        
    });

    it("ShowCsvCtrl.max_length should be 0", function() {
        expect(ShowCsvCtrl.max_length).toBe(0);
    });

    it('getMaxSentenceSize should return max line length = 9', function(){
      let test = [['1', '2','3','4'], ['123', '321'], ['1234567'], ['123456789']];
      let test_length = ShowCsvCtrl.getMaxSentenceSize(test);
      expect(test_length).toBe(4);
    }); 

});
});
})();
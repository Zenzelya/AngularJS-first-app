(function () {
'use strict';

describe('app.input test', function() {
  var InputCtrl, parseToSentences, $controller;

  beforeEach(module('app.input'));
  beforeEach(module('parseToSentences'));

  beforeEach(inject(function(_$controller_, _parseToSentences_ ) {

    parseToSentences = _parseToSentences_;
    $controller = _$controller_;
    
    InputCtrl = $controller('InputCtrl', {
        'parseToSentences': _parseToSentences_
    });

  }));

  describe("InputCtrl", function() {

    it("should be created successfully", function() {
        expect(InputCtrl).toBeDefined();
    });

      it("should be created successfully", function() {
        expect(parseToSentences).toBeDefined();
    });


  });
});
})();
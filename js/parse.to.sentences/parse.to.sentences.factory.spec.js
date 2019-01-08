(function () {
  describe('Unit: parseToSentences.Factory', 
    function () {
  var parse;    

  beforeEach(function(){
        module('parseToSentences');
        inject( function($injector){
            parse = $injector.get('parseToSentences');
        });
    });

  
  it('should return array with strings', function(){
        var result = parse.toSentences('qwe qwe qwe. qwe qwe qwe.');
        expect(result).toEqual(['qwe qwe qwe', ' qwe qwe qwe', '' ]);
    });

  it('should return array of words', function(){
        var result = parse.toWords(['qwe qwe qwe', ' qwe qwe qwe', '' ]);
        expect(result).toEqual([['qwe', 'qwe', 'qwe'], ['qwe', 'qwe', 'qwe']]);
    });

   it('input_text set/get metod', function(){
        parse.setInputText('its alive');
        result = parse.getInputText();
        expect(result).toBe('its alive');
    });

});
})();
//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/**/*.js'
      
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ]

  });
};

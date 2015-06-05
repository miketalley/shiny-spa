requirejs.config({
  paths: {
    'text': '../lib/require/text',
    'durandal':'../lib/durandal/js',
    'plugins' : '../lib/durandal/js/plugins',
    'transitions' : '../lib/durandal/js/transitions',
    'knockout': '../lib/knockout/knockout-3.2.0',
    'knockout.punches': '../lib/knockout-punches/knockout.punches',
    'jquery': '../lib/jquery/jquery-2.1.1',
    'modal': '../lib/jquery-modal/jquery.modal.min',
    'datatables': '../lib/jquery-datatables/js/jquery.dataTables',
    'datatables.foundation': '../lib/jquery-datatables-foundation/dataTables.foundation',
    'dropzone': '../lib/dropzone/dropzone-amd-module',
    'qtip': '../lib/qtip/jquery.qtip',
    'nobles': '../app/js/noblesData',
    'level1': '../app/js/level1Data',
    'level2': '../app/js/level2Data',
    'level3': '../app/js/level3Data',
    'methods': '../app/js/methods'
    },
    shim: {
      'knockout.punches': {
        deps: ['knockout']
      }
    }
});

define(function (require) {
  var system = require('durandal/system'),
      app = require('durandal/app'),
      ko = require('knockout');

  window.ko = ko;


  require('knockout.punches');
  ko.punches.enableAll();
  ko.punches.attributeInterpolationMarkup.enable();

  system.debug(true);

  app.title = 'Splendor';

  app.configurePlugins({
    router: true,
    dialog: true
  });

  app.start().then(function() {
    app.setRoot('shell');
  });
});

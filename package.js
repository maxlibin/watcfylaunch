Package.describe({
  name: 'watcfy:launch',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'This package allow you to quickly create a launch / marketing page for users to signup as beta testers etc...',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('iron:router@1.0.9');
  api.use('mongo', ['client', 'server']);
  api.use('templating', 'client');

  api.addFiles(['launch.js', 'launch.html', 'launch.css', 'img/main-bg.jpg', 'img/main-bg-white.jpg'], 'client');
  api.addFiles('launchCollection.js', ['client', 'server']);

  api.export('WatcfyLaunch', 'client')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('watcfy:launch');
  api.addFiles('launch-tests.js');
});

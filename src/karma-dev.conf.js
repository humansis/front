// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-spec-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false, // leave Jasmine Spec Runner output visible in browser
            jasmine: {
                random: false,
            }
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../coverage'),
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true,
        },
        captureTimeout: 210000,
        browserDisconnectTolerance: 3,
        browserDisconnectTimeout : 210000,
        browserNoActivityTimeout : 210000,
        reporters: ['spec', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome_no_sandbox'],
        browserConsoleLogOptions: {
            // level: 'debug'
            level: 'warn',
            format: '%b %T: %m',
            terminal: false
        },
        customLaunchers: {
            Chrome_no_sandbox: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        singleRun: false,
    });
};

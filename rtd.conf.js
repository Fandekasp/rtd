// *********************************************************************************************************************
// IF YOU WANT TO CUSTOMIZE ANYTHING HERE, COPY THIS FILE TO YOUR /test DIRECTORY AND RTD WILL USE THAT FILE INSTEAD
// *********************************************************************************************************************

module.exports = {
    // RTD reduces the noise by swallowing most outputs. Here you can control this
    output: {
        debug: false, // enables all outputs. This is also switched on if you run grunt --debug
        appOutput: false, // this shows the output from the 'meteor run' command
        mirrorOutput: false, // this shows the output from the 'meteor run' command on the mirror app
        karma: false // shows Karma's output
    },
    options: {
        coverage: {
            // Coverage checks run after all unit and acceptance tests run. You can disable here or set the thresholds
            enabled: true,
            thresholds: {
                'statements': 100,
                'branches': 100,
                'functions': 100,
                'lines': 100
            }
        }
    },
    selenium: {
        // You can set specific versions of selenium-server / chromedriver to use here
        chromeDriverOs: 'mac32', // "linux_64" for linux systems
        chromeDriverVersion: '0.8',
        chromeDriverSha: '5a485bb73a7e85a063cffaab9314837a00b98673',
        seleniumServeVersion: '2.32.0',
        seleniumServeSha: 'c94e6d5392b687d3a141a35f5a489f50f01bef6a'
    }
};
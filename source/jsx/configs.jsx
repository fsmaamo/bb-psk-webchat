define([], function() {

    /*
        You need to replace these API keys and hostnames with
        your own. Then run 'grunt dev' on the console to transpile
        this file into .js
    */

    var local = {
        env: 'local',
        Skylink: {
            apiMCUKey: '',
            apiNoMCUKey: '8a889d70-17f3-4334-88e7-b82730268d17'
        },
        maxUsers: 4
    };

    var dev = {
        env: 'dev',
        Skylink: {
            apiMCUKey: '',
            apiNoMCUKey: '8a889d70-17f3-4334-88e7-b82730268d17'
        },
        maxUsers: 4
    };

    var prod = {
        env: 'prod',
        Skylink: {
            apiMCUKey: '',
            apiNoMCUKey: '70280587-84b9-490c-8295-71b659f1b361'
        },
        maxUsers: 4
    };

    return location.host.indexOf('http://www.cgp-group.com/webchat') > -1  ? prod : (
            location.host.indexOf('https://web.cgp-data-services.com') > -1 ? dev : local
        );

});

require.config({

    waitSeconds: 15,

    baseUrl: '/js',

    deps: [
        'main'
    ],

    paths: {
        socketio: 'https://cdn.temasys.com.sg/libraries/socket.io-client/1.4.4/socket.io',
        adapter: 'https://cdn.temasys.com.sg/adapterjs/0.13.4/adapter.screenshare',
        skylink: 'https://cdn.temasys.com.sg/skylink/skylinkjs/0.6.16/skylink.debug',
        // facebook: '//connect.facebook.net/en_US/all',
        // twitter: '//platform.twitter.com/widgets',
        fastclick: 'https://cdnjs.cloudflare.com/ajax/libs/fastclick/0.6.11/fastclick.min',
        router: 'libs/director',
        marked: 'libs/marked',
        react: 'https://cdnjs.cloudflare.com/ajax/libs/react/0.10.0/react'
    },

    shim: {
        skylink: {
            exports: 'Skylink',
            deps: [
                'socketio',
                'adapter'
            ],
            init: function(io) {
                window.io = io;
                return new this.Skylink();
            }
        },
        router: {
            exports: 'Router',
            init: function() {
                return new this.Router();
            }
        }
        // facebook: {
        //     exports: 'FB'
        // },
        // twitter: {
        //     exports: 'TW'
        // }
    }

});

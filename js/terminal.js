jQuery(document).ready(function($) {
    $('#terminal').terminal({
            help: function () {
                this.echo('');
                this.echo('[[;#E2462A;#000]profiles]         all my social profiles');
                this.echo('[[;#03A9F4;#000]about]            about me');
                this.echo('[[;#D4E22A;#000]languages]        programming languages of course');
                this.echo('[[;#2AE27F;#000]projects]         projects I\'ve worked on');
                this.echo('[[;#2ACEE2;#000]pgp]              send me something encrypted');
                this.echo('');
                this.echo('[[;#E22AD1;#000]clear]          clears the console');
            },
            about: function() {
                this.echo('');
                this.echo ("About me(Or just click on the top right corner)        " + window.location.href +"about");
            },
            profiles: function() {
                this.echo('');
                this.echo("Github           https://github.com/nigelmd");
                this.echo("Twitter          https://twitter.com/nigelmd");
                this.echo("LinkedIn         https://linkedin.com/in/nigelmd");
                this.echo("Keybase          https://keybase.io/ndsouza");
                this.echo('');
            },
            languages: function() {
                this.echo('');
                this.echo('Python');
                this.echo('C/C++');
                this.echo('PHP');
                this.echo('Java');
                this.echo('Scala');
                this.echo('JavaScript');
                this.echo('');
            },
            projects: function() {
                this.echo('');
                this.echo('Space Invaders');
                this.echo('Omega Race Multiplayer');
                this.echo('Audio Engine');
                this.echo('Multi-threaded music player');
                this.echo('Multi-threaded maze solver');
                this.echo('');
            },
            pgp: function() {
                this.echo('');
                this.echo('PGP              https://pgp.mit.edu/pks/lookup?search=0x36F3399A');
                this.echo('Fingerprint      E3EC ABC0 36F3 399A');
                this.echo('');
            }
        },
        {
            prompt: 'guest@nigeldsouza> ',
            name: 'Nigel\'s Terminal',
            height: 400,
            enabled: false,
            greetings: 'Hi, welcome to my website. Type [[;#2AE24C;#000]help] for more options',
            history: true,
            cookie: true,
            exit: true,
            keypress: function(e) {
                if (e.which == 96) {
                    return false;
                }
            },
            //tabcomplete: function() { return ""; }
            onInit: function(term) { }
        });
});

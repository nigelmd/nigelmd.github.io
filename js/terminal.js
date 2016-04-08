jQuery(document).ready(function($) {
    $('#terminal').terminal({
            help: function () {
                this.echo('');
                this.echo('[[;#E2462A;#000]profiles]         all my social profiles');
                this.echo('[[;#03A9F4;#000]about]            about me');
                this.echo('[[;#D4E22A;#000]languages]        programming languages of course');
                this.echo('[[;#2AE27F;#000]softwares]        software I use');
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
                this.echo("Github           http://github.com/xcrucifier");
                this.echo("Twitter          http://twitter.com/nigelmd");
                this.echo("LinkedIn         http://linkedin.com/in/nigelmd");
                this.echo("Keybase          http://keybase.io/xcrucifier");
                this.echo('');
            },
            languages: function() {
                this.echo('');
                this.echo('Python');
                this.echo('Java');
                this.echo('Scala');
                this.echo('C/C++');
                this.echo('PHP');
                this.echo('HTML5');
                this.echo('JavaScript');
                this.echo('');
            },
            softwares: function() {
                this.echo('');
                this.echo('Mac OSX');
                this.echo('ZSH');
                this.echo('Windows');
                this.echo('Linux(Ubuntu, Redhat)');
                this.echo('All Jetbrains products');
                this.echo('Sequel Pro');
                this.echo('Homebrew');
                this.echo('Vagrant');
                this.echo('Amazon Web Services');
                this.echo('');
            },
            pgp: function() {
                this.echo('');
                this.echo('PGP              http://pgp.mit.edu/pks/lookup?search=0x2FD7CF9A');
                this.echo('Fingerprint      C679 3303 2FD7 CF9A');
                this.echo('');
            }
        },
        {
            prompt: 'guest@nigeldsouza> ',
            name: 'Nigel\'s Terminal',
            height: 400,
            enabled: true,
            greetings: 'Hi, welcome to my website. Type [[;#2AE24C;#000]help] for more options',
            history: true,
            cookie: true,
            exit: true,
            keypress: function(e) {
                if (e.which == 96) {
                    return false;
                }
            },
            tabcomplete: function() { return ""; }
        });
});

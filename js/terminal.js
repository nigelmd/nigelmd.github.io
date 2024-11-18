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
                this.echo("");
                this.echo('Hi, I\'m Nigel D\'Souza, an experienced software engineer, worked at Tiktok, Oracle and a digital agency.');
                this.echo("");
                this.echo("I'm currently the founder of a stealth startup in the fintech space so keep an eye out for updates.");
                this.echo("");
                this.echo('Aside from technology, I love scuba diving, basketball, video games, dancing, skating, drumming and all outdoor activities with my dog.');
                this.echo("");
                this.echo("Tweet to me on threads: https://www.threads.net/@nigelmd or bluesky: https://bsky.app/profile/nigelmd.bsky.social" );
                this.echo("");
                this.echo("View my github profile: https://github.com/nigelmd or contact me on LinkedIn: https://linkedin.com/in/nigelmd");
                this.echo("");
                this.echo("Visit my photography website: https://legindary.photos");
                this.echo("");
                this.echo("If you need to send me something encrypted or need to verify my identity:");
                this.echo("");
                this.echo('My PGP Key: https://pgp.mit.edu/pks/lookup?search=0x36F3399A and Fingerprint: E3EC ABC0 36F3 399A');
                this.echo("");
                this.echo("Or view all my verifications on keybase: https://keybase.io/ndsouza");
                this.echo("");
                this.echo ("If you don't want to read this in the terminal and prefer a page, just click this or the top right corner: " + window.location.href +"about");
            },
            profiles: function() {
                this.echo('');
                this.echo("Github           https://github.com/nigelmd");
                this.echo("Threads          https://www.threads.net/@nigelmd");
                this.echo("LinkedIn         https://linkedin.com/in/nigelmd");
                this.echo("Keybase          https://keybase.io/ndsouza");
                this.echo("Photography      https://legindary.photos")
                this.echo('');
            },
            languages: function() {
                this.echo('');
                this.echo('Python');
                this.echo('C/C++');
                this.echo('PHP');
                this.echo('Java');
                this.echo('JavaScript');
                this.echo('');
            },
            projects: function() {
                this.echo('');
                this.echo('I got tired of updating this')
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
            completion: false,
            //keypress: function(e) {
                //if (e.which == 96) {
                    //return false;
                //}
            //},
            //tabcomplete: function() { return ""; }
            //onInit: function(term) { }
        });
});
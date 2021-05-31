var lightTheme = 'css/mdb.min.css';
var darkTheme = 'css/mdb.dark.min.css';
var themeFlipper = false;

function resume() {
    window.location = './resume.html';
}

function loadASTR() {
    gameInstance = UnityLoader.instantiate("gameContainer", "Build/build.json", { onProgress: UnityProgress });
}

function changeTheme(){

    var ele = document.getElementById('theme');

    ele.href = themeFlipper ? darkTheme : lightTheme;

    themeFlipper = !themeFlipper;
}

function loadTheme(){

    var ele = document.getElementById('theme');

    console.log(themeFlipper);

    ele.href = themeFlipper ? lightTheme : darkTheme;
}

function fullscreen() {

    if (gameInstance) {
        gameInstance.SetFullscreen(1);
    }
    else {
        gameInstance = UnityLoader.instantiate("gameContainer", "Build/build.json", { onProgress: UnityProgress });
        gameInstance.SetFullscreen(1);
    }
}

function sendMessage() {

    var from = document.getElementById('contact-from').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;

    // please tell me if you found this :)
    emailjs.init("user_kycrFg3YsSi26CWoPkLSP");

    var templateParams = {
        from_name: from,
        message: message,
        reply_to: email
    };
    emailjs.send('service_eey6yvh', 'template_xzyicsh', templateParams)
        .then(function (response) {
            $("#contactModal").modal()
            console.log('SUCCESS! Your message was sent.', response.status, response.text);
        }, function (error) {
            window.location = './index.html';
            alert('For some reason, the email service (emailjs) failed to send your message. Please use one of my listed emails to contact me, sorry for the inconvenience :(')
            console.log('FAILED...', error);
        });
}
var qrcode = new QRCode("test", {
    text: "http://javascript-html5-tutorial.com/",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

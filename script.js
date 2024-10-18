document.getElementById("generateBtn").addEventListener("click", function(){
    const url = document.getElementById("urlInput").value;

    if (!url){
        alert("Please enter a url");
        return;
    }

    document.getElementById("qrCode").innerHTML="";

    new QRCode(document.getElementById("qrCode"), {
        text : url,
        width : 256,
        height : 256
    });
});
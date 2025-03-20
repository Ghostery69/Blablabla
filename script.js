document.addEventListener("DOMContentLoaded", () => {
    figlet.defaults({ fontPath: "https://cdnjs.cloudflare.com/ajax/libs/figlet/1.2.4/fonts/" });

    figlet.preloadFonts(["Standard", "Big", "Doom", "Slant"], function() {
        let select = document.getElementById("fontSelect");
        ["Standard", "Big", "Doom", "Slant"].forEach(font => {
            let option = document.createElement("option");
            option.value = font;
            option.textContent = font;
            select.appendChild(option);
        });
    });
});

function generateAscii() {
    let text = document.getElementById("textInput").value;
    let font = document.getElementById("fontSelect").value;

    figlet.text(text, { font: font }, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        document.getElementById("asciiOutput").textContent = result;
    });
}

function copyToClipboard() {
    let asciiText = document.getElementById("asciiOutput").textContent;
    navigator.clipboard.writeText(asciiText).then(() => {
        alert("Texte copié !");
    });
}

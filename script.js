document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const container = document.querySelector(".container");
    const result = document.getElementById("result");

    if(noBtn){
        noBtn.addEventListener("mouseover", () => {
            const x = Math.floor(Math.random() * window.innerWidth * 0.8);
            const y = Math.floor(Math.random() * window.innerHeight * 0.8);
            noBtn.style.position = "absolute";
            noBtn.style.left = `${x}px`;
            noBtn.style.top = `${y}px`;
        });
    }

    if(yesBtn){
        yesBtn.addEventListener("click", () => {
            container.style.display = "none";
            result.style.display = "block";
        });
    }
});

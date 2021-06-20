const showPic = document.getElementById("showPic");
const choiceMenu = document.getElementById("choiceMenu");

//user選擇出拳，show圖
choiceMenu.addEventListener("change", function () {
    document.getElementById("text").innerText = "";

    // //每次選都把畫面清空
    showPic.innerHTML = "";
    if (this.value === "opening") {
        return;
    }

    //放出拳圖
    const image = document.createElement("img");
    image.src = `images/${this.value}.png`;
    image.style.width = "300px";
    showPic.appendChild(image);
});

function showResult() {
    showPic.innerHTML = "";
    const result = document.createElement("img");
    result.id = "result";
    const imagePath = {
        paper: `./images/scissors-paper.png`,
        scissors: `./images/stone-scissors.png`,
        stone: `./images/paper-stone.png`,
    };
    result.src = imagePath[choiceMenu.value];
    showPic.appendChild(result);
    document.getElementById("text").innerText = "You Lose!";
}

//出拳並出現特效，最後show result圖
let confirm = document.getElementById("confirm");
confirm.addEventListener("click", () => {
    showPic.innerHTML = "";
    if (choiceMenu.value == "opening") {
        document.getElementById("text").innerText = "Please select your choice. :)";
        return;
    }

    const loadingImg = document.createElement("img");
    loadingImg.src = "./images/opening.png";
    loadingImg.id = "openingAnimation";
    showPic.appendChild(loadingImg);

    setTimeout(() => {
        loadingImg.classList.add("hide");
    }, 0);

    setTimeout(function () {
        showResult();
    }, 1500);
});

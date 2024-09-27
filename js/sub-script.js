const btnMenu = document.querySelector(".sub-btn-menu");
const MobileMenu = document.querySelector(".mobile-menu");
const btnClose = document.querySelector(".btn-close");
btnMenu.addEventListener("click", () => {
    MobileMenu.classList.add("active");
});
btnClose.addEventListener("click", () => {
    MobileMenu.classList.remove("active");
});

function modelClick(modelName, element) {
    const model = document.querySelector("#model-img");
    const modelDescription = document.querySelector("#model-descriptions");
    // 1. 이미지 변경
    model.src = `./images/sub-visual-${modelName}.jpg`;
    model.alt = `sub-visual-${modelName}`;

    // 2. 모델 설명 변경
    const descriptions = {
        model3: "가족, 도로 여행 및 출퇴근에 적합한 스포츠 세단",
        modelS: "장거리 주행, 빠른 가속 및 안락한 주행에 적합한 럭셔리 세단",
        modelX: "안전과 편안한 승차감을 보장하는 럭셔리 SUV",
        modelY: "안전하고 장거리 여행에 적합한 중형 SUV",
    };
    modelDescription.textContent = descriptions[modelName];
    // 3. 모든 a 태그의 active 클래스 제거
    const links = document.querySelectorAll(".drive-models-list li a");
    links.forEach(function (link) {
        link.classList.remove("active");
    });
    console.log(links);
    // 4. 클릭된 a 태그에 active 클래스 추가
    element.classList.add("active");
}

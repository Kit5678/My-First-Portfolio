const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

let isFirstMove = true;
// เมื่อกดปุ่ม Yes
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I knew you love me ❤️";
    gif.src = "https://i.pinimg.com/originals/60/3d/3f/603d3f329fa043cc98c1c1555913c9d8.gif";
    noBtn.style.display = "none";
});

// เมื่อเอาเมาส์ไปจ่อ (Hover) ที่ปุ่ม No ให้มันหนี
noBtn.addEventListener("mouseover", () => {
    
    if (isFirstMove) {
        const placeholder = document.createElement("div");
        placeholder.style.width = "100px";
        placeholder.style.height = "40px";
        btnGroup.appendChild(placeholder);
        isFirstMove = false;
    }
    
    // 2. คำนวณระยะสูงสุด (ลบขนาดปุ่มออกเพื่อไม่ให้ปุ่มหลุดขอบ)
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // 3. สุ่มตำแหน่งใหม่ โดยลบระยะขอบ (Margin) ออกนิดหน่อยเพื่อความปลอดภัย
    const randomX = Math.max(0, Math.floor(Math.random() * maxX));
    const randomY = Math.max(0, Math.floor(Math.random() * maxY));

    // 4. สั่งให้ปุ่มเปลี่ยนไปตำแหน่งใหม่
    noBtn.style.position = "fixed"; // ใช้ fixed เพื่อให้อ้างอิงกับหน้าจอได้แม่นยำ
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.zIndex = "999";
});

/* ทำต่อให้ครบทุกเมนูตามระยะห่างจริงของคุณ... */

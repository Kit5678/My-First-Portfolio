  const nav = document.querySelector('nav');
  const indicator = document.querySelector('.nav-indicator');
  const links = document.querySelectorAll('nav a');
  const activeLink = document.querySelector('nav a.active');

  // ฟังก์ชันย้าย Indicator ไปยังตำแหน่งที่ระบุ
  function moveIndicator(el) {
    indicator.style.width = el.offsetWidth + 'px';
    indicator.style.left = el.offsetLeft + 'px';
    indicator.style.opacity = '1';
  }

  // ตอนเอาเมาส์ชี้
  links.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
      moveIndicator(e.target);
    });
  });

  // ตอนเอาเมาส์ออก ให้กลับไปที่หน้า Active
  nav.addEventListener('mouseleave', () => {
    if (activeLink) {
      moveIndicator(activeLink);
    } else {
      indicator.style.opacity = '0';
    }
  });

  // ตั้งค่าเริ่มต้นตอนโหลดหน้าเว็บ
  if (activeLink) {
    moveIndicator(activeLink);
  }
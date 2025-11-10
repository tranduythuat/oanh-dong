// Kích hoạt ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Gọi các hiệu ứng có sẵn
document.addEventListener("DOMContentLoaded", () => {
  gsapFlipIn(".animate-flip");
  gsapFadeIn(".animate-fade");
  gsapFadeRight(".fade-right");
  gsapFadeLeft(".fade-left");
  gsapFadeUp(".fade-up");
  gsapFadeDown(".fade-down");
  gsapRotateBottomLeft(".rotate-bl");
  gsapRotateBottomRight(".rotate-br");
  gsapFlipVerticalLeft(".flip-vertical-left");
  gsapRollInLeft(".roll-in-left");
  gsap_rotate_bl__float(".rotate-bl--float");

  // Tạo timeline
  const tl_coudontwn = gsap.timeline({
    repeatDelay: 0,  // delay giữa các lần lặp
    defaults: { duration: .8, ease: "power2.out" }, // giá trị mặc định
    scrollTrigger: {
      trigger: ".countdown",
      start: "top 85%", // khi phần tử xuất hiện 80% trong viewport
    }
  });

  // Thêm các animation theo thứ tự
  tl_coudontwn.from(".months", { y: 100, opacity: 0 })       
    .from(".weeks", { y: 100, opacity: 0 }, "-=0.5")     
    .from(".days", { y: 100, opacity: 0 }, "-=0.5") 
    .from(".seconds", { y: 100, opacity: 0 }, "-=0.5");    

  const tl_timeline = gsap.timeline({
    repeatDelay: 0,  // delay giữa các lần lặp
    defaults: { duration: .8, ease: "power2.out" }, // giá trị mặc định
    scrollTrigger: {
      trigger: ".time-box",
      start: "top 90%", // khi phần tử xuất hiện 80% trong viewport
    }
  });

  tl_timeline.from(".first", { x: -100, opacity: 0 })       
  .from(".second", { x: -100, opacity: 0 }, "-=0.5")     
  .from(".third", { x: -100, opacity: 0 }, "-=0.5") 
  .from(".four", { x: -100, opacity: 0 }, "-=0.5")    
  .from(".five", { x: -100, opacity: 0 }, "-=0.5");    

  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.menu-items');
  const icon = document.querySelector('.hamburger-lines');
  const container = document.querySelector(".navbar-container");

  if (toggle && menu && icon && container) {
    document.addEventListener('click', (e) => {
      const isInside = container.contains(e.target) || icon.contains(e.target);
      if (!isInside) {
        toggle.checked = false;
      }
    });

  }

  menu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        // Cuộn mượt
        window.scrollTo({
          top: targetEl.offsetTop + 10,
          behavior: "smooth"
        });
      }

      // Đóng menu
      toggle.checked = false;

    });
  });
});

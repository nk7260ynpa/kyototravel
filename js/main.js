// Mobile hamburger menu 切換
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 點擊 mobile 選單連結後自動收合
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
    // 获取所有的导航链接
    const navLinks = document.querySelectorAll('.menu-item a');
  
    // 获取当前页面的相对路径
    const currentPage = window.location.pathname.split('/').pop();
  
    // 遍历所有链接，查找与当前页面相匹配的链接
    navLinks.forEach((link) => {
      if (link.getAttribute('href') === currentPage) {
        link.style.borderBottom = '3px solid #31579F';

      }
    });
  });
  
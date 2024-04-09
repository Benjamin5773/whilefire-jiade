document.addEventListener('DOMContentLoaded', (event) => {
  // 获取所有的背景选择器和订阅按钮
  const selectedBgs = document.querySelectorAll('.selected-bg-1, .selected-bg-2, .selected-bg-3');
  const subscribeButton = document.querySelector('.subscribe-button h6');

  // 设置第一个背景的透明度为1
  const firstBgImage = document.querySelector('.selected-bg-1 img');
  firstBgImage.style.opacity = '1';

  // 禁用按钮
  subscribeButton.style.opacity = '0.5';
  subscribeButton.style.pointerEvents = 'none';

  // 为每个背景选择器添加点击事件监听器
  selectedBgs.forEach(bg => {
    bg.addEventListener('click', () => {
      // 重置所有背景的透明度为0
      selectedBgs.forEach(bgInner => bgInner.children[0].style.opacity = '0');

      // 将点击的背景透明度设为1
      bg.children[0].style.opacity = '1';

      // 检查是否为.selected-bg-2或.selected-bg-3
      if (bg.classList.contains('selected-bg-2') || bg.classList.contains('selected-bg-3')) {
        subscribeButton.style.opacity = '1';
        subscribeButton.style.pointerEvents = 'auto'; // 启用按钮
        subscribeButton.style.cursor = 'pointer';  // 启用时鼠标变为手型

      } else {
        subscribeButton.style.opacity = '0.5';
        subscribeButton.style.pointerEvents = 'none'; // 禁用按钮

      }
    });
  });

    // Find the subscribe button and add a click event to it
  
  // 添加点击事件监听器，但只在按钮启用时执行动作
  subscribeButton.addEventListener('click', function() {
    if (subscribeButton.style.pointerEvents !== 'none') {
        // 检查哪个背景被选中并存储选择
        if (document.querySelector('.selected-bg-2 img').style.opacity === '1') {
            localStorage.setItem('selectedBg', 'images/19Left.png');
        } else if (document.querySelector('.selected-bg-3 img').style.opacity === '1') {
            localStorage.setItem('selectedBg', 'images/29Left.png');
        }

        // 导航到支付页面
        window.location.href = 'payment.html';
    }
});


});

window.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.hero_scroll_container');
    if (container.scrollHeight > container.clientHeight) {
      container.style.overflowY = 'scroll';
    }
  });
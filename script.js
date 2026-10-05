document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.tree-item.has-children');

  items.forEach(item => {
    const btn = item.querySelector('.toggle-btn');
    
    btn.addEventListener('click', () => {
      item.classList.toggle('expanded');
      item.classList.toggle('collapsed');
    });
  });
});

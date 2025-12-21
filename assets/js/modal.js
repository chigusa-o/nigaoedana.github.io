// 画像クリックでモーダル表示
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const captionText = document.getElementById('modalCaption');
  const closeBtn = document.querySelector('.modal-close');
  
  // .card img をすべて取得してクリックイベントを追加
  const images = document.querySelectorAll('.card img');
  
  images.forEach(function(img) {
    img.style.cursor = 'pointer'; // カーソルをポインターに
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.textContent = this.alt;
    });
  });
  
  // 閉じるボタンをクリック
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // モーダルの外側をクリックで閉じる
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

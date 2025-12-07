document.addEventListener('DOMContentLoaded',function(){
  // マウスオーバーで自動スクロールを止める
  const thumbsContainer = document.getElementById('thumbs');
  if(thumbsContainer){
    thumbsContainer.addEventListener('mouseenter', ()=>{
      thumbsContainer.style.animationPlayState = 'paused';
    });
    thumbsContainer.addEventListener('mouseleave', ()=>{
      thumbsContainer.style.animationPlayState = 'running';
    });
  }

  // カテゴリフィルター機能
  const categoryBtns = document.querySelectorAll('.category-btn');
  const cards = document.querySelectorAll('.card');
  
  if(categoryBtns.length > 0 && cards.length > 0){
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // すべてのボタンからactiveクラスを削除
        categoryBtns.forEach(b => b.classList.remove('active'));
        // クリックされたボタンにactiveクラスを追加
        btn.classList.add('active');
        
        // 選択されたカテゴリを取得
        const selectedCategory = btn.getAttribute('data-category');
        
        // カードの表示/非表示を切り替え
        cards.forEach(card => {
          const cardCategories = card.getAttribute('data-category');
          
          if(selectedCategory === 'all' || cardCategories.includes(selectedCategory)){
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // モーダル機能（画像クリックで拡大表示）
  const modal = document.getElementById('imageModal');
  if(modal){
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');
    
    // すべてのカード内の画像にクリックイベントを追加
    const cardImages = document.querySelectorAll('.card img');
    cardImages.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function(){
        modal.style.display = 'block';
        modalImg.src = this.src;
        modalCaption.textContent = this.alt;
      });
    });
    
    // 閉じるボタンをクリックしたとき
    closeBtn.addEventListener('click', function(){
      modal.style.display = 'none';
    });
    
    // モーダルの背景をクリックしたとき
    modal.addEventListener('click', function(e){
      if(e.target === modal){
        modal.style.display = 'none';
      }
    });
  }
});
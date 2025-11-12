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
});
document.addEventListener('DOMContentLoaded',function(){
  const thumbs = document.querySelectorAll('.thumb');
  const main = document.getElementById('mainImage');
  if(!thumbs || !main) return;
  thumbs.forEach(t=>{
    t.addEventListener('click', ()=>{
      // クリックされたサムネの中身をメイン領域にコピーする
      main.innerHTML = t.innerHTML;
    });
  });
  // マウスオーバーで自動スクロールを止める
  const thumbsContainer = document.getElementById('thumbs');
  let paused = false;
  if(thumbsContainer){
    thumbsContainer.addEventListener('mouseenter', ()=>{
      thumbsContainer.style.animationPlayState = 'paused';
    });
    thumbsContainer.addEventListener('mouseleave', ()=>{
      thumbsContainer.style.animationPlayState = 'running';
    });
  }
});
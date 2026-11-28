(function(){
  var w=document.querySelector('.hero .hbigw'),img=w&&w.querySelector('img.hbig');
  if(!img||w.querySelector('.tring'))return;
  var r=document.createElement('i');r.className='tring';r.setAttribute('aria-hidden','true');
  img.insertAdjacentElement('afterend',r);
  var c=img.cloneNode(false);c.src='images/hero-hany-cut.png';c.alt='';c.setAttribute('aria-hidden','true');c.removeAttribute('loading');c.classList.add('tcut');
  r.insertAdjacentElement('afterend',c);
  /* put the circle on his head: photo is 1600x600, shown with object-fit cover, head about 49% across and 40% down */
  function place(){
    var wr=w.getBoundingClientRect(),ir=img.getBoundingClientRect();
    var s=Math.max(ir.width/1600,ir.height/600);
    var ox=ir.left-wr.left+(ir.width-1600*s)/2, oy=ir.top-wr.top+(ir.height-600*s)/2;
    var d=Math.min(0.58*600*s,0.72*wr.width);
    r.style.width=r.style.height=d+'px';
    r.style.left=(ox+0.49*1600*s-d/2)+'px';
    r.style.top=(oy+0.40*600*s-d/2)+'px';
  }
  place();addEventListener('resize',place);img.addEventListener('load',place);
  document.documentElement.addEventListener('transitionend',place);
})();

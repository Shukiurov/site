/* Custom cursor */

/* ── CURSOR — glowing dot instant, ring slight lag ── */
const c1=document.getElementById('cur'),c2=document.getElementById('cur2');
let rx=0,ry=0,tx=0,ty=0;
document.addEventListener('mousemove',e=>{
  tx=e.clientX;ty=e.clientY;
  c1.style.left=tx+'px';c1.style.top=ty+'px';
});
(function loop(){
  rx+=(tx-rx)*.2;ry+=(ty-ry)*.2;
  c2.style.left=rx+'px';c2.style.top=ry+'px';
  requestAnimationFrame(loop);
})();
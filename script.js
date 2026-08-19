
const menu=document.querySelector('.menu'), links=document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-mail]').forEach(form=>form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=form.querySelector('[name="name"]')?.value||'';
  const email=form.querySelector('[name="email"]')?.value||'';
  const phone=form.querySelector('[name="phone"]')?.value||'';
  const msg=form.querySelector('[name="message"]')?.value||'';
  const subject=encodeURIComponent('Website Inquiry - Grannies Home');
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${msg}`);
  window.location.href=`mailto:Leticia@grannieshome.org?subject=${subject}&body=${body}`;
}));

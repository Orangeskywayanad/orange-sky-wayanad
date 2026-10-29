
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
const menuButton=document.querySelector('.menu'),nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.textContent=nav.classList.contains('open')?'×':'☰';menuButton.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const form=document.getElementById('booking');
if(form){
 const today=new Date(),local=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);
 const ci=form.querySelector('[name=checkin]'),co=form.querySelector('[name=checkout]');ci.min=local;co.min=local;
 ci.addEventListener('change',()=>co.min=ci.value||local);
 form.addEventListener('submit',e=>{
  e.preventDefault();const d=new FormData(form);
  const emailTo='reservations@orangeskywayanad.com'; // Change to the real working reservation email.
  const body=['Orange Sky Wayanad booking enquiry','',`Name: ${d.get('name')}`,`Email: ${d.get('email')}`,`Phone: ${d.get('phone')}`,`Check-in: ${d.get('checkin')}`,`Check-out: ${d.get('checkout')}`,`Guests: ${d.get('guests')}`,`Stay type: ${d.get('room')}`,`Message: ${d.get('message')||'None'}`].join('\\n');
  document.getElementById('status').textContent='Opening your email app. Please review and send the enquiry.';
  window.location.href=`mailto:${emailTo}?subject=${encodeURIComponent('Orange Sky Wayanad — Booking Enquiry')}&body=${encodeURIComponent(body)}`;
 });
}

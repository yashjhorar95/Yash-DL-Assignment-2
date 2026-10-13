/* ============================================================
   CONTACT PAGE JS — contact.html
   Handles: form validation and submission
   ============================================================ */

const form   = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Sending…';

  // -- Replace this with your own backend / EmailJS / Formspree endpoint --
  // Example using Formspree: action="https://formspree.io/f/YOUR_FORM_ID"
  // For now, we simulate a successful send after 1.5s.
  await new Promise(r => setTimeout(r, 1500));

  status.className = 'form-status success';
  status.textContent = '🎉 Message sent! I\'ll get back to you soon.';
  form.reset();
  btn.disabled = false;
  btn.textContent = 'Send Message';

  setTimeout(() => { status.className = 'form-status'; }, 6000);
});

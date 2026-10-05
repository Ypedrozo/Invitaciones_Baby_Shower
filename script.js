(() => {
  // El evento empieza a las 4:00 PM en Ecuador (UTC-5), independientemente del dispositivo.
  const eventTime = Date.UTC(2026, 10, 22, 21, 0, 0);
  const fields = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };
  const todayMessage = document.getElementById('today-message');
  const timer = document.querySelector('.timer');

  function updateCountdown() {
    const remaining = eventTime - Date.now();
    if (remaining <= 0) {
      timer.hidden = true;
      todayMessage.hidden = false;
      return;
    }
    const totalSeconds = Math.floor(remaining / 1000);
    fields.days.textContent = String(Math.floor(totalSeconds / 86400)).padStart(3, '0');
    fields.hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, '0');
    fields.minutes.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    fields.seconds.textContent = String(totalSeconds % 60).padStart(2, '0');
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  // Las secciones aparecen suavemente; si el navegador no lo soporta, todo sigue visible.
  const sections = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
  } else {
    sections.forEach((section) => section.classList.add('is-visible'));
  }
})();

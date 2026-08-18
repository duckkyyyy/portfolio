document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.classList.toggle('active');
    });
  }

  const galleryImages = document.querySelectorAll('.gallery img');
  if (galleryImages.length) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = '<button class="lightbox-close" aria-label="Закрыть">✕</button><img alt="">';
    document.body.appendChild(lightbox);
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    const openLightbox = (src, alt) => {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    galleryImages.forEach(img => {
      img.addEventListener('click', () => openLightbox(img.src, img.alt));
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxImg) closeLightbox();
    });
    closeBtn.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }
});

// Лента общих фото команды

const FEED_PHOTOS = [
  { src: 'images/team/feed/photo-090.jpg', alt: 'Наше общее фото 90', tall: true },
  { src: 'images/team/feed/photo-091.jpg', alt: 'Наше общее фото 91', tall: true },
  { src: 'images/team/feed/photo-001.jpg', alt: 'Наше общее фото 1', tall: true },
  { src: 'images/team/feed/photo-002.jpg', alt: 'Наше общее фото 2', tall: false },
  { src: 'images/team/feed/photo-003.jpg', alt: 'Наше общее фото 3', tall: true },
  { src: 'images/team/feed/photo-004.jpg', alt: 'Наше общее фото 4', tall: true },
  { src: 'images/team/feed/photo-005.jpg', alt: 'Наше общее фото 5', tall: false },
  { src: 'images/team/feed/photo-006.jpg', alt: 'Наше общее фото 6', tall: true },
  { src: 'images/team/feed/photo-007.jpg', alt: 'Наше общее фото 7', tall: true },
  { src: 'images/team/feed/photo-008.jpg', alt: 'Наше общее фото 8', tall: true },
  { src: 'images/team/feed/photo-009.jpg', alt: 'Наше общее фото 9', tall: true },
  { src: 'images/team/feed/photo-010.jpg', alt: 'Наше общее фото 10', tall: false },
  { src: 'images/team/feed/photo-011.jpg', alt: 'Наше общее фото 11', tall: false },
  { src: 'images/team/feed/photo-012.jpg', alt: 'Наше общее фото 12', tall: false },
  { src: 'images/team/feed/photo-013.jpg', alt: 'Наше общее фото 13', tall: true },
  { src: 'images/team/feed/photo-014.jpg', alt: 'Наше общее фото 14', tall: false },
  { src: 'images/team/feed/photo-015.jpg', alt: 'Наше общее фото 15', tall: false },
  { src: 'images/team/feed/photo-016.jpg', alt: 'Наше общее фото 16', tall: false },
  { src: 'images/team/feed/photo-017.jpg', alt: 'Наше общее фото 17', tall: false },
  { src: 'images/team/feed/photo-018.jpg', alt: 'Наше общее фото 18', tall: false },
  { src: 'images/team/feed/photo-019.jpg', alt: 'Наше общее фото 19', tall: false },
  { src: 'images/team/feed/photo-020.jpg', alt: 'Наше общее фото 20', tall: false },
  { src: 'images/team/feed/photo-021.jpg', alt: 'Наше общее фото 21', tall: false },
  { src: 'images/team/feed/photo-022.jpg', alt: 'Наше общее фото 22', tall: true },
  { src: 'images/team/feed/photo-023.jpg', alt: 'Наше общее фото 23', tall: false },
  { src: 'images/team/feed/photo-024.jpg', alt: 'Наше общее фото 24', tall: false },
  { src: 'images/team/feed/photo-025.jpg', alt: 'Наше общее фото 25', tall: false },
  { src: 'images/team/feed/photo-026.jpg', alt: 'Наше общее фото 26', tall: false },
  { src: 'images/team/feed/photo-027.jpg', alt: 'Наше общее фото 27', tall: false },
  { src: 'images/team/feed/photo-028.jpg', alt: 'Наше общее фото 28', tall: false },
  { src: 'images/team/feed/photo-029.jpg', alt: 'Наше общее фото 29', tall: false },
  { src: 'images/team/feed/photo-030.jpg', alt: 'Наше общее фото 30', tall: false },
  { src: 'images/team/feed/photo-031.jpg', alt: 'Наше общее фото 31', tall: false },
  { src: 'images/team/feed/photo-032.jpg', alt: 'Наше общее фото 32', tall: false },
  { src: 'images/team/feed/photo-033.jpg', alt: 'Наше общее фото 33', tall: false },
  { src: 'images/team/feed/photo-034.jpg', alt: 'Наше общее фото 34', tall: false },
  { src: 'images/team/feed/photo-035.jpg', alt: 'Наше общее фото 35', tall: false },
  { src: 'images/team/feed/photo-036.jpg', alt: 'Наше общее фото 36', tall: false },
  { src: 'images/team/feed/photo-037.jpg', alt: 'Наше общее фото 37', tall: false },
  { src: 'images/team/feed/photo-038.jpg', alt: 'Наше общее фото 38', tall: false },
  { src: 'images/team/feed/photo-039.jpg', alt: 'Наше общее фото 39', tall: false },
  { src: 'images/team/feed/photo-040.jpg', alt: 'Наше общее фото 40', tall: false },
  { src: 'images/team/feed/photo-041.jpg', alt: 'Наше общее фото 41', tall: false },
  { src: 'images/team/feed/photo-042.jpg', alt: 'Наше общее фото 42', tall: false },
  { src: 'images/team/feed/photo-043.jpg', alt: 'Наше общее фото 43', tall: false },
  { src: 'images/team/feed/photo-044.jpg', alt: 'Наше общее фото 44', tall: false },
  { src: 'images/team/feed/photo-045.jpg', alt: 'Наше общее фото 45', tall: false },
  { src: 'images/team/feed/photo-046.jpg', alt: 'Наше общее фото 46', tall: false },
  { src: 'images/team/feed/photo-047.jpg', alt: 'Наше общее фото 47', tall: true },
  { src: 'images/team/feed/photo-048.jpg', alt: 'Наше общее фото 48', tall: false },
  { src: 'images/team/feed/photo-049.jpg', alt: 'Наше общее фото 49', tall: true },
  { src: 'images/team/feed/photo-050.jpg', alt: 'Наше общее фото 50', tall: false },
  { src: 'images/team/feed/photo-051.jpg', alt: 'Наше общее фото 51', tall: true },
  { src: 'images/team/feed/photo-052.jpg', alt: 'Наше общее фото 52', tall: false },
  { src: 'images/team/feed/photo-053.jpg', alt: 'Наше общее фото 53', tall: true },
  { src: 'images/team/feed/photo-054.jpg', alt: 'Наше общее фото 54', tall: true },
  { src: 'images/team/feed/photo-055.jpg', alt: 'Наше общее фото 55', tall: false },
  { src: 'images/team/feed/photo-056.jpg', alt: 'Наше общее фото 56', tall: false },
  { src: 'images/team/feed/photo-057.jpg', alt: 'Наше общее фото 57', tall: false },
  { src: 'images/team/feed/photo-058.jpg', alt: 'Наше общее фото 58', tall: false },
  { src: 'images/team/feed/photo-059.jpg', alt: 'Наше общее фото 59', tall: false },
  { src: 'images/team/feed/photo-060.jpg', alt: 'Наше общее фото 60', tall: true },
  { src: 'images/team/feed/photo-061.jpg', alt: 'Наше общее фото 61', tall: false },
  { src: 'images/team/feed/photo-062.jpg', alt: 'Наше общее фото 62', tall: true },
  { src: 'images/team/feed/photo-063.jpg', alt: 'Наше общее фото 63', tall: true },
  { src: 'images/team/feed/photo-064.jpg', alt: 'Наше общее фото 64', tall: true },
  { src: 'images/team/feed/photo-065.jpg', alt: 'Наше общее фото 65', tall: false },
  { src: 'images/team/feed/photo-066.jpg', alt: 'Наше общее фото 66', tall: true },
  { src: 'images/team/feed/photo-067.jpg', alt: 'Наше общее фото 67', tall: false },
  { src: 'images/team/feed/photo-068.jpg', alt: 'Наше общее фото 68', tall: false },
  { src: 'images/team/feed/photo-069.jpg', alt: 'Наше общее фото 69', tall: true },
  { src: 'images/team/feed/photo-070.jpg', alt: 'Наше общее фото 70', tall: true },
  { src: 'images/team/feed/photo-071.jpg', alt: 'Наше общее фото 71', tall: true },
  { src: 'images/team/feed/photo-072.jpg', alt: 'Наше общее фото 72', tall: true },
  { src: 'images/team/feed/photo-073.jpg', alt: 'Наше общее фото 73', tall: true },
  { src: 'images/team/feed/photo-074.jpg', alt: 'Наше общее фото 74', tall: true },
  { src: 'images/team/feed/photo-075.jpg', alt: 'Наше общее фото 75', tall: false },
  { src: 'images/team/feed/photo-076.jpg', alt: 'Наше общее фото 76', tall: false },
  { src: 'images/team/feed/photo-077.jpg', alt: 'Наше общее фото 77', tall: false },
  { src: 'images/team/feed/photo-078.jpg', alt: 'Наше общее фото 78', tall: false },
  { src: 'images/team/feed/photo-079.jpg', alt: 'Наше общее фото 79', tall: true },
  { src: 'images/team/feed/photo-080.jpg', alt: 'Наше общее фото 80', tall: false },
  { src: 'images/team/feed/photo-081.jpg', alt: 'Наше общее фото 81', tall: false },
  { src: 'images/team/feed/photo-082.jpg', alt: 'Наше общее фото 82', tall: false },
  { src: 'images/team/feed/photo-083.jpg', alt: 'Наше общее фото 83', tall: false },
  { src: 'images/team/feed/photo-084.jpg', alt: 'Наше общее фото 84', tall: false },
  { src: 'images/team/feed/photo-085.jpg', alt: 'Наше общее фото 85', tall: false },
  { src: 'images/team/feed/photo-086.jpg', alt: 'Наше общее фото 86', tall: false },
  { src: 'images/team/feed/photo-087.jpg', alt: 'Наше общее фото 87', tall: false },
  { src: 'images/team/feed/photo-088.jpg', alt: 'Наше общее фото 88', tall: false },
  { src: 'images/team/feed/photo-089.jpg', alt: 'Наше общее фото 89', tall: true },
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('feedGrid');
  const empty = document.getElementById('feedEmpty');
  const lightbox = document.getElementById('feedLightbox');
  const lightboxImg = document.getElementById('feedLightboxImg');
  const lightboxClose = document.getElementById('feedLightboxClose');

  if (!grid || !FEED_PHOTOS.length) return;

  empty.remove();

  FEED_PHOTOS.forEach((photo) => {
    const item = document.createElement('button');
    item.type = 'button';
    item.className = `feed-grid__item${photo.tall ? ' feed-grid__item--tall' : ''}`;
    item.setAttribute('aria-label', photo.alt);

    const img = document.createElement('img');
    img.src = photo.src;
    img.alt = photo.alt;
    img.loading = 'lazy';

    item.appendChild(img);
    grid.appendChild(item);

    item.addEventListener('click', () => {
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.alt;
      lightbox.classList.add('feed-lightbox--open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('feed-lightbox--open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.removeAttribute('src');
    document.body.classList.remove('menu-open');
  };

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('feed-lightbox--open')) {
      closeLightbox();
    }
  });
});

AOS.init({
  duration: 1000,
  once: true
});

AOS.init({
  duration: 1000,
  once: true
});

// POPUP GALLERY
function openGallery(el) {
  const img = el.querySelector('img');
  const caption = el.parentElement.querySelector('.caption').innerText;

  document.getElementById('popupImage').src = img.src;
  document.getElementById('popupCaption').innerText = caption;
  document.getElementById('galleryPopup').style.display = 'flex';
}

function closeGallery() {
  document.getElementById('galleryPopup').style.display = 'none';
}

function openDetail() {
  document.getElementById('detailPopup').classList.add('active');
}

function closeDetail() {
  document.getElementById('detailPopup').classList.remove('active');
}

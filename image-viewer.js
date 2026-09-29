const imageViewer = document.querySelector('.image-viewer');
const viewerImage = imageViewer?.querySelector('.viewer-image');
const viewerTitle = imageViewer?.querySelector('#viewer-title');
const viewerCaption = imageViewer?.querySelector('.viewer-caption');
let imageOpener = null;

if (imageViewer && viewerImage && viewerTitle && viewerCaption) {
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('button[data-image-viewer]');
    if (!trigger) return;
    const source = trigger.querySelector('img');
    if (!source) return;

    const project = trigger.closest('.project, .featured-preview');
    const title = project?.querySelector('h3, .preview-caption strong');
    const caption = trigger.closest('figure')?.querySelector('figcaption')
      || project?.querySelector('.preview-caption > span');

    imageOpener = trigger;
    viewerImage.src = source.currentSrc || source.src;
    viewerImage.alt = source.alt;
    viewerTitle.textContent = title?.textContent.trim() || '프로젝트 이미지';
    viewerCaption.textContent = caption?.textContent.trim() || '';
    viewerCaption.hidden = !viewerCaption.textContent;
    imageViewer.showModal();
    document.documentElement.classList.add('image-viewer-open');
  });

  imageViewer.querySelector('.viewer-close')?.addEventListener('click', () => imageViewer.close());

  imageViewer.addEventListener('click', (event) => {
    if (event.target === imageViewer || event.target.classList.contains('viewer-stage')) {
      imageViewer.close();
    }
  });

  imageViewer.addEventListener('close', () => {
    document.documentElement.classList.remove('image-viewer-open');
    imageOpener?.focus({ preventScroll: true });
  });
}

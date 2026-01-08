
// js/videoModal.js

export function initVideoModal() {


    // Modal do video do card de projeto 
    // Video modal behavior
    (function () {
        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');
        const closeBtn = document.getElementById('closeVideoModal');

        // open when clicking any element with data-video-src
        document.querySelectorAll('[data-video-src]').forEach(el => {
            el.addEventListener('click', () => {
                const src = el.getAttribute('data-video-src');
                if (!src) return;
                modalVideo.src = src;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                modalVideo.play().catch(() => { /* ignore play promise */ });
            });
        });

        function closeModal() {
            modal.classList.add('hidden');
            modalVideo.pause();
            modalVideo.currentTime = 0;
            modalVideo.src = '';
            document.body.style.overflow = '';
        }

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // optional: stop video when pressing Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
        });

        // Keep existing "ver-mais" / "fechar-detalhes" behavior working if you have JS elsewhere.
    })();

}

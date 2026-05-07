/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el)
  })

  // Trigger hero reveals immediately
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible')
    }, i * 140)
  })

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (href === '#') return
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        const offset = 80
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: 'smooth'
        })
      }
    })
  })

  // Navbar transparency on scroll
  const navbar = document.querySelector('.navbar')
  window.addEventListener(
    'scroll',
    () => {
      if (window.scrollY > 60) {
        navbar.style.background = 'rgba(8, 12, 20, 0.97)'
      } else {
        navbar.style.background =
          'linear-gradient(to bottom, rgba(8, 12, 20, 0.95) 0%, rgba(8, 12, 20, 0) 100%)'
      }
    },
    { passive: true }
  )

  // Lightbox
  const lightbox = document.getElementById('lightbox')
  const lightboxImg = document.getElementById('lightboxImg')
  const lightboxClose = document.getElementById('lightboxClose')
  const lightboxBackdrop = document.getElementById('lightboxBackdrop')

  function openLightbox(src, alt) {
    lightboxImg.src = src
    lightboxImg.alt = alt || ''
    lightbox.classList.add('open')
    document.body.style.overflow = 'hidden'
  }

  function closeLightbox() {
    lightbox.classList.remove('open')
    document.body.style.overflow = ''
    // Clear src after transition so there's no flash on next open
    setTimeout(() => {
      lightboxImg.src = ''
    }, 260)
  }

  document.querySelectorAll('.gallery-thumb').forEach((btn) => {
    btn.addEventListener('click', () => {
      const src = btn.dataset.src
      const alt = btn.querySelector('img') ? btn.querySelector('img').alt : ''
      openLightbox(src, alt)
    })
  })

  lightboxClose.addEventListener('click', closeLightbox)
  lightboxBackdrop.addEventListener('click', closeLightbox)

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
      closeLightbox()
    }
  })
})

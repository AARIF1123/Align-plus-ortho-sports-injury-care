// Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navbar = document.getElementById('navbar');
        const header = document.getElementById('header');
        
        mobileMenuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            mobileMenuBtn.innerHTML = navbar.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Gallery Filter Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    // Show/Hide gallery items based on filter
                    galleryItems.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'translateY(0) scale(1)';
                            }, 10);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'translateY(20px) scale(0.95)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    }); 
                });
            });
            
            // Update image count dynamically
            const imageCount = galleryItems.length;
            document.querySelector('.count-number').textContent = imageCount;
            
            // Lightbox functionality
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightboxImg');
            const lightboxCaption = document.getElementById('lightboxCaption');
            const lightboxClose = document.getElementById('lightboxClose');
            const lightboxPrev = document.getElementById('lightboxPrev');
            const lightboxNext = document.getElementById('lightboxNext');
            
            let currentImageIndex = 0;
            const allGalleryImages = Array.from(galleryItems);
            
            // Open lightbox when clicking on gallery item
            galleryItems.forEach((item, index) => {
                const img = item.querySelector('.gallery-img');
                const caption = item.querySelector('.gallery-caption').textContent;
                
                item.addEventListener('click', () => {
                    currentImageIndex = index;
                    openLightbox(img.src, caption);
                });
            });
            
            function openLightbox(src, caption) {
                lightboxImg.src = src;
                lightboxCaption.textContent = caption;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            function closeLightbox() {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            function showNextImage() {
                currentImageIndex = (currentImageIndex + 1) % allGalleryImages.length;
                const nextItem = allGalleryImages[currentImageIndex];
                const img = nextItem.querySelector('.gallery-img');
                const caption = nextItem.querySelector('.gallery-caption').textContent;
                openLightbox(img.src, caption);
            }
            
            function showPrevImage() {
                currentImageIndex = (currentImageIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
                const prevItem = allGalleryImages[currentImageIndex];
                const img = prevItem.querySelector('.gallery-img');
                const caption = prevItem.querySelector('.gallery-caption').textContent;
                openLightbox(img.src, caption);
            }
            
            // Event listeners for lightbox controls
            lightboxClose.addEventListener('click', closeLightbox);
            lightboxNext.addEventListener('click', showNextImage);
            lightboxPrev.addEventListener('click', showPrevImage);
            
            // Keyboard navigation for lightbox
            document.addEventListener('keydown', (e) => {
                if (!lightbox.classList.contains('active')) return;
                
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'ArrowLeft') showPrevImage();
            });
            
            // Close lightbox when clicking outside the image
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Scroll animation for gallery items
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Initial check
        window.addEventListener('load', fadeInOnScroll);
        window.addEventListener('scroll', fadeInOnScroll);

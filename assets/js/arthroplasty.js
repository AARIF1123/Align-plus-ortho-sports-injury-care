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
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Joint type tabs functionality
        const jointTypeTabs = document.querySelectorAll('.joint-type-tab');
        const jointTypeContents = document.querySelectorAll('.joint-type-content');
        
        jointTypeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const jointId = tab.getAttribute('data-joint');
                
                // Remove active class from all tabs and contents
                jointTypeTabs.forEach(t => t.classList.remove('active'));
                jointTypeContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(jointId).classList.add('active');
            });
        });
        
        // FAQ functionality
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current FAQ item
                item.classList.toggle('active');
            });
        });
        
        // Success stories slider
        const storiesTrack = document.getElementById('storiesTrack');
        const prevStoryBtn = document.getElementById('prevStoryBtn');
        const nextStoryBtn = document.getElementById('nextStoryBtn');
        const storySlides = document.querySelectorAll('.story-slide');
        let currentStorySlide = 0;
        
        function updateStoriesSlider() {
            storiesTrack.style.transform = `translateX(-${currentStorySlide * 100}%)`;
        }
        
        nextStoryBtn.addEventListener('click', () => {
            currentStorySlide = (currentStorySlide + 1) % storySlides.length;
            updateStoriesSlider();
        });
        
        prevStoryBtn.addEventListener('click', () => {
            currentStorySlide = (currentStorySlide - 1 + storySlides.length) % storySlides.length;
            updateStoriesSlider();
        });
        
        // Auto slide every 6 seconds
        setInterval(() => {
            currentStorySlide = (currentStorySlide + 1) % storySlides.length;
            updateStoriesSlider();
        }, 6000);
        
        // Scroll animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('fade-in');
                }
            });
        };
        
        // Initial check
        fadeInOnScroll();
        
        // Check on scroll
        window.addEventListener('scroll', fadeInOnScroll);

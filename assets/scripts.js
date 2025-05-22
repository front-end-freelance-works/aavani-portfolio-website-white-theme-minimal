
                // Mobile Menu Toggle Functionality
                const setupMobileMenu = () => {
            const hamburger = document.getElementById('hamburger');
            const sideMenu = document.getElementById('sideMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            const closeMenuLinks = document.querySelectorAll('.close-menu');

            const toggleMenu = () => {
                sideMenu.classList.toggle('open');
                menuOverlay.classList.toggle('visible');
                
                // Change hamburger icon based on menu state
                if (sideMenu.classList.contains('open')) {
                    hamburger.innerHTML = '<i class="fas fa-times text-xl"></i>';
                } else {
                    hamburger.innerHTML = '<i class="fas fa-bars text-xl"></i>';
                }
            };

            // Toggle menu when hamburger is clicked
            hamburger.addEventListener('click', toggleMenu);

            // Close menu when overlay is clicked
            menuOverlay.addEventListener('click', toggleMenu);

            // Close menu when a nav link is clicked (for mobile)
            closeMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        toggleMenu();
                    }
                });
            });

            // Handle window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    // Ensure menu is visible on larger screens
                    sideMenu.classList.remove('open');
                    menuOverlay.classList.remove('visible');
                    hamburger.innerHTML = '<i class="fas fa-bars text-xl"></i>';
                }
            });
        };
        // Initialize all swipers
        const initSwipers = () => {
            new Swiper('.illustrations-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.illustrations-swiper .swiper-button-next',
                    prevEl: '.illustrations-swiper .swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    }
                }
            });

            new Swiper('.paintings-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.paintings-swiper .swiper-button-next',
                    prevEl: '.paintings-swiper .swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });

            new Swiper('.digital-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.digital-swiper .swiper-button-next',
                    prevEl: '.digital-swiper .swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });

            new Swiper('.mixed-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.mixed-swiper .swiper-button-next',
                    prevEl: '.mixed-swiper .swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    }
                }
            });
        };

        // Tab functionality
        const setupTabs = () => {
            const tabs = document.querySelectorAll('.work-tab');
            const tabPanes = document.querySelectorAll('.tab-pane');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs and panes
                    tabs.forEach(t => t.classList.remove('bg-green-500', 'text-white'));
                    tabs.forEach(t => t.classList.add('bg-gray-200', 'text-dark'));
                    tabPanes.forEach(pane => pane.classList.add('hidden'));

                    // Add active class to clicked tab
                    tab.classList.remove('bg-gray-200', 'text-dark');
                    tab.classList.add('bg-green-500', 'text-white');

                    // Show corresponding pane
                    const tabId = tab.getAttribute('data-tab');
                    document.getElementById(tabId).classList.remove('hidden');
                });
            });
        };

        // Smooth scrolling for navigation
        const setupSmoothScrolling = () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        };

        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            setupMobileMenu();
            initSwipers();
            setupTabs();
            setupSmoothScrolling();
        });

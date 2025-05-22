
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


        // Tab functionality
        const setupTabs = () => {
            const tabs = document.querySelectorAll('.work-tab');
            const tabPanes = document.querySelectorAll('.tab-pane');

            tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    // Remove active class from all tabs and panes
                    tabs.forEach(t => t.classList.remove('bg-gray-500', 'text-white'));
                    tabs.forEach(t => t.classList.add('bg-gray-200', 'text-dark'));
                    tabPanes.forEach(pane => pane.classList.add('hidden'));

                    // Add active class to clicked tab
                    tab.classList.remove('bg-gray-200', 'text-dark');
                    tab.classList.add('bg-gray-500', 'text-white');

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
            setupTabs();
            setupSmoothScrolling();
        });

        // scroll top
        // Get the button
    let scrollTopBtn = document.querySelector(".scroll-to-top-btn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
    }

    function scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

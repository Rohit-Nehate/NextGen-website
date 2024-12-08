
    
        // GSAP Animations
        gsap.registerPlugin(ScrollTrigger);

        // Scroll Animations
        gsap.utils.toArray('.section').forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top 70%',
                end: 'bottom 40%',
                
                animation: gsap.fromTo(section, 
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1 }
                ),
                toggleActions: 'play none none reverse'
            });
        });

        // Contact Modal Functionality
        const contactTeamBtn = document.getElementById('contact-team-btn');
        const contactModal = document.getElementById('contact-modal');
        const closeModalBtn = document.getElementById('close-modal-btn');

        contactTeamBtn.addEventListener('click', () => {
            window.location.href="https://t.me/nextgennetworkteam";
        });

        
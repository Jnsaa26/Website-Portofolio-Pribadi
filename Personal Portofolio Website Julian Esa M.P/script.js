document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi AOS (Animate on Scroll) 
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true, 
            offset: 100,
            duration: 800,
            easing: 'ease-in-out'
        });
    }


     //Fitur 1: Tombol Toggle Tema (Dark/Light Mode)

    
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Fungsi untuk mengatur tema
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
            localStorage.setItem('theme', 'light');
        }
    };

    // Cek tema yang tersimpan di localStorage saat memuat halaman
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    setTheme(currentTheme);

    // Event listener untuk tombol toggle
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
        setTheme(theme);
    });

    // Fitur 2: Validasi Formulir Kontak
     
    const contactForm = document.getElementById('contactForm');

    // Jalankan jika form ada di halaman ini
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            // Mencegah pengiriman form
            event.preventDefault();
            event.stopPropagation();
            
            const formMessage = document.getElementById('formMessage');

            // Cek validitas form menggunakan Bootstrap
            if (!contactForm.checkValidity()) {
                formMessage.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Error: Fill in all required fields correctly.
                    </div>
                `;
            } else {
                // Form valid dan berhasil dikirim
                formMessage.innerHTML = `
                    <div class="alert alert-success" role="alert">
                        Success! Your message has been sent.
                    </div>
                `;
                contactForm.reset();
            }

            // Feedback
            contactForm.classList.add('was-validated');
            
        }, false);
    }
});
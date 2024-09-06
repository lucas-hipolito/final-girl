document.addEventListener('DOMContentLoaded', () => {
    // Manipulação de seções com botões
    const buttons = document.querySelectorAll('.section-button');
    console.log('Botões encontrados:', buttons);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            console.log('Botão clicado:', button);
            console.log('ID da seção alvo:', targetId);
            console.log('Seção alvo encontrada:', targetSection);

            if (targetSection) {
                // Oculta todas as seções
                document.querySelectorAll('.game-section').forEach(section => {
                    console.log('Ocultando seção:', section);
                    section.style.display = 'none';
                });

                // Exibe a seção selecionada
                console.log('Exibindo seção:', targetSection);
                targetSection.style.display = 'block';
            }
        });
    });

    // Manipulação de fade-in nas seções ao rolar
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    console.log('Seções de fade-in encontradas:', fadeInSections);

    function handleScroll() {
        fadeInSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            console.log('Top da seção:', sectionTop);
            console.log('Altura da viewport:', viewportHeight);

            if (sectionTop < viewportHeight * 0.8) {
                console.log('Seção visível:', section);
                section.classList.add('visible');
            } else {
                console.log('Seção fora da vista:', section);
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Chamado inicialmente para aplicar o efeito ao carregar a página
});
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contact-button');
    const contactInfo = document.getElementById('contact-info');

    contactButton.addEventListener('click', function () {
        // Alterna a visibilidade do elemento de informações de contato
        if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
            contactInfo.style.display = 'block';
        } else {
            contactInfo.style.display = 'none';
        }
    });
});

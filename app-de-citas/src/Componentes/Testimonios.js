// src/Testimonios.js
import React from 'react';
import '../Styles/Testimonios.css'; // Importar estilos

const Testimonios = () => {
  const images = [
    { src: 'https://hips.hearstapps.com/hmg-prod/images/pareja-feliz-complementa-1649347737.jpg', alt: 'Descripción 1', text: 'El amor es la poesía de los sentidos' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75DRRKgQCkAwRF-LWwuqbBx4Ge6haJxn2kQ&s', alt: 'Descripción 2', text: 'El más poderoso hechizo para ser amado es amar' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtIPVGKoT2Vi1_1qf7TpbqmmQDpjgU-Hg_g&s', alt: 'Descripción 3', text: 'Confía en tu corazón y deja que el destino decida' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8TF_dNpk5-CQtkZLl0XTzAanqbONI4kAKg&s', alt: 'Descripción 4', text: 'El amor no tiene edad porque siempre está naciendo' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQSH6QPoabT2yldDeMUCVNdxLgbPJisyB4aA&s', alt: 'Descripción 5', text: 'Reírse con el otro es el mayor síntoma de amor' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW8gWgVo7GWZc1DPrvJEEPnaynJbBQjIvJQg&s', alt: 'Descripción 6', text: 'El amor conquista todas las cosas. Démosle paso al amor' },
  ];

  return (
    <div className="testimonios-container">
      <h2 className="testimonios-titulo">TESTIMONIOS</h2>
      <div className="testimonios">
        {images.map((image, index) => (
          <div key={index} className="testimonio">
            <img src={image.src} alt={image.alt} className="testimonio-img" />
            <p className="testimonio-text">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;
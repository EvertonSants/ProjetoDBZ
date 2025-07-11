'use client';

import { useEffect, useState } from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBackground() {
      try {
        const res = await fetch('https://dragonball-api.com/api/characters');
        const data = await res.json();
        const characters = data.items;

        if (characters && characters.length > 0) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          setBgImage(characters[randomIndex].image);
        }
      } catch (error) {
        console.error('Erro ao buscar imagem do Dragon Ball:', error);
      }
    }

    fetchBackground();
  }, []);

  return (
    <main
      className="min-h-screen flex items-center justify-center relative text-white"
      style={{
        height: 'calc(100vh - 20vh)',
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: 'contain', 
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#000', 
          
      }}
    >
      {/* Camada escura por cima da imagem */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* login */}
      <div className="flex-grow z-10 flex flex-col items-center justify-center px-6 text-center">
      <h1
        className="text-3xl md:text-5xl font-extrabold text-white text-center mb-6"
         style={{
        WebkitTextStroke: '2px orange',
        textShadow: '0 0 10px orange, 0 0 20px #ff9900, 2px 2px 2px #000',
        animation: 'pulsePowerup 1.2s ease-in-out infinite',
        }}
      >
        Bem-vindo 
      </h1>

      <style jsx>{`
        @keyframes pulsePowerup {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.06);
        }
        }
      `}</style>

        {children}
      </div>

    </main>
  );
}

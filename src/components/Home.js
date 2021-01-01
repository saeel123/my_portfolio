import React from 'react';
import backgroundImage from '../bc.png';

export default function Home() {
    return (
        <main>
            <img
                src={backgroundImage}
                alt="background-image"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Namaskaram. I'm Saeel.
                </h1>
            </section>
        </main>
    );
}
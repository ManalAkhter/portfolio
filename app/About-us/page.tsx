import Image from 'next/image';
import React from 'react';
import styles from '../About-us/about.module.css'; //adjust path as needed

export default function About() {
    return (
        <div className="bg-container">
            {/* About header */}
            <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white space-x-6">
                <div className="text-lg font-bold">MY PORTFOLIO</div>
                <nav className="space-x-6">
                    <a href="/">HOME</a>
                 
                </nav>
            </header>

            {/* about section*/}
            <section className="flex justify-between  items-center mt-16 px-8 space-x-8">
                {/* left section text in rectangular form*/}
                <div className='w-2/3 p-6 bg-gray-100 rounded-lg shadow-lg'>
                <h1 className="font-bold text-3x1 mb-4">About Me</h1>
                <p className={styles.description}>
                    Hi, I am Manal, a learning Next.js developing with a interest for creating dynamic, responsive websites and applications.
                    I love working with the latest web technologies and improving my skills continuously.
                </p>
                <p className={styles.description}>
                    Besides coding, I also enjoy working on design and user exparience, striving to make the web a more beautiful and functional place.
                </p>
               </div>

                {/* right section: profile image */}
                <div className='profile-section'>
                <Image
                src='/hijab.jpg'
                alt='profile'
                width={200}
                height={200}
                className='rounded-full'
                />
              </div>
           </section>
        </div>
    );
};





import Image from 'next/image';
import styles from '../Contect-us/contect.module.css'; //import global css

export default function Contect() {
    return (
        <div className={styles.container}>
           
            <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white space-x-6">
                <div className="text-lg font-bold">MY PORTFOLIO</div>
                <nav className="space-x-6">
                    <a href="/">HOME</a>
                    <a href="#contect"></a>
                </nav>
            </header>
            
            <div className='flex justify-between items-center mt-16 px-8'> {/* flex container to position text and image*/}
            {/* left section text*/}
            <div className='w-2/3 p-6 bg-gray-100 rounded-lg shadow-lg'>
            
            <h2 className="font-bold text-3x1 mb-4">Contect Me</h2>
            <p className={styles.description}>
                Feel free to reach out to me through this form or my  email.
            </p>
            <h3 className='font-bold text-2x1 mb-3'>Number</h3>
            <p className={styles.description}>
                03062302906
            </p>
            <h4 className='font-bold text-2x1 mb-3'>Email</h4>
            <p className={styles.description}>
                m.farooq3747@gmail.com
            </p>
            </div>

            {/* right section image */}
            <div className='w-1/2 flex justify-end'> {/*flexbox ensures the image goes to the right*/ }
            <Image 
            src="/hijab girl.jpg"
             alt='profile' 
             width={200}
             height={200}
            className={styles['profile-pic']}
            />
            </div>
            
            </div>
        </div>
        
    );
}
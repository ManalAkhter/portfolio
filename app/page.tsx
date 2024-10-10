import Image from 'next/image';
import Link from 'next/link';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white space-x-6">
        {/* Logo or Title */}
        <div className="text-lg font-bold">MY PORTFOLIO</div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/About-us" legacyBehavior>
            <a className="hover:text-gray-800">About</a>
          </Link>
          <Link href="/Contect-us" legacyBehavior>
            <a className="hover:text-gray-800">Contact</a>
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex justify-start items-center mt-8 px-8">
        <div className="text-Container ">
          <br />
          <br />
          <h1 className="font-bold text-lg">Hey,</h1>
          <h2 className="font-bold text-lg">
            My Name is <span className="text-pink-600">Manal</span>
          </h2>
          <h3 className="font-bold text-lg">I am Next JS Developer</h3>
        </div>

        {/* Profile Picture */}
        <div className="ml-auto">
          <Image
            src={'/profile pic.jpg'}
            alt="profile pic"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      
      <Footer />
      </div>
    </>
  );
}


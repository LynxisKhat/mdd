import Link from "next/link";
import Image from "next/image";
export default function Header(){
return (
        <div className="container px-3 py-3 mx-auto flex justify-between items-center bg-grey-900 text-white">
          <Image src={"/images/NTT data_Logo.png"} alt="Logo" width={200} height={100} className="h-10" />
          <nav className="space-x-4">
            <Link href="/" className="text-white hover:text-blue">Home</Link>
            <Link href="/aboutus" className="text-gray-600 hover:text-black">About Us</Link>
            <Link href="/services" className="text-gray-600 hover:text-black">Services</Link>
            <Link href="/career" className="text-gray-600 hover:text-black">Career</Link>
            <Link href="/event" className="text-gray-600 hover:text-black">Event</Link>
            <Link href="/faq" className="text-gray-600 hover:text-black">FAQ</Link>
            <Link href="/contact" className="text-gray-600 hover:text-black">Contact Us</Link>
          </nav>
        </div>
);
}
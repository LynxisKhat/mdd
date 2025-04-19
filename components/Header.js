import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center">
            <span className="text-xl font-bold">Your Brand</span>
          </div>

          {/* Desktop navigation - hidden on mobile */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-900 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/aboutus" className="text-gray-900 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-900 hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-900 hover:text-blue-600">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-900 hover:text-blue-600">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-900 hover:text-blue-600">
                  FAQ
                </Link>
              </li>              
              <li>
                <Link href="/contactus" className="text-gray-900 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>

            </ul>
          </nav>

          {/* Mobile menu component */}
          <MobileMenu />
        </div>
      </header>
  );
}
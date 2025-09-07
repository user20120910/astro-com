import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

interface Props {
  shopUrl: string;
}

const Header: React.FC<Props> = ({ shopUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { name: 'shop 👕', href: shopUrl },
    { name: 'news 📰', href: '/ps/1' },
    { name: 'whores army 💬', href: '/whores-army' },
    { name: 'follow bag 👥', href: '/follow' },
    { name: 'contact 📧', href: '/contact' },
  ];

  return (
    <>
      <header className="bg-white sticky top-0 z-50 shadow-md border-b border-gray-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:py-7 lg:px-8">
          <div className="flex items-center">
            <a href="/" className="flex items-center -m-1.5 p-1.5">
              <img
                src="https://i.ibb.co/JRwdK6rj/android-chrome-192x192.png"
                alt="Company logo"
                className="h-10 w-auto sm:h-12"
              />
              <span className="ml-3 text-2xl sm:text-3xl font-bold">
                GurlsLife.com
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-pink-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaXmark className="h-7 w-7" aria-hidden="true" />
              ) : (
                <FaBars className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="text-lg font-semibold text-gray-900"
                target={page.href.startsWith('http') ? '_blank' : '_self'}
              >
                {page.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Menu rendered outside header so it stacks behind */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto p-6">
          <div className="flex flex-col justify-start pt-32 space-y-10 h-full text-2xl items-end text-right px-6">
            {pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="font-semibold text-gray-900 hover:text-gray-600 break-words"
                target={page.href.startsWith('http') ? '_blank' : '_self'}
              >
                {page.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

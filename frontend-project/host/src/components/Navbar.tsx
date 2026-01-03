import './../App.css';
import { Link, useLocation } from 'react-router-dom';
import type { MenuNav } from '../types/MenuNav'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'


const navigation: MenuNav[] = [
  // { name: 'Dashboard', href: '/', current: true },
  { name: 'ARRIVING IN PARIS', href: '/arriving', current: false },
  { name: 'USEFUL ADDRESSES', href: '/addresses', current: false },
  { name: 'PROCEDURES', href: '/procedures', current: false },
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- Navbar ---
export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
               <h1 className="text-xl  text-red-600 tracking-tighter">
                GUIDE<span className="text-gray-900 dark:text-white">PARIS</span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-8 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => {
                  const isCurrent = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      aria-current={isCurrent ? 'page' : undefined}
                      className={classNames(
                        isCurrent 
                          ? 'bg-red-600 text-white' 
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-red-600 dark:hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium transition-colors'
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
          {navigation.map((item) => {
             const isCurrent = location.pathname === item.href;
             return (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                className={classNames(
                  isCurrent 
                    ? 'bg-red-600 text-white' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

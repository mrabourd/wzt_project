import './../App.css';
import { useLocation, Link } from 'react-router-dom';
import type { MenuNav } from '../types/MenuNav';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation: MenuNav[] = [
  { name: 'ARRIVING IN PARIS', href: '/arriving'},
  { name: 'USEFUL ADDRESSES', href: '/addresses'},
  { name: 'PROCEDURES', href: '/procedures'},
];

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

// --- Navbar ---
export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 w-full z-50 bg-gray-800/10 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
                <h1 className="text-xl font-black text-guide-title tracking-tighter">
                  Paris Guide
                </h1>
              </Link>
            </div>

            <div className="hidden sm:ml-6 sm:block">
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
                          ? 'bg-guide-title-700 text-white'
                          : 'text-gray-300/300 hover:bg-white/5 hover:text-gray-400 dark:hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium transition-colors',
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

      <DisclosurePanel className="sm:hidden backdrop-blur-md">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isCurrent = location.pathname === item.href;
            
            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.href}
                aria-current={isCurrent ? 'page' : undefined}
                className={classNames(
                  isCurrent 
                    ? 'bg-guide-title-700 text-white' 
                    : 'text-gray-300/300 hover:bg-white/5 hover:text-gray-400 dark:hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
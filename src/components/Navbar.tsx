import React, { Fragment } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';

interface NavbarProps {
  title: string;
}

let navigation = [
  { name: 'Início', href: '/', current: true },
  { name: 'Sobre', href: '/#sobre', current: false },
  { name: 'Habilidades', href: '/#habilidades', current: false },
  { name: 'Projetos', href: '/#projetos', current: false },
  { name: 'Contato', href: '/#contato', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Navbar({ title }: NavbarProps) {

  return (
    <header className="bg-blue-900 text-white py-4 px-6 fixed w-full shadow-xl z-[100] ease-in-out duration-300">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-semibold">{title}</h1>
        </Link>
        <nav className="hidden md:flex space-x-4">
          {navigation?.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => {
              // change the current value to !current
              navigation = navigation.map((nav) => {
                if (nav.name === item.name) {
                  return { ...nav, current: true };
                }
                return { ...nav, current: false };
              });
            }}>
              <p
                className={classNames(
                  item.current
                    ? 'border-b-2 border-white'
                    : 'text-white hover:border-b-2 hover:border-white',
                  'px-2 py-2 text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </nav>
        <div className="md:hidden flex items-center">
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/2048px-VisualEditor_-_Icon_-_Menu.svg.png" alt="Menu" height={24} width={24} />
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-200"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white text-blue-900 ring-1 ring-black ring-opacity-5 focus:outline-none"
                    static
                  >
                    <div className="py-1">
                      {navigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link href={item.href}>
                              <p
                                className={classNames(
                                  active
                                    ? 'bg-blue-500 text-white'
                                    : 'text-blue-900',
                                    'block px-4 py-2 text-sm'
                                )}
                              >
                                {item.name}
                              </p>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

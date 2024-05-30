import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-md font-semibold text-white hover:bg-gray-50 hover:text-black hover: duration-200">
          Register with us 
          <ChevronDownIcon className="-mr-1 mt-px h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <a
                  href="doctorSignup"
                  className={classNames(
                    focus ? 'bg-gray-100 text-text-white' : 'text-gray-700',
                    'block px-4 py-2 text-md'
                  )}
                >
                  Doctor
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  href="insuranceSignup"
                  className={classNames(
                    focus ? 'bg-gray-100 text-text-white' : 'text-gray-700',
                    'block px-4 py-2 text-md    '
                  )}
                >
                  Insurance Company
                </a>
              )}
            </MenuItem>
        
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}

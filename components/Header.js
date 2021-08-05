import Image from 'next/image';
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/outline';

function Header() {
  return (
    // stay on top and always in front with z-50
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5  md:px-10">
      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="http://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
      </div>

      {/* middle */}
      <div className="flex items-center py-2 rounded-full md:shadow-sm md:border-2">
        <input className="pl-5 bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}

      <div className="flex items-center justify-end space-x-4 text-gray-500 ">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}
// left
export default Header;

'use client';
import React, { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import feather from 'feather-icons';

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState<boolean>(true);

  useEffect(() => {
    setHidden(true);
  }, [pathname]);

  return (
    <nav className="w-full max-w-[1366px] flex flex-wrap mx-auto px-10 py-4 sticky">
      <div className="font-bold text-xl text-slate-700 w-full md:w-1/3 flex items-center">
        <button
          className="block md:hidden"
          onClick={() => setHidden(!hidden)}
          dangerouslySetInnerHTML={{ __html: feather.icons.menu.toSvg() }}
        />
        <Link href="/">
          <p className="text-center md:text-left ml-2 md:ml-0">
            Fahmidyt <span className="text-emerald-500">.</span>
          </p>
        </Link>
      </div>

      <div
        className={`navbar w-full mt-4 md:w-1/4 ml-auto${
          hidden ? ' colapsed' : ''
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center justify-between text-slate-700 font-semibold">
          <li className={`my-2${pathname === '/' ? ' text-emerald-500' : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={`my-2${
              pathname?.includes('about-me') ? ' text-emerald-500' : ''
            }`}
          >
            <Link href="/about-me">About me</Link>
          </li>
          <li
            className={`my-2${
              pathname?.includes('projects') ? ' text-emerald-500' : ''
            }`}
          >
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

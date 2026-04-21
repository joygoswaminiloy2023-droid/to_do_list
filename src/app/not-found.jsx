import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
         <div className="flex h-screen flex-col items-center justify-center bg-black text-cyan-400">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-gray-400">Page not found</p>

      <Link
        href="/"
        className="mt-6 px-4 py-2 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition"
      >
        Go Home
      </Link>
    </div>
    );
};

export default NotFound;
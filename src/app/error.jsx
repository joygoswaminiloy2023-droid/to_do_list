'use client'
import React from 'react';

const error = ({error,reset}) => {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-red-400">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-sm text-gray-400">
          {error?.message || "Unexpected error occurred"}
        </p>

        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 bg-cyan-500 text-black rounded hover:bg-cyan-400"
        >
          Try Again
        </button>
      </div>
    </div>
    );
};

export default error;
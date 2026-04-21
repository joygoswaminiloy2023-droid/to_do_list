import React from 'react';

const loading = () => {
    return (
       <div className="h-screen flex items-center justify-center bg-black">

      {/* Glow background */}
      <div className="relative flex flex-col items-center">

        {/* Outer glow ring */}
        <div className="absolute w-24 h-24 rounded-full bg-cyan-500/20 blur-2xl animate-pulse"></div>

        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin"></div>

        {/* Text */}
        <p className="mt-4 text-sm tracking-widest text-cyan-400">
          Loading tasks...
        </p>

      </div>
    </div>
    );
};

export default loading;
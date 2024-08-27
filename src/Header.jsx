import React from "react";

const Header = () => {
  return (
    <div className="w-full h-screen flex items-center justify-between px-4 md:px-8">
    <div className="text-2xl sm:text-3xl font-medium font-sans">Caffee 360</div>
    <div className="w-16 sm:w-20 rounded-full">
      <img
        alt="Tailwind CSS Navbar component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        className="object-cover rounded-full"
      />
    </div>
  </div>
  );
};

export default Header;

import React from "react";

function NavBar() {
  return (
    <div className="bg-slate-600 h-14 flex justify-between items-center shadow-lg">
      <img
        className="w-10 mx-6 shadow-2xl"
        src="https://cdn-icons-png.flaticon.com/128/10446/10446694.png"
      />
      <h1 className=" p-2 mx-4 font-extrabold text-xl tracking-[5px] text-white">
        CHITRAM
      </h1>
    </div>
  );
}

export default NavBar;

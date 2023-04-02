import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[70px] w-auto border-b border-gray-300 py-2 px-8 items-center justify-center">
      <div className="text-3xl font-serif flex items-center">
        Chatbot Hub 
      </div>
      {/* <div className="ml-60">Create your own</div> */}
    </div>
  );
};
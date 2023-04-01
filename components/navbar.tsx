import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <div className="flex h-[60px] w-auto border-b border-gray-300 py-2 px-8 items-center justify-center">
      <div className="font-bold text-2xl flex items-center">
        Chatbot Hub 
      </div>
    </div>
  );
};

import { FC } from "react";
import {FaGithub} from 'react-icons/fa'

export const Footer: FC = () => {
  return (
    <div className="flex h-[50px] border-t border-gray-300 py-2 px-8 items-center sm:justify-between justify-center">
      <div className="hidden sm:flex"></div>

      <div className="hidden sm:flex italic text-sm">
        Created by   
        <a
          className="flex px-2 items-center hover:opacity-50"
          href="https://github.com/leykun10"
          target="_blank"
          rel="noreferrer"
        >  Leykun Ejigu
        
        </a>
       

       
        .
      </div>

      <div className="flex space-x-4">
       
        <a
          className="flex items-center hover:opacity-50"
          href="https://github.com/leykun10"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
  );
};
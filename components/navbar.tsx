import { FC } from "react";
import Modal from "./submitModal";

export const Navbar: FC = () => {
  return (
    <div className="flex gap-x-96 flex-col lg:flex-row lg:ml-80 items-center">
      <div className="flex gap-2 flex-2 flex-row text-4xl font-serif items-center">
        <img src="/cool_logo_pr.png" width={80} height={80}></img>
        <a className="text-emerald-500" href="/">
        Chatbot Hub 
        </a>
      </div>
      <div className="flex flex-row items-center gap-8 ">
      {/* <div className="flex hover:underline text-center"><a href="/about">About</a></div> */}
      <div className="flex hover:underline text-center hover:text-emerald-400 "><a href="/blog">Blog</a></div>
      <div className="flex hover:underline text-center hover:text-emerald-400"><a href="/chatbot">Create your own chatbot</a></div>
      <div className="flex">
        <Modal/>
      </div>
      </div>
   </div>
  );
};
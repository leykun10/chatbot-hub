'use client'
import React, { useState } from "react";

export default function Modal() {
  const [showModal, setShowModal] = useState(false)
  const [text, setText] = useState("")

  const handleTextChange = (e:any) => { 
    setText(e.target.value)
    }


  const handleSubmit = async () => {    
    // check for url with regex
    if(text.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/)){
        console.log("matched")
        const res = await fetch("/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: text
            })
        })
        if (res.ok && res.status === 200) {

     setShowModal(false) 
     alert("Thank you for submitting your chatbot! We will review it and add it to the site if it meets our requirements.")
        }

        else{
            setShowModal(false)
            alert('Something went wrong. Please try again later.')
        }
    }          
  else{
    alert("Please enter a valid url")}}
  return (
    <>
      <button
        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Submit a chatbot
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-row items-start justify-start p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Submit a Chatbot
                  </h3>
                  <div className="flex rounded-full pl-10">
                      <button
                    className="p-1 ml-auto bg-transparent border-0 text-red-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-600 h-6 w-6 text-4xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
 
                  </div>
               </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <label className="block mb-2 mt-6 text-sm font-medium text-gray-900 dark:text-white" htmlFor="text_input">Chatbot URL</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" aria-describedby="text_input_help" id="text_input" type="text" placeholder="example.com" onChange={handleTextChange}/>

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSubmit()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
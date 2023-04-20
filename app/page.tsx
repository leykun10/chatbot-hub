import Main from "@/components/main";
import Sidebar from "@/components/sidebar";
import { supabase } from "@/utils/superbase";

import
 { Analytics } 
from
 
'@vercel/analytics/react'
;

import Script from "next/script";
export const revalidate = 60; // revalidate this page every 60 seconds
export default async function Home() {

  const {data,error} = await supabase.from('chatbot').select('*')
  
  return (
    <>
        <div className="flex flex-col lg:flex-row w-screen lg:ml-80 mb-10 mt-8">
               {/* <!-- Google tag (gtag.js) --> */}
{/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}!);
        `}
      </Script> */}

           {/* @ts-expect-error Server Component */}
          <Sidebar/>
          {error!=null?<div></div>:
         <Main  data={data}/>}
         <Analytics/>
        </div>
        </>
  );
}

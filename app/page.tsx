import {  redirect } from 'next/navigation';
import { Analytics } from "@vercel/analytics/react";

export default async function Home() {
    return (
      <>
        {/* {process.env.NODE_ENV === "production" && <Analytics />} */}
       <Analytics />
        {redirect("/home")}
      </>
    );
}

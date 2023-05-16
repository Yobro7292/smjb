import MasterContainer from "@/Container/MasterContainer";
import HomePage from "@/pages/HomePage/Index";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <MasterContainer>
        <HomePage />
      </MasterContainer>
      {process.env.NODE_ENV === "production" && <Analytics />}
    </>
  );
}

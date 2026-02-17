import LandingPage from "@/components/landing-page";
import { SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <SignedOut>
    <LandingPage/>
    </SignedOut>
  );
}

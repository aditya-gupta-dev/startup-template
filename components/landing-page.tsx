'use client';

import Silk from "@/components/Silk";
import StaggeredMenu from "./staggered-menu";
import React from "react";
import { ChefHat, icons } from "lucide-react";
import GradientText from "./gradient-text";
import { SignedOut } from "@clerk/nextjs";

export function Background({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      <div style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
      }}>
        <Silk
          speed={11.4}
          scale={1}
          color={"#746481"}
          noiseIntensity={1.4}
          rotation={0}
        />
      </div>
      <main
        style={{
          position: "absolute",
          zIndex: 10,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </main>
    </>
  )
}

export default function LandingPage() {
  return (
    <>
      <Background>
        <StaggeredMenu
          isFixed={true}
          position="left"
          items={[{ label: "Pricing", ariaLabel: "pricing-section", link: "/pricing" }]}
          socialItems={[]}
          displaySocials={false}
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF']}
          logoUrl={""}
          accentColor="#5227FF"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />

        <GradientText
          colors={["#000000", "#ffffff"]}
          animationSpeed={8}
          showBorder={false}
          className="text-5xl mt-24"
        >
          Add a splash of color!
        </GradientText>
      </Background>
    </>
  );
}

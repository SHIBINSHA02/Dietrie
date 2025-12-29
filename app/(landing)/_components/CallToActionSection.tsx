"use client";

import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

function CallToActionSection() {
  return (
    <div className="@container">
      <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-[#0e1b0e] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] ">
            Ready to Transform Your Health?
          </h1>

          <p className="text-[#0e1b0e] text-base font-normal leading-normal">
            Join NutriTrack today and embark on a journey to a healthier, happier you.
          </p>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex justify-center">

            {/* ---------- NOT LOGGED IN ---------- */}
            <SignedOut>
              <SignInButton mode="modal">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#14b714] text-[#f8fcf8] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                  <span className="truncate">Get Started</span>
                </button>
              </SignInButton>
            </SignedOut>

            {/* ---------- LOGGED IN ---------- */}
            <SignedIn>
              <Link href="/dashboard">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#14b714] text-[#f8fcf8] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                  <span className="truncate">Go to Dashboard</span>
                </button>
              </Link>
            </SignedIn>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToActionSection;

import React from 'react'
import HeroSection from "@/components/HeroSection";
import Transition from "@/components/Effect/Transition";

const Page = () => {
    return (
        <Transition>
            <main className="w-full bg-slate-200">
                <HeroSection/>
            </main>
        </Transition>

    )
}
export default Page

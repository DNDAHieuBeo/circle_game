import React from 'react'
import Transition from "@/components/Effect/Transition";
import ContactForm from "@/components/ContactForm";
import {TypingEffect} from "@/components/Effect/typing-effect";
const Page = () => {
    return (
        <Transition>
            <section className='w-full bg-slate-200 min-h-screen flex flex-col items-center justify-center '>

                    <div className='text-center py-8'>
                        <TypingEffect text={'Contact me'}/>
                        <p className='text-black'>You can send me any thing you want</p>
                    </div>
                    <div className='bg-black px-4 py-2 md:w-full'>
                        <ContactForm/>
                    </div>


            </section>
        </Transition>
    )
}
export default Page

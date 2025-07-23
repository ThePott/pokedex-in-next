"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const NotFoundPage = () => {
    const [isMouseOver, setIsMouseOver] = useState(false)

    return (
        <div className='w-screen h-screen flex justify-center items-center'>

            <Link className="hover:bg-zinc-950 transition w-[600px] h-[600px]  bg-zinc-800 flex flex-col justify-center items-center gap-6"
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
                href="/">
                <h1 className="text-6xl font-black">Page Not Found</h1>
                <p className={`transition text-4xl font-black opacity-30 ${isMouseOver && "opacity-60"}`}>go back to home</p>
            </Link>

        </div>
    )
}

export default NotFoundPage
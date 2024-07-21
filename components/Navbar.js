'use client'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const scrollTo = (id) => {
        toggleMenu()
        const element = document.getElementById(id)
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center ">
                        <Link href="/" className="text-xl font-bold text-[#B8A2E0] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-200">
                            REOK
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {['About', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item.toLowerCase())}
                                    className="text-gray-800 hover:bg-[#B8A2E0] px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-200"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-[#B8A2E0] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {['About', 'Projects', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item.toLowerCase())}
                                className="text-gray-800 hover:bg-[#B8A2E0] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}
export default Navbar;
import Image from 'next/image'

const Header = () => {
    return (
        <header id="header" className="flex items-center justify-center min-h-screen px-4 md:px-20">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Rachael Oldham-Knott</h1>
                    <p className="text-xl md:text-2xl text-[#B8A2E0]">Front-End Web Developer</p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/reok-logo.png"
                        alt="Profile"
                        width={600}
                        height={600}
                        className="w-[150px] h-[150px] md:w-[500px] md:h-[500px] rounded-full object-cover"
                    />
                </div>
            </div>
        </header>
    )
}
export default Header;
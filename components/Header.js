import Image from 'next/image'

const Header = () => {
    return (
        <header id="header" className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
            <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Rachael Oldham-Knott</h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">Web Developer</p>
                <Image
                    src="/reok-logo.png"
                    alt="Profile"
                    width={600}
                    height={600}
                    className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full object-cover mx-auto"
                />
            </div>
        </header>
    )
}
export default Header;
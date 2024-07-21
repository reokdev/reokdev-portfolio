const Contact = () => {
    return (
        <section id="contact" className="py-20 px-4 md:px-20 min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-3xl text-[#B8A2E0] font-bold mb-8">Contact Me</h2>
                <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
                    <iframe
                        src="https://ifh5bsobtfo.typeform.com/to/TPiPAf0W"
                        allowFullScreen
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
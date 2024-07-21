'use client';

import { useInView } from '@/hooks/useInView';
import { motion } from 'framer-motion';

const Contact = () => {
    const [ref, inView] = useInView();

    return (
        <section id="contact" className="py-20 px-4 md:px-20 min-h-screen flex flex-col justify-center items-center">
            <div className="w-full max-w-4xl" ref={ref}>
                <h2 className="text-3xl text-[#B8A2E0] font-bold mb-8">Contact Me</h2>
                {inView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
                    >
                        <iframe
                            src="https://ifh5bsobtfo.typeform.com/to/TPiPAf0W#disable-auto-focus=1"
                            style={{
                                width: '100%',
                                height: '100%',
                                border: 'none',
                            }}
                        ></iframe>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Contact;
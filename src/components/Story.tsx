"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Protagonist {
    name: string;
    description: string;
    image: string;
}

const protagonists: Protagonist[] = [
    {
        name: "Marlene Strege",
        description:
            "A determined mom pioneers the first embryo adoption as the US debates stem cell research.",
        image: "/frozen-orphans-demo/assets/images/protagonists/marlene-strege.jpg",
    },
    {
        name: "Kirsten Upadhye",
        description:
            "A foster mom struggling with infertility navigates the hope and heartbreak of adoption.",
        image: "/frozen-orphans-demo/assets/images/protagonists/kirsten-upadhye.jpg",
    },
    {
        name: "Ericka Andersen",
        description:
            "An IVF mom now warns against it as she seeks life-affirming choices for her remaining embryos.",
        image: "/frozen-orphans-demo/assets/images/protagonists/ericka-andersen.png",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
    },
};

export default function Story() {
    return (
        <section id="story" className="py-24 md:py-32 bg-[#0A0A0A]">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        The Story
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Meet the three women at the heart of this documentary
                    </p>
                </motion.div>

                {/* Protagonists Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                >
                    {protagonists.map((protagonist) => (
                        <motion.div
                            key={protagonist.name}
                            variants={itemVariants}
                            className="group text-center"
                        >
                            {/* Circle Portrait */}
                            <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto mb-6 rounded-full overflow-hidden bg-slate transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src={protagonist.image}
                                    alt={protagonist.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                                {protagonist.name}
                            </h3>

                            {/* Description */}
                            <p className="text-white/60 leading-relaxed max-w-xs mx-auto">
                                {protagonist.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

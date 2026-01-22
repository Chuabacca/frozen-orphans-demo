"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Emma Waters",
        role: "Policy Analyst | Heritage Foundation",
        image: "/frozen-orphans-demo/assets/images/team/emma-waters.jpg",
    },
    {
        name: "Al Mohler",
        role: "President | Southern Baptist Theological Seminary",
        image: "/frozen-orphans-demo/assets/images/team/al-mohler.png",
    },
    {
        name: "Katy Faust",
        role: "Founder | Them Before Us",
        image: "/frozen-orphans-demo/assets/images/team/katy-faust.png",
    },
    {
        name: "Dan Nehrbass",
        role: "President | Nightlight Christian Adoptions",
        image: "/frozen-orphans-demo/assets/images/team/dan-nehrbass.png",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as [number, number, number, number] },
    },
};

export default function Team() {
    return (
        <section id="team" className="py-24 md:py-32 bg-[#1A1A1A]">
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
                        The Team
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        The voices and experts behind this documentary
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={itemVariants}
                            className="text-center"
                        >
                            {/* Headshot */}
                            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-4 rounded-full overflow-hidden bg-slate">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h4 className="text-lg font-semibold text-white mb-1">
                                {member.name}
                            </h4>

                            {/* Role */}
                            <p className="text-sm text-white/50 leading-relaxed">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

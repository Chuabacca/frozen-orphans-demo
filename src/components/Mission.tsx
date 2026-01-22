"use client";

import { motion } from "framer-motion";
import { Users, Stethoscope, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MissionGoal {
    title: string;
    description: string;
    icon: LucideIcon;
}

const missionGoals: MissionGoal[] = [
    {
        title: "IVF Families",
        description:
            "Help families navigate IVF with a biblical, life-affirming ethic.",
        icon: Users,
    },
    {
        title: "Adoptive Families",
        description:
            "Turn hopeful parents toward adoption, including embryo adoption.",
        icon: Stethoscope,
    },
    {
        title: "Impact Culture",
        description: "Promote pro-family policies via an educated citizenry.",
        icon: Megaphone,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
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

export default function Mission() {
    return (
        <section id="mission" className="py-24 md:py-32 bg-[#1A1A1A]">
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
                        Our Mission
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        Changing hearts and minds through powerful storytelling
                    </p>
                </motion.div>

                {/* Goals Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12"
                >
                    {missionGoals.map((goal) => (
                        <motion.div
                            key={goal.title}
                            variants={itemVariants}
                            className="text-center p-6 rounded-2xl bg-[#0A0A0A]/50 border border-white/5 hover:border-brand/30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand/10 flex items-center justify-center">
                                <goal.icon className="w-8 h-8 text-brand" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {goal.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/60 leading-relaxed">
                                {goal.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center"
                >
                    <a
                        href="https://givebutter.com/9TjGEz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 border-2 border-brand text-brand rounded-full font-semibold text-lg hover:bg-brand hover:text-[#0A0A0A] transition-all duration-300 hover:scale-105"
                    >
                        Support Our Mission
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

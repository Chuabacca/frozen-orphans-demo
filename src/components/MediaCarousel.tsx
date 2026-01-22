"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// Placeholder images - replace with actual carousel images
const carouselImages = [
    { src: "/assets/images/carousel/project-1-1.jpg", alt: "Behind the scenes 1" },
    { src: "/assets/images/carousel/project-1-2.jpg", alt: "Behind the scenes 2" },
    { src: "/assets/images/carousel/project-1-3.jpg", alt: "Behind the scenes 3" },
    { src: "/assets/images/carousel/project-1-4.jpg", alt: "Behind the scenes 4" },
    { src: "/assets/images/carousel/project-1-5.jpg", alt: "Behind the scenes 5" },
];

export default function MediaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section id="media" className="py-24 md:py-32 bg-[#0A0A0A]">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Behind the Scenes
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        A glimpse into the making of this documentary
                    </p>
                </motion.div>
            </div>

            {/* Carousel */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {carouselImages.map((image, index) => (
                            <div
                                key={index}
                                className="flex-none w-[85%] sm:w-[70%] md:w-[50%] lg:w-[40%] pl-4"
                            >
                                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand hover:text-[#0A0A0A] transition-all duration-200 disabled:opacity-50"
                    disabled={!canScrollPrev}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-brand hover:text-[#0A0A0A] transition-all duration-200 disabled:opacity-50"
                    disabled={!canScrollNext}
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${index === selectedIndex
                                ? "bg-brand w-8"
                                : "bg-white/30 hover:bg-white/50"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

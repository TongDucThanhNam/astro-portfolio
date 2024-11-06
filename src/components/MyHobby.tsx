import React from "react";
import {Card, Carousel} from "@/components/ui/apple-cards-carousel";
import {appleCardData} from "@/config/site";

export function AppleCardsCarouselDemo() {
    const cards = appleCardData.map((card, index) => (
        <Card key={card.src} card={card} index={index}/>
    ));

    return (
        <div className="w-full h-full py-20">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Các sở thích của tớ
            </h2>
            <Carousel items={cards}/>
        </div>
    );
}
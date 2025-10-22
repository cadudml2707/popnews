import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"

import Olivia from "../../assets/images/olivia.png"
import Sabrina from "../../assets/images/sabrina_album.png"
import Taylor from "../../assets/images/taylor_album.png"

export default function CarouselComponent() {
    return (
        // O componente <Carousel> já é 'position: relative' por padrão,
        // o que permite que os botões sejam posicionados em cima dele.
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                })
            ]}
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent>
                <CarouselItem className="flex justify-center items-center basis-1/3">
                    <img src={Olivia} alt="Olivia" />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center basis-1/3">
                    <img src={Sabrina} alt="Sabrina" />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center basis-1/3">
                    <img src={Taylor} alt="Taylor" />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center basis-1/3">
                    <img src={Olivia} alt="Olivia" />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center basis-1/3">
                    <img src={Sabrina} alt="Sabrina" />
                </CarouselItem>
                <CarouselItem className="flex justify-center items-center basis-1/3">
                    <img src={Taylor} alt="Taylor" />
                </CarouselItem>
            </CarouselContent>
            
            <CarouselPrevious 
                className="
                    left-4 
                    text-gray-900 
                    bg-white/70 
                    hover:bg-white
                    cursor-pointer
                    border-none
                " 
            />
            
            <CarouselNext 
                className="
                    right-4 
                    text-gray-900 
                    bg-white/70 
                    hover:bg-white
                    cursor-pointer
                    border-none
                " 
            />
        </Carousel>
    )
}
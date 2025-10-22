import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardMenuProps {
    title: string;
    image: any;
    type: number;
}

export default function CardMenu({ title, image, type }: CardMenuProps) {
    return (
    //     <div className={`flex-col justify-center items-center hover:scale-105 transition text-gray-600 shadow-md hover:shadow-xl cursor-pointer w-full justify-center rounded-lg 
    //  items-center bg-white ${type === 1 ? 'hover:text-yellow-500' : type === 2 ? 'hover:text-purple-500' : type === 3 ? 'hover:text-red-500' : 'hover:text-pink-500'}`}>
    //         <header>
    //             <img src={image} alt={title} className="rounded-sm border" />
    //         </header>
    //         <main>
    //             <span className="border">{title}</span>
    //         </main>
    //     </div>
        <Card className={`hover:scale-105 transition text-gray-600 border-1 border-red-500 shadow-md hover:shadow-xl border-none cursor-pointer w-full justify-center p-0
            items-center bg-white hover:text-white ${type === 1 ? 'hover:bg-yellow-500' : type === 2 ? 'hover:bg-purple-500' : type === 3 ? 'hover:bg-red-500' : 'hover:bg-pink-500'}`}>
            <CardContent className="flex-col gap-2 p-0">
                <header className="self-start">
                    <img src={image} alt={title} className="rounded-t-lg" />
                </header>
                <CardTitle className="text-lg my-2 font-bold">{title}</CardTitle>
            </CardContent>
        </Card>
    )
} 
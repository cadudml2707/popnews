import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/Sidebar/index";
import NewPostModal from "@/components/New Post Modal/index";
import CardMenu from "@/components/Card"
import { Input } from "@/components/ui/input";
import CalendarComponent from "@/components/Calendar/index"

import Olivia from "@/assets/images/olivia.png"
import Sabrina from "@/assets/images/sabrina_album.png"
import Taylor from "@/assets/images/taylor_album.png"

export default function Posts() {
    return (
        <SidebarProvider className="flex text-white ">
            <Sidebar />
            <div className="flex-col justify-center items-center text-center py-10 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_2px)] [background-size:24px_24px]">
                <main className="flex-col max-w-7xl mx-auto px-6">
                    <h2 className="flex-start text-gray-700 font-bold text-2xl">Meus Posts</h2>
                    <div className="flex justify-center items-center gap-5 border border-red-700">
                        <div className="flex flex-col gap-2 w-full mt-5 text-gray-700">
                            <label>Título</label>
                            <Input
                                className="border-none w-full p-6 bg-gray-100 text-gray-900"
                                placeholder="Informe seu Email"
                            />
                        </div>
                        <div className="flex flex-col gap-2 w-full mt-5 text-gray-700">
                            <CalendarComponent label="Data de Postagem" placeholder="Informe a data" />
                        </div>
                        <NewPostModal />
                    </div>
                    <div className="grid grid-cols-3 justify-center gap-5 py-5">
                        <CardMenu
                            title="NOVO ALBUM DE TAYLOR"
                            image={Taylor}
                            type={1} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={2} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={2} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Taylor}
                            type={3} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={1} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={3} />
                        <CardMenu
                            title="NOVO ALBUM DE TAYLOR"
                            image={Taylor}
                            type={1} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={2} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={2} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Taylor}
                            type={3} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={1} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={3} />
                    </div>
                </main>
            </div>
        </SidebarProvider>
    )
}
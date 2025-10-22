import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/Sidebar/index";
import NewPostModal from "@/components/New Post Modal/index";
import CardMenu from "@/components/Card"

import Olivia from "@/assets/images/olivia.png"
import Sabrina from "@/assets/images/sabrina_album.png"
import Taylor from "@/assets/images/taylor_album.png"
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export default function Posts() {
    return (
        <SidebarProvider className="flex text-white ">
            <Sidebar />
            <div className="flex-col justify-center items-center text-center py-10 w-full">
                <main className="flex-col max-w-7xl mx-auto px-6">
                    <h2 className="flex-start text-gray-700 font-bold text-xl">Meus Posts</h2>
                    <div className="flex justify-between">
                        <div className="grid w-full max-w-sm items-center gap-3">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" />
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
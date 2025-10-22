import Layout from "@/components/Layout"
import CarouselComponent from "@/components/Carousel"
import CardMenu from "@/components/Card"

import Olivia from "@/assets/images/olivia.png"
import Sabrina from "@/assets/images/sabrina_album.png"
import Taylor from "@/assets/images/taylor_album.png"

export default function Menu() {
    return (
        <Layout>
            <div className="flex-col justify-center items-center text-center ">
                <CarouselComponent />
                <main className="flex-col max-w-7xl mx-auto px-6 pb-10">
                    <h2 className="font-bold text-gray-600 text-2xl mt-10">ENTRETENIMENTO</h2>
                    <div className="grid grid-cols-3 justify-center gap-5 py-5">
                        <CardMenu
                            title="NOVO ALBUM DE TAYLOR"
                            image={Taylor}
                            type={1} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={1} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={1} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Taylor}
                            type={1} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={1} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={1} />
                    </div>
                    <h2 className="font-bold text-gray-600 text-2xl mt-10">MÚSICA</h2>
                    <div className="grid grid-cols-3 justify-center gap-5 py-5">
                        <CardMenu
                            title="Taylor Swift lança com Novo Álbum!"
                            image={Taylor}
                            type={2} />
                        <CardMenu
                            title="Rumores de OR3!"
                            image={Olivia}
                            type={2} />
                        <CardMenu
                            title="Man's best Friend está no Ar!"
                            image={Sabrina}
                            type={2} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Taylor}
                            type={2} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={2} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={2} />
                    </div>
                    <h2 className="font-bold text-gray-600 text-2xl mt-10">NOTÍCIAS</h2>
                    <div className="grid grid-cols-3 justify-center gap-5 py-5">
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Taylor}
                            type={3} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={3} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={3} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Taylor}
                            type={3} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={3} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={3} />
                    </div>
                    <h2 className="font-bold text-gray-600 text-2xl mt-10">SÉRIES E CINEMA</h2>
                    <div className="grid grid-cols-3 justify-center gap-5 py-5">
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Taylor}
                            type={4} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={4} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={4} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Taylor}
                            type={4} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Olivia}
                            type={4} />
                        <CardMenu
                            title="Novo album de Taylor Swift"
                            image={Sabrina}
                            type={4} />
                    </div>
                </main>
            </div>
        </Layout>
    )
}

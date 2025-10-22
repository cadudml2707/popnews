import Logo from '@/assets/images/popnews.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-10 p-8">
                <div className="flex flex-col sm:flex-row justify-center gap-8 lg:w-8/12">
                    <div className="flex-shrink-0">
                        <img src={Logo} alt="Logo" className='h-24 w-24' />
                    </div>
                    <div className="flex flex-col gap-3 lg:w-7/12 md:w-9/12">
                        <h3 className='border-b-2 border-cyan-500 pb-3 w-fit whitespace-nowrap'>
                            Sobre 
                        </h3>
                        <p className='text-justify text-sm'>
                            O PopNews é a sua fonte diária de notícias sobre o universo pop. Cobrimos os principais lançamentos da música, 
                            as novidades do entretenimento, e as estreias mais aguardadas de séries e cinema. Nossa missão é manter você conectado 
                            com seus artistas e tendências favoritas, com agilidade e credibilidade.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 lg:w-auto">
                    <h3 className='border-b-2 border-cyan-500 pb-3 w-fit'>
                        Siga-nos
                    </h3>
                    <div className="flex items-center gap-5">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                            <FaYoutube size={24} />
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-center p-5 bg-gray-700 text-cyan-50 border-t border-gray-600">
                <p className="mr-3 text-sm">© {new Date().getFullYear()} PopNews </p>
            </div>

        </footer>
    );
}
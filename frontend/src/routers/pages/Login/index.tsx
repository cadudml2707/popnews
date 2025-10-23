import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import LoginImage from "@//assets/images/popnews-azul.png"
import useLogin from "./useLogin"

export default function Login() {
    const { handleLogar } = useLogin();
    
    return (
        <div className="flex justify-center items-center bg-linear-to-r from-cyan-500 to-blue-500 h-screen">
            <div className="flex flex-row bg-white p-14 rounded-lg shadow-lg gap-12">
                <div className="flex flex-col justify-center items-center gap-4">
                    <img
                        src={LoginImage}
                        alt="Login"
                        className="w-50 h-50"
                    />
                    <h1 className="font-bold text-3xl text-center">Bem-vindo(a)!</h1>
                    <div className="flex flex-col gap-2 w-full mt-5">
                        <label>Email</label>
                        <Input
                            className="border-none w-full p-6 bg-gray-100 text-gray-900"
                            placeholder="Informe seu Email"
                        />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label>Senha</label>
                        <Input
                            className="border-none w-full p-6 bg-gray-100 text-gray-900"
                            placeholder="Informe sua Senha"
                            type="password"
                        />
                    </div>
                    <Button
                        className="bg-green-500 hover:bg-green-600 cursor-pointer text-white font-bold p-6 w-[300px] mt-5"
                        onClick={() => handleLogar()}
                    >Entrar</Button>
                </div>
            </div>
        </div>
    )
}
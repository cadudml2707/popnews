import { useNavigate } from "react-router-dom"

export default function useLogin() {
    const navigation = useNavigate();

    function handleLogar() {
        //TODO: ADICIONAR VALIDAÇAO DE LOGIN
        navigation('/posts');
    }

    return {handleLogar}
}
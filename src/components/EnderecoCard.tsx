import { IEnderecoDTO } from "../Interfaces/IEnderecoDTO"

interface EnderecoCardProps{
    endereco:IEnderecoDTO | undefined
}
export function EnderecoCard({endereco}:EnderecoCardProps) {
    return (

        <div className="flex flex-col w-96 p-4">
            <h1>CEP: {endereco?.cep}</h1>
            <h1>LOCALICADE: {endereco?.localidade}</h1>
            <h1>BAIRRO: {endereco?.bairro}</h1>
            <h1>COMPLEMENTO: {endereco?.complemento}</h1>
            <h1>DDD: {endereco?.ddd}</h1>
            <h1>UF: {endereco?.uf}</h1>

        </div>
    )
}
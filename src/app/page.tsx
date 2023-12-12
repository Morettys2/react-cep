"use client";
import axios from 'axios';
import { useState} from 'react';
import { IEnderecoDTO } from '../Interfaces/IEnderecoDTO';
import { EnderecoCard } from '../components/EnderecoCard';



export default function Home() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<IEnderecoDTO>();

  const handlePesquisar = async () => {
    const response = await axios.get<IEnderecoDTO>(`https://viacep.com.br/ws/${cep}/json/`,{
      headers:{
        "Content-Type":'application/json;charset=utf-8',
         'Access-Control-Allow-Origin':'*'
      }
    })
    setEndereco(response.data)
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <title>Cep</title>

      <div>
        <h1 className="text-2xl font-bold mb-4">Pesquisa de CEP</h1>
        <input
          type="text"
          placeholder="Digite o CEP"
          className="border p-2 rounded mr-2"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePesquisar}
        >
          Pesquisar
        </button>
      </div>
      
      <EnderecoCard endereco={endereco}>

      </EnderecoCard>
      
      
    </div>
  );
}

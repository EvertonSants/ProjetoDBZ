

import ConexaoBD from "@/app/libs/conexao-bd";
import "@/app/styles/create-pokemon.css";
import { PokemonProps } from "@/app/ui/pokemon-card";
import { redirect } from "next/navigation";

const arquivo = 'pokemon-db.json';

export default function CreatePokemon(){
    
    const addPokemon = async (formData: FormData) => {
        "use server";

        const novoPokemon : PokemonProps = {
            id: crypto.randomUUID(),
            nome: formData.get('nome') as string,
            descricao : formData.get('descricao') as string,
            img : formData.get('img') as string
        }

        const pokemonDb = await ConexaoBD.retornaBD(arquivo);
        pokemonDb.push(novoPokemon);
        await ConexaoBD.armazenaBD(arquivo,pokemonDb);
        redirect('/dashboard');
    }


    return(
        <section className="create-pokemon-container">
            <h2>Inserir Novo Personagem</h2>
            <form action={addPokemon} className="create-pokemon-form">
                <section className="pokemon-input">
                    <input type="text"
                        id="nome"
                        name="nome" 
                        placeholder="Nome do Personagem"
                        aria-label="Nome do Personagem"
                        />
                </section>
                <section className="pokemon-input">
                    <input type="text"
                        id="descricao"
                        name="descricao" 
                        placeholder="Descrição do Personagem"
                        aria-label="Descrição do Personagem"
                        />
                </section>
                <section className="pokemon-input">
                    <input type="text"
                        id="img"
                        name="img" 
                        placeholder="Link com Imagem do Personagem"
                        aria-label="Link com Imagem do Personagem"
                        />
                </section>
                <button>Adicionar</button>
            </form>
        </section>
    );

}
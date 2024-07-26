import { Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardPlayer } from "../../components/ViewPlayers/cardPlayer";

export function ViewPlayers (){
    const [players, setPlayers] = useState([]);
    const [filterName, setFilterName]= useState("");

    useEffect(() => {
        fetchPlayers();
    }, [])

    const fetchPlayers = async () => {
        try {
            const req = await axios.get('http://localhost:5000/api/players')

            const players = req.data;
            setPlayers(players)
            console.log("Jogadores: ", players);
        } catch (error) {
            console.log("Erro ao buscar jogadores: ", error);
            
        }
    };

    const filtroNomeJogador = (e) => {
        setFilterName(e.target.value);
    }

    return(
        <>
        <Flex pl='7rem' mt='2rem' w='90%'>
                <Input
                    className="bg-slate-300"
                    pr='4.5rem'
                    type="text"
                    placeholder='Pesquisar...'
                    color='black'
                    value={filterName}
                    onChange={filtroNomeJogador}
                />
        </Flex>
        <Flex wrap='wrap' px='6rem' mt='2rem'>
                {players.length > 0 ? (
                    players
                    .filter(players => {
                        if (typeof players.name === 'string' && typeof filterName === 'string') {
                            return players.name.toLowerCase().includes(filterName.toLowerCase());
                        }
                        return false; // ou outra ação adequada se algum deles não for uma string válida
                    })
                    .map((players, index) => (
                        <CardPlayer key={index} players={players} />
                    ))
                    ) : (
                        <p>Nenhum jogador encontrado</p>
                    )}
            </Flex>
        </>
    )
}
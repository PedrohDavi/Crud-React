import { Card, CardBody, Stack, Text } from "@chakra-ui/react";

export function CardPlayer({players}){
    console.log("Jogador recebido: ", players);

    return(
        <Card
            w='20rem'
            mx='1rem'
            mb='2rem'
            color='black'
            bg='#DAA520'>
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Text fontWeight='bold'>{players.name}</Text>
                    <Text fontWeight='bold'> OverAll: {players.strength}</Text>
                    <Text fontWeight='bold'>Lado: {players.side}</Text>
                    <Text fontWeight='bold'>Idade: {players.age} anos</Text>
                    <Text fontWeight='bold'>Clube: {players.team}</Text>
                </Stack>
            </CardBody>
            </Card>

    );
    
}
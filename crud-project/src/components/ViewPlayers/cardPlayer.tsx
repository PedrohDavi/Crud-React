import { Card, CardBody, Center, Stack, Text } from "@chakra-ui/react";

export function CardPlayer({players}){
    console.log("Jogador recebido: ", players);

    return(
        <Card
            w='13rem'
            mx='2rem'
            mb='2rem'
            color='black'
            bg ='linear-gradient(to top, #ffffcc 30%, #ffcc00 100%)'>
            <CardBody>
                <Center>
                <Stack mt='6' spacing='3'>
                    <Text fontWeight='bold'>{players.name}</Text>
                    <Text fontWeight='bold'>OverAll: {players.strength}</Text>
                    <Text fontWeight='bold'>Lado: {players.side}</Text>
                    <Text fontWeight='bold'>Idade: {players.age} anos</Text>
                    <Text fontWeight='bold'>Clube: {players.team}</Text>
                </Stack>
                </Center>
            </CardBody>
            </Card>

    );
    
}
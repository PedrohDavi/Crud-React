import { Flex } from "@chakra-ui/react";
import { BtnNavbar } from "./BtnsNavbar";

export function Navbar() {
    return (
        <>
            <Flex
                w='100%'
                h='6rem'
                color='black'
                bgImg="url('\src\assets')"
                backgroundPosition="center"
                boxShadow='0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
            >
                <BtnNavbar nome='Home' direcionar='/' />
                <BtnNavbar nome='Cadastrar Jogador' direcionar='/createPlayer' />
            </Flex>
            
        </>
    )
}
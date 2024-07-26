import React, { ChangeEvent, FormEvent, useState } from "react";

import axios from 'axios';
import { Button, Center, Checkbox, Heading, Input, Select, Stack } from '@chakra-ui/react'

interface FormData {
  name: string;
  age: string;
  position: string;
  strength: string;
  team: string;
  side: string;
  star: boolean;
}

function CreatePlayer() {
  const [formData, setFormData] = useState<FormData>({ name: '', age: '', position: '', strength: '', team: '', side: '', star: false });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const numericData = {
      ...formData,
      age: formData.age ? parseFloat(formData.age) : undefined,
      strength: formData.strength ? parseFloat(formData.strength) : undefined,
    };
    axios.post('http://localhost:5000/api/addPlayers', numericData)
      .then(response => {
        console.log('Item created:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the item!', error);
      });
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
      <Center mt={'4rem'}>
        <Center flexDir={'column'} p={"2rem"} gap={'0.7rem'} width={'50%'} bg={'#FCE567'} borderRadius={'0.625rem'} margin={'auto'}>
          <Heading as='h4' size='md'>Cadastro de jogadores</Heading>
          <Input type="text" placeholder="Nome" name="name" value={formData.name} onChange={handleChange} borderColor={'#000000'}/>
          <Input type="number" placeholder="Idade" name="age" value={formData.age} onChange={handleChange} borderColor={'#000000'}/>
          <Select placeholder="Lado" name="side" value={formData.side} onChange={handleChange} borderColor={'#000000'}>
          <option value="D">Direito</option>
          <option value="E">Esquerdo</option>
          <option value="A">Ambos</option>
          </Select>
          <Select placeholder="Posição" name="position" value={formData.position} onChange={handleChange} borderColor={'#000000'}>
            <option value="Goleiro">Goleiro</option>
            <option value="Zagueiro">Lateral</option>
            <option value="Lateral">Zagueiro</option>
            <option value="Meio-Campo">Meio-Campo</option>
            <option value="Atacante">Atacante</option>
          </Select>
          <Input type="number" placeholder="Força" name="strength" value={formData.strength} onChange={handleChange} borderColor={'#000000'}/>
          <Input type="text" placeholder="Time" name="team" value={formData.team} onChange={handleChange} borderColor={'#000000'}/>
          <label>Estrela ?</label>
          <Stack spacing={4} direction='row'>
            <Checkbox
              borderColor={'#000000'}
              colorScheme='green'
              name="star"
              isChecked={formData.star}
              onChange={handleChange}>
              Sim
            </Checkbox>
            <Checkbox
              borderColor={'#000000'}
              colorScheme='red'
              name="star"
              isChecked={!formData.star}
              onChange={() => setFormData(prevData => ({ ...prevData, star: !prevData.star }))}>
              Não
            </Checkbox>
          </Stack>
          <Button type="submit" colorScheme="green">Cadastrar</Button>
        </Center>
        </Center>
      </form>
    </div>
  );
}

export default CreatePlayer;
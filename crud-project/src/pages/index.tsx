import React, { ChangeEvent, FormEvent, useState } from "react";

import axios from 'axios';
import { Button, Center, Checkbox, Input, Select, Stack } from '@chakra-ui/react'

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
    axios.post('http://localhost:5000/api/players', numericData)
      .then(response => {
        console.log('Item created:', response.data);
      })
      .catch(error => {
        console.error('There was an error creating the item!', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Center flexDir={'column'} p={"5rem"} gap={'0.5rem'} width={'70%'} bg={"#FFF"} borderRadius={'0.625rem'} marginTop={'2rem'} margin='auto'>
          <h1>Cadastro de jogadores</h1>
          <Input type="text" placeholder="Nome" name="name" value={formData.name} onChange={handleChange} />
          <label>Idade</label>
          <Input type="number" placeholder="Idade" name="age" value={formData.age} onChange={handleChange} />
          <Input type="text" placeholder="Lado" name="side" value={formData.side} onChange={handleChange} />
          <Select placeholder="Posição" name="position" value={formData.position} onChange={handleChange}>
            <option value="Goleiro">Goleiro</option>
            <option value="Zagueiro">Lateral</option>
            <option value="Lateral">Zagueiro</option>
            <option value="Meio-Campo">Meio-Campo</option>
            <option value="Atacante">Atacante</option>
          </Select>
          <label>Força</label>
          <Input type="number" placeholder="Força" name="strength" value={formData.strength} onChange={handleChange} />
          <Input type="text" placeholder="Time" name="team" value={formData.team} onChange={handleChange} />
          <label>Estrela ?</label>
          <Stack spacing={5} direction='row'>
            <Checkbox
              colorScheme='green'
              name="star"
              isChecked={formData.star}
              onChange={handleChange}>
              Sim
            </Checkbox>
            <Checkbox
              colorScheme='red'
              name="star"
              isChecked={!formData.star}
              onChange={() => setFormData(prevData => ({ ...prevData, star: !prevData.star }))}>
              Não
            </Checkbox>
          </Stack>
          <Button type="submit" colorScheme="green">Cadastrar</Button>
        </Center>
      </form>
    </div>
  );
}

export default CreatePlayer;
import { Button, Heading, HStack, Spacer } from '@chakra-ui/react'
import { FaEye } from "react-icons/fa";
import {
  Text,
  Flex,
  Box,
  Link,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher'
import api from '../services/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ClienteAPI {
  id: number,
  nome: string,
  email: string
}

const Home: NextPage = () => {

  const router = useRouter()

  const [clientes, setClientes] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {

      const result = await api.get('/clientes')
      console.log(result.data) 
      setClientes(result.data)
    }
    fetchData();

  }, []);
  return (
    <Box margin="4">
      <Flex justifyContent="space-between" margin="4" paddingBottom="6">
        <Button fontSize="sm" alignSelf="flex-end" colorScheme="teal"  onClick={() => router.push('../CadastroClientes')}>Cadastro de cliente</Button>
        <Button fontSize="sm" alignSelf="flex-end" colorScheme="teal"  onClick={() => router.push('../CadastroPesquisa')}>Cadastro de pesquisa</Button>
        <Text color="light" fontSize='3xl' fontFamily="Open Sans">Listagem de Clientes</Text>
        <ColorModeSwitcher />
      </Flex>
      <Flex>
        <Table variant="simple">
          <Thead bgColor="blue.500">
            <Tr>
            <Th textColor="white">Id</Th>
              <Th textColor="white">Nome</Th>
              <Th textColor="white">Email</Th>
              <Th textColor="white">Acões</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              clientes.map((cliente: ClienteAPI, index) => (
                <Tr key={index}>
                  <Td>{cliente.id}</Td>
                  <Td>{cliente.nome}</Td>
                  <Td>{cliente.email}</Td>
                  <Td>
                    <Flex justifyContent="space-between">
                      <Button size="sm" fontSize="smaller" colorScheme="yellow" mr="2">Editar</Button>
                      <Button size="sm" fontSize="smaller" colorScheme="red">Excluir</Button>
                      <Button size="sm" fontSize="smaller" colorScheme="blue"><FaEye /></Button>
                    </Flex>
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Flex>
    </Box>

  )
}

export default Home





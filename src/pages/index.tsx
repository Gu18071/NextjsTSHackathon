import { Button, Spacer } from '@chakra-ui/react'
import { FaEye } from "react-icons/fa";
import {
  Text,
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher'
import api from '../services/api';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';

interface ClienteAPI {
  id: number,
  nome: string,
  email: string
}

const Home: NextPage = () => {

  const router = useRouter()
  const [clientes, setClientes] = useState<any[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {

      const result = await api.get('/clientes')
      console.log(result.data) 
      setClientes(result.data)
    }
    fetchData();

  }, []);

  function deleteCliente (id :number) {
         axios.delete(`https://api-hackaton-unialfa2022.herokuapp.com/api/clientes/${id}`)

         setClientes(clientes.filter(cliente => cliente.id !== id))
  };

  return (
    <Box margin="8">
      <Flex  margin="4" paddingBottom="6">
        <Box>
        <Button fontSize="sm"   colorScheme="teal"  onClick={() => router.push('../CadastroClientes')}>Cadastro de cliente</Button>
        </Box>
        <Box>
        <Button fontSize="sm" marginLeft="4rem" colorScheme="teal"  onClick={() => router.push('../CadastroPesquisa')}>Cadastro de pesquisa</Button>
        </Box>
        <Spacer />
        <Box>
        <Text color="light" fontSize='3xl' textAlign="center" justifyContent="center" fontFamily="Open Sans" marginLeft="4rem" marginRight="23rem">Listagem de Clientes</Text>
        </Box>
        <Spacer />
        <Box>
        <ColorModeSwitcher />
        </Box>
      </Flex>
      <TableContainer  minWidth="60rem"  maxWidth="100rem">
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
                clientes.map((cliente: ClienteAPI, id) => (
                  <Tr key={id}>
                    <Td>{cliente.id}</Td>
                    <Td>{cliente.nome}</Td>
                    <Td>{cliente.email}</Td>
                    <Td>
                      <Flex justifyContent="space-between">
                        <Button size="sm"  fontSize="smaller" colorScheme="yellow" mr="2" onClick={() => router.push(`../EditClientes/${cliente.id}`)}>Editar</Button>
                        <Button size="sm" fontSize="smaller" colorScheme="red"  onClick={() => deleteCliente(cliente.id)}>Excluir</Button>
                        <Button size="sm" fontSize="smaller" colorScheme="blue" onClick={() => router.push(`../DadosClientes/${cliente.id}`)}><FaEye /></Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))
              }
            </Tbody>
          </Table>
        </Flex>
        </TableContainer>
    </Box>

  )
}
export default Home
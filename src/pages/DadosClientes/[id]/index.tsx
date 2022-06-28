import { Avatar, Button, Container, Heading, HStack, Spacer } from '@chakra-ui/react'
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
import { ColorModeSwitcher } from '../../../Components/ColorModeSwitcher'
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';


interface ClienteAPI {
    id: number,
    nome: string,
    email: string,
    telefone: number,
    cpf: number,
    cidade: string,
    endereco: string,
    bairro: string,
    numero: number
}



const GetDadosClientes = () => {

  const router = useRouter()
  const { id } = router.query                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data: any) => {
      const request = await api.put(`https://api-hackaton-unialfa2022.herokuapp.com/api/clientes/${id}`, data)
      router.push('/')
  }

  useEffect(() => {
      axios.get(`https://api-hackaton-unialfa2022.herokuapp.com/api/clientes/${id}`)
      .then((response) => {
        reset(response.data)
      })
  }, []);

    

  return (
    <>
    <Box margin="8">
    <Flex justifyContent="space-between" margin="4" paddingBottom="6">
    <Button fontSize="sm" alignSelf="flex-end" colorScheme="teal" onClick={() => router.push('/')} >Voltar</Button>
        <Text color="light" fontSize='3xl' fontFamily="Open Sans">Dados do cliente</Text>
        <ColorModeSwitcher />
    </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack marginY="1rem">
            <Box>
                <Flex>
                    <Avatar size='lg' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
                    <Box ml='3'>  
                            <FormControl margin="lrem">
                            <Input id='nome' type='text' size='sm' disabled border="none"   { ...register('nome') } />
                        </FormControl>
                        <FormControl margin="lrem">
                            <Input id='email' type='email' size='sm' disabled border="none"  { ...register('email')} />
                        </FormControl>
                    </Box>
            </Flex>
          </Box>
        </HStack>
        <VStack>
            <FormControl margin="lrem">
                <FormLabel>Telefone</FormLabel>
                <Input id='telefone' type='number'disabled   { ...register('telefone') } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>CPF</FormLabel>
                <Input id='cpf' type='number' disabled   { ...register('cpf') } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>Cidade</FormLabel>
                <Input id='cidade' type='text' disabled  { ...register('cidade') } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>Endereço</FormLabel>
                <Input id='enredeco' type='text' disabled  { ...register('endereco') } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>Bairro</FormLabel>
                <Input id='bairro' type='text' disabled   { ...register('bairro') } />
            </FormControl>
            <FormControl margin="2rem" >
                <FormLabel>Número</FormLabel>
                <Input id='numero' type='number'disabled  { ...register('numero') } />
            </FormControl>
        </VStack>
    </form>
      </Box>
    </>
  )
}

export default GetDadosClientes
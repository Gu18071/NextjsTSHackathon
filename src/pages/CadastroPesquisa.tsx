import type { NextPage } from 'next'
import { Button, Spacer } from '@chakra-ui/react'
import {
    Text,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    VStack,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher'
import { useForm } from 'react-hook-form'
import api from '../services/api'
import { useRouter } from 'next/router'

interface UserFrontInfo {
    tema: string,
    descricao: string,
    perguntas: string,
    clientes_id: number,
}

const CadastroPesquisa: NextPage = () => {
    const router = useRouter()
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data: any) => {
        const request = await api.post('/pesquisas', data)
        router.push('/')
    }
    
    return (
        <Box margin="8">
            <Flex margin="4" paddingBottom="6">
                <Box>
                <Button fontSize="sm" alignSelf="flex-end" colorScheme="teal" onClick={() => router.push('/')} >Voltar</Button>
                </Box>
                <Spacer />
                <Box>
                <Text color="light" fontSize='3xl' fontFamily="Open Sans"  justifyContent="center" textAlign="center">Cadastro de Pesquisas</Text>
                </Box>
                <Spacer />
                <Box>
                <ColorModeSwitcher />
                </Box>
            </Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
                <VStack marginY="0.5rem">
                    <FormControl margin="lrem">
                        <FormLabel>Tema</FormLabel>
                        <Input id='tema' type='text' placeholder='Digite o tema' { ...register('tema', { required: true }) } />
                    </FormControl>
                    <FormControl margin="lrem">
                        <FormLabel>Descrição</FormLabel>
                        <Input id='descricao' type='text' placeholder='Digite a descrição' { ...register('descricao', { required: true })} />
                    </FormControl>
                    <FormControl margin="lrem">
                        <FormLabel>Pergunta</FormLabel>
                        <Input id='perguntas' type='text' placeholder='Digite a pergunta' { ...register('perguntas', { required: true }) } />
                    </FormControl>
                    <FormControl margin="lrem">
                        <FormLabel>Id de cliente</FormLabel>
                        <Input id='clientes_id' type='number' placeholder='Digite o seu id' { ...register('clientes_id', { required: true }) } />
                    </FormControl>
                    <Button fontSize="sm" alignSelf="flex-end" colorScheme="blue" type='submit'>Enviar</Button>
                </VStack>
            </form>
        </Box>
    )
}

export default CadastroPesquisa
import { Button, HStack, Spacer } from '@chakra-ui/react'
import {
    Text,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    VStack,
} from '@chakra-ui/react'
import { ColorModeSwitcher } from '../../../Components/ColorModeSwitcher'
import { useForm} from 'react-hook-form'
import api from '../../../services/api'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import axios from 'axios'


const UpdateClientes = () => {
    
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
      <Box margin="4">
      <Flex margin="4" paddingBottom="6">
                <Box>
                <Button fontSize="sm" alignSelf="flex-end" colorScheme="teal" onClick={() => router.push('/')} >Voltar</Button>
                </Box>
                <Spacer />
                <Box>
                <Text color="light" fontSize='3xl' fontFamily="Open Sans"  justifyContent="center" textAlign="center">Dados do cliente</Text>
                </Box>
                <Spacer />
                <Box>
                <ColorModeSwitcher />
                </Box>
            </Flex>
    <form onSubmit={handleSubmit(onSubmit)}>
        <HStack marginY="0.5rem">
            <FormControl margin="lrem">
                <FormLabel>Nome</FormLabel>
                <Input id='nome' type='text' placeholder='Nome completo' { ...register('nome', { required: true }) } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' placeholder='Digite o seu Email' { ...register('email', { required: true })} />
            </FormControl>
        </HStack>
        <VStack>
            <FormControl margin="lrem">
                <FormLabel>Telefone</FormLabel>
                <Input id='telefone' type='number' placeholder='Digite seu telefone' { ...register('telefone', { required: true }) } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>CPF</FormLabel>
                <Input id='cpf' type='number' placeholder='Digite seu CPF' { ...register('cpf', { required: true }) } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>Cidade</FormLabel>
                <Input id='cidade' type='text' placeholder='Digite sua cidade' { ...register('cidade', { required: true }) } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>Endere??o</FormLabel>
                <Input id='enredeco' type='text' placeholder='Digite seu enrede??o' { ...register('endereco', { required: true }) } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>Bairro</FormLabel>
                <Input id='bairro' type='text' placeholder='Digite seu bairro' { ...register('bairro', { required: true }) } />
            </FormControl>
            <FormControl margin="lrem">
                <FormLabel>N??mero</FormLabel>
                <Input id='numero' type='number' placeholder='N??mero de sua casa/ap' { ...register('numero', { required: true }) } />
            </FormControl>
            <Button fontSize="sm" alignSelf="flex-end" colorScheme="blue" type='submit' onClick={() => router.push('/')}>Atualizar</Button>
        </VStack>
    </form>
</Box>
    </>
  )
}

export default UpdateClientes


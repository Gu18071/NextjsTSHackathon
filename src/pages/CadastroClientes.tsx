import type { NextPage } from 'next'
import { Button, Heading, HStack} from '@chakra-ui/react'
import { Text,
   Flex, 
   Box,
   Link,
   FormControl,
   FormLabel,
   Input,
   VStack,
   } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../Components/ColorModeSwitcher'
import InputForm from '../Components/Input'


const CadastroClientes: NextPage = () => {
    return (
        <Box margin="4">
     <Flex  justifyContent="space-between" margin="4" paddingBottom="6">
        <Button fontSize="sm" alignSelf="flex-end" colorScheme="green"><Link href='/'>Voltar</Link></Button>
        <Text color="light" fontSize='3xl' fontFamily="Open Sans">Cadastro de Clientes</Text>
        <ColorModeSwitcher/>
   </Flex>
  <HStack marginY="0.5rem">
               <FormControl margin="lrem">
                    <FormLabel>Nome</FormLabel>
                    <Input id='nome' type='name'  placeholder='Nome completo'/>
                </FormControl>
                <FormControl margin="lrem">
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id='email' type='email' placeholder='Digite o seu Email'/>
                </FormControl>
                </HStack>
                <VStack>
                <FormControl margin="lrem">
                    <FormLabel>Telefone</FormLabel>
                    <Input id='telefone' type='number' placeholder='Digite seu telefone'/>
                </FormControl>
                <FormControl margin="lrem">
                    <FormLabel>CPF</FormLabel>
                    <Input id='cpf' type='number' placeholder='Digite seu CPF'/>
                </FormControl>
                <FormControl margin="lrem">
                    <FormLabel>Cidade</FormLabel>
                    <Input id='cidade' type='text' placeholder='Digite sua cidade'/>
                </FormControl>
                <FormControl margin="lrem">
                    <FormLabel>Endereço</FormLabel>
                    <Input id='enredeco' type='text' placeholder='Digite seu enredeço'/>
                </FormControl>
                <FormControl margin="lrem">
                    <FormLabel>Bairro</FormLabel>
                    <Input id='bairro' type='text' placeholder='Digite seu bairro'/>
                </FormControl>
                <FormControl margin="lrem">
                    <FormLabel>Número</FormLabel>
                    <Input id='numero' type='number' placeholder='Número de sua casa/ap'/>
                </FormControl>
        <Button fontSize="sm" alignSelf="flex-end" colorScheme="blue" type='submit'>Enviar</Button>
   </VStack>
   </Box>
    )
  }
  
  export default CadastroClientes
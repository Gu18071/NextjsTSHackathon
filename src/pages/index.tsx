import { Button, Heading, HStack, Spacer} from '@chakra-ui/react'
import { FaEye } from "react-icons/fa";
import { Text,
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

const Home: NextPage = () => {
  return (
    <Box margin="4">
      <Flex justifyContent="space-between" margin="4" paddingBottom="6">
      <Button fontSize="sm" alignSelf="flex-end" colorScheme="green"><Link href='../CadastroClientes' color='light'>Cadastra-se</Link></Button>
      <Text color="light" fontSize='3xl' fontFamily="Open Sans">Listagem de Clientes</Text>
      <ColorModeSwitcher/>
      </Flex>
      <Flex>
        <Table variant="simple">
            <Thead bgColor="blue.500">
              <Tr>
                <Th textColor="white">Nome</Th>
                <Th textColor="white">Email</Th>
                <Th textColor="white">Acões</Th>
              </Tr>
            </Thead>
            <Tbody>
                <Tr>
                  <Td>Gustavo</Td>
                  <Td>gucianci@cianci.com</Td>
                  <Td>
                    <Flex justifyContent="space-between">
                      <Button size="sm" fontSize="smaller" colorScheme="yellow" mr="2">Editar</Button>
                      <Button size="sm" fontSize="smaller" colorScheme="red">Excluir</Button>
                      <Button size="sm" fontSize="smaller" colorScheme="blue"><FaEye /></Button>
                    </Flex>
                  </Td>
                </Tr>
            </Tbody>
      </Table>
      </Flex>
    </Box>

  )
}

export default Home





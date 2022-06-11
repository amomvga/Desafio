import {
  Flex,
  HStack,
  Icon,
  Button,
  Thead,
  Table,
  Th,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";
import { api } from "../../services/api";
import Router from "next/router";
import { EmptyList } from "./EmptyList";

interface ListUsersProps {
  id: number;
  userName: string;
  email: string;
  password: string;
}

export function List() {
  const [listUsers, setListUsers] = useState<ListUsersProps[]>([]);

  useEffect(() => {
    api.get(`users`).then((response) => {
      setListUsers(response.data);
      console.log(response.data);
    });
  }, [setListUsers]);

  function handleEditItem(e: number) {
    Router.push(`/edit?id=${e}`);
  }

  async function handleRemoveItem(e: number) {
    await api.delete(`/user/${e}`);
    await api.get("users").then((response) => setListUsers(response.data));
  }

  return (
    <Flex>
      {listUsers.length > 0 ? (
        <Flex w="100%" align="center" justify="center" my="6">
          <Flex
            direction="column"
            bgColor="#181819"
            p="2"
            m={2}
            borderRadius={8}
            w="100%"
            maxWidth={1080}
          >
            <Flex mb="8" justify="space-between" align="center">
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>EMAIL</Th>
                    <Th>USERNAME</Th>
                    <Th>ACTIONS</Th>
                  </Tr>
                </Thead>

                {listUsers.map((list) => {
                  return (
                    <Tbody key={list.id}>
                      <Tr fontSize="sm" color="gray.400">
                        <Td>{list.id}</Td>
                        <Td>{list.email}</Td>
                        <Td>{list.userName}</Td>
                        <Td>
                          <HStack spacing={1} p="1">
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={<Icon as={RiEdit2Fill} />}
                              onClick={() => {
                                handleEditItem(list.id);
                              }}
                            >
                              Edit
                            </Button>

                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={<Icon as={RiDeleteBinFill} />}
                              onClick={() => {
                                handleRemoveItem(list.id);
                              }}
                            >
                              Delete
                            </Button>
                          </HStack>
                        </Td>
                      </Tr>
                    </Tbody>
                  );
                })}
              </Table>
            </Flex>
          </Flex>
        </Flex>
      ) : (
        <Flex w="100%" align="center" justify="center">
          <EmptyList />
        </Flex>
      )}
    </Flex>
  );
}

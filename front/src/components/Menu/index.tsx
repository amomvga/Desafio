import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { List } from "./List";

export function Menu() {
  return (
    <Flex w="100%" direction="column">
      <List />

      <Flex justify="center" mb="6">
        <Link href="/register">
          <Button as="a" size="sm" fontSize="sm" colorScheme="purple">
            Cadastrar Usuário
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

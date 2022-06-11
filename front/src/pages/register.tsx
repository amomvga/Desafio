import { Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import Router from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../services/api";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkButton, setCheckButton] = useState(true);

  useEffect(() => {
    if (!(userName === "" || email === "" || password === "")) {
      setCheckButton(false);
    } else {
      setCheckButton(true);
    }
  }, [userName, email, password]);

  function handleCreateNewItem(event: FormEvent) {
    event.preventDefault();

    const saveChange = {
      userName: userName,
      email: email,
      password: password,
    };

    api.post("/users", saveChange);
  }

  function handleChangePath() {
    setTimeout(() => {
      Router.push("/");
    }, 300);
  }

  return (
    <Flex
      direction="column"
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
    >
      <Flex w="100%" mt={4} align="center">
        <Flex w="98%" justify="center" align="center">
          <Text ml="2">Cadastrar Usuário</Text>
        </Flex>
      </Flex>

      <Flex as="form" w="100%" p="6" onSubmit={handleCreateNewItem}>
        <Flex direction="column" w="100%" align="center">
          <Flex direction="column">
            <Stack spacing={4}>
              <Input
                name="userName"
                placeholder="Nome do usuário"
                variant="flushed"
                w={400}
                h="50"
                value={userName}
                maxLength={34}
                onChange={(event) => setUserName(event.target.value)}
              />
              <Input
                name="email"
                placeholder="E-mail"
                variant="flushed"
                w={400}
                h="50"
                value={email}
                maxLength={120}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                name="password"
                type="number"
                placeholder="Senha"
                variant="flushed"
                w={400}
                h="50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Stack>
          </Flex>

          <Button
            type="submit"
            mt="60px"
            size={"md"}
            colorScheme="purple"
            disabled={checkButton}
            onClick={handleChangePath}
          >
            Cadastrar
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import Router, { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import { api } from "../services/api";

export default function edit() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkButton, setCheckButton] = useState(true);
  const { query } = useRouter();

  useEffect(() => {
    if (!(userName === "" || email === "" || password === "")) {
      setCheckButton(false);
    } else {
      setCheckButton(true);
    }
  }, [userName, email, password]);

  useEffect(() => {
    api.get(`/users/${query.id}`).then((response) => {
      const { userName, email, password } = response.data;
      setUserName(userName);
      setEmail(email);
      setPassword(password);
    });
  }, [query]);

  async function handleEditUser(event: FormEvent) {
    event.preventDefault();

    const saveChange = {
      userName: userName,
      email: email,
      password: password,
    };

    await api.put(`/user/${Number(query.id)}`, saveChange);
  }

  function changePath() {
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
      <Flex align="center" direction="column" justify="center">
        <Flex>
          <Text>Editar Usuário</Text>
        </Flex>
      </Flex>

      <Flex as="form" w="100%" p="6" onSubmit={handleEditUser}>
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
                h={"50px"}
                value={email}
                maxLength={120}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Input
                name="password"
                placeholder="Senha"
                variant="flushed"
                w={400}
                h={"50px"}
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
            onClick={changePath}
          >
            Salvar alterações
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

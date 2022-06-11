import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function EmptyList() {
  return (
    <Flex direction="column" align="center">
      <Box>
        <Image src="/none.svg" width={120} height={157} />
      </Box>

      <Flex direction="column" align="center" color="#c14d19" mt="4" mb="40px">
        <Text>Ops!</Text>
        <Text>Nenhum usuário cadastrado</Text>
      </Flex>
    </Flex>
  );
}

import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';

const ProductSection = () => {
  return (
    <Flex p="6" bg="white" justify="space-between">
      <Box w="40%">
        <Image src="https://via.placeholder.com/150" alt="Product" />
      </Box>
      <Box w="55%">
        <Text fontSize="2xl" fontWeight="bold">Fire-Boltt Smartwatch</Text>
        <Text>With Bluetooth, Assistant, Calculator, and more.</Text>
        <Text fontSize="lg" fontWeight="bold">₹2,999</Text>
        <Button colorScheme="yellow" mt="4">Add to Cart</Button>
      </Box>
    </Flex>
  );
};

export default ProductSection;

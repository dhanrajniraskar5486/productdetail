import { Box, Text } from '@chakra-ui/react';

const DetailsSection = () => {
  return (
    <Box p="6" bg="gray.100">
      <Text fontSize="lg" fontWeight="bold">Product Details</Text>
      <Text><strong>Model:</strong> Fire-Boltt XYZ</Text>
      <Text><strong>Color:</strong> Black</Text>
      <Text><strong>Features:</strong> Bluetooth, Assistant, Calculator, and more.</Text>
    </Box>
  );
};

export default DetailsSection;

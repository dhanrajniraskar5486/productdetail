import { Flex, Text, Input } from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";

const Navbar = () => {
  return (
    <>
      <Flex bg="gray.800" color="white" justify="space-between" p="4">
        <Text fontSize="2xl" fontWeight="bold">
          Amazon Logo
        </Text>
        <Flex align="center">
          <MdLocationOn size="24px" />
          <Text ml="2">
            Deliver to
            <br />
            Pune,Alandi,412105
          </Text>
        </Flex>
        <Input placeholder="Search" w="40%" />
        <Text>Account & Lists</Text>
        <Text>
          Returns
          <br />& Orders
        </Text>
        <Text>Cart</Text>
      </Flex>

      <Flex bg="gray.700" color="white" justify='flex-start'  p="3"  >
      <Flex align="center">
          <TfiMenu size="24px" />
          <Text mr="4" ml="2">All</Text>
        </Flex>
        <Text mr="4">Amazon MiniTV</Text>
        <Text mr="4">Sell</Text>
        <Text mr="4">Amazon Pay</Text>
        <Text mr="4">Gift Cards</Text>
        <Text mr="4">Buy Again</Text>
        <Text mr="4">Health,Household & Personal Care</Text>
      </Flex>
    </>
  );
};

export default Navbar;

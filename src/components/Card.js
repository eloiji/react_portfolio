import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      spacing={4}
      backgroundColor="white"
      borderRadius="md"
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" borderRadius="md" />
      <Heading as="h3" size="md" color="black" px={4}>
        {title}
      </Heading>
      <Text color="#666666" px={4} textAlign="left">
        {description}
      </Text>
      <HStack spacing={2} cursor="pointer" color="#333333" pb={4} px={4}>
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
  );
};

export default Card;

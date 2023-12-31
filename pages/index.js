import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  purpose,
  title1,
  title2,
  description1,
  description2,
  linkName,
  buttonText,
  imageUrl,
}) => (
  <Flex
    flexWrap="wrap"
    justifyContent="center"
    alignItems="center"
    m="10"
  >
    <Image
      src={imageUrl}
      width={500}
      height={300}
      alt="banner"
    />
    <Box p="5">
      <Text
        color="gray.500"
        fontSize="sm"
        fontWeight="medium"
      >
        {purpose}
      </Text>
      <Text
        fontSize="3x1"
        fontWeight="bold"
      >
        {title1}
        <br />
        {title2}
      </Text>
      <Text
        fontSize="lg"
        paddingTop="3"
        paddingBottom="3"
        color="gray.700"
      >
        {description1}
        <br />
        {description2}
      </Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <Box>
      <Banner
        purpose="RENT YOUR NEXT HOME"
        title1="Rental homes for"
        title2="You & Your Family"
        description1="Explore Apartments, Villas, Homes"
        description2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">{/* Fetch properties & map over them */}</Flex>
      <Banner
        purpose="BUY YOUR NEXT HOME"
        title1="Find, Buy, & Own Your"
        title2="Dream Home"
        description1="Explore Apartments, Villas, Homes"
        description2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </Box>
  );
}

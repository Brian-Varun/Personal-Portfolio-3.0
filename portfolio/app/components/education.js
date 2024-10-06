import {
  Button,
  Flex,
  Text,
  Link,
  Separator,
  Inset,
  Heading,
  Badge,
} from "@radix-ui/themes";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Theme } from "@radix-ui/themes";
import Image from "next/image";

export function Education() {
  const mechanicalBadges = [
  ];

  return (
    <Theme>
      <Flex direction="column">
        <Heading size="1">McMaster Univeristy</Heading>
        <Text size="1" mb="0">
          Department of Engineering
        </Text>
        <Text size="1" color="gray" weight="light" mb="2">
          September 2021 - Expected: April 2027
        </Text>
        <Text size="1" weight="light" mb="2">
          B.Eng.BME - Bachelors of Mechatronics and Biomedical Engineering
        </Text>
        <Text size="1" mb="2" color="gray">
          <Flex gap="1" wrap="wrap">
          {/* {mechanicalBadges.map((item) => (
            <Badge key={item.id}  size="1">
                {item}
            </Badge>
          ))} */}
          </Flex> 
        </Text>
      </Flex>
    </Theme>
  );
}

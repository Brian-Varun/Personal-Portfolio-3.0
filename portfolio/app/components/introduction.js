import { Button, Flex, Text, Link, Separator, Inset, Heading, Em} from "@radix-ui/themes";
import { Mail, Linkedin, Github, Download} from "lucide-react";
import { Theme } from "@radix-ui/themes";
import Image from 'next/image';
import mcmaster1photo from "../media/mcmaster ironring photo.jpg"

export function Introduction() {
  return (
    <Theme>
        <Flex direction="column" gap="2"> 
            <Text size="4">
                Engineering student with 1 year of experience, focused on designing (software/mechanical) systems with (say something).
            </Text>
        </Flex>
    </Theme>
  );
}

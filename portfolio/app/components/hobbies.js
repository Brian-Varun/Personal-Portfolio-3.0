import { Button, Flex, Text, Link, Separator, Inset} from "@radix-ui/themes";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Theme } from "@radix-ui/themes";
import Image from 'next/image';
import mcmaster1photo from "../media/mcmaster ironring photo.jpg"

export function Hobbies() {
  return (
    <Theme>
        <Flex direction="column" gap="2">             
            <Text size="1">
            • 7 years of classical indian violin training
            </Text>
            <Text size="1">
            • Soccer defender, questionable skills
            </Text>
            <Text size="1">
            • Dessert enthusiast and taste-tester
            </Text>
        </Flex>
    </Theme>
  );
}

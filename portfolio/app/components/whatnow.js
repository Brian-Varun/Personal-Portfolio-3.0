import { Button, Flex, Text, Link, Separator} from "@radix-ui/themes";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Theme } from "@radix-ui/themes";

export function WhatNow() {
  return (
    <Theme>
        <Flex direction="column" gapY="2"> 
            <Text weight="light" size="1">
                Looking for summer 2025 interships in North America.
            </Text>
            <Text weight="light" size="1">
                Research and development at <Link href="#">Dana Incorporated</Link>
            </Text>
        </Flex>
    </Theme>
  );
}

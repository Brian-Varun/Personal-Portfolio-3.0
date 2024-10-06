import { Button, Flex, Text, Link, Separator} from "@radix-ui/themes";
import { Mail, Linkedin, Github, Download, Copy } from "lucide-react";
import { Theme } from "@radix-ui/themes";

export function ContactMe() {
  return (
    <Theme>
        <Flex direction="column" gap="2" p="2"> 
        {/* <div styles={{width: "70%"}}>
            <Button variant="ghost" size="1" color="crimson" >
                <Download size={14}/> Resume
            </Button>
        </div> */}
        <div styles={{width: "60%"}}>
            <Button variant="ghost" size="1" >
                <Mail size={14}/> Email
            </Button>
        </div>
        <div styles={{width: "60%"}}>
            <Button variant="ghost" size="1" >
                <Copy size={14}/> 647-761-7753
            </Button>
        </div>
        <div styles={{width: "60%"}}>
            <Button variant="ghost" size="1" >
                <Linkedin size={14}/> Linkedin
            </Button>
        </div>
        <div styles={{width: "60%"}}>
            <Button variant="ghost" size="1" >
                <Github size={14}/> Github
            </Button>
        </div>
      </Flex>
    </Theme>
  );
}

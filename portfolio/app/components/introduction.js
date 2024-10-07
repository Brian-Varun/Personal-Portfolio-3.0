import { Button, Flex, Text, Link, Separator, Inset, Heading, Em, ScrollArea} from "@radix-ui/themes";
import { Mail, Linkedin, Github, Download} from "lucide-react";
import { Theme } from "@radix-ui/themes";
import Image from 'next/image';
import mcmaster1photo from "../media/mcmaster ironring photo.jpg"

export function Introduction() {
  return (
    <Theme>

            <ScrollArea type="always" scrollbars="vertical" style={{ height: 375 }}>
            <Flex direction="column" gap="2"> 
            <Text size="4" mr="3">
            Engineering student with a strong foundation in mechatronics and biomedical systems, focused on designing innovative solutions with emphasis on quality and precision.            
            </Text>
            <Text size="2" mr="3">
            I'm Varun Kothandaraman, a 4th year Mechatronics and Biomedical Engineering student at McMaster University in Canada. I'm incredibly passionate about applying my engineering expertise to solve real-world problems and make a meaningful impact on people's lives.            
            </Text>
            <Text size="2" mr="3">
            Through my academic journey and hands-on experience, I've developed a deep appreciation for creating designs that are not only functional but, more importantly, prioritize user safety and reliability. My approach combines analytical thinking with creative problem-solving, ensuring that every solution I develop meets the highest standards of performance and effectiveness.            
            </Text>
            <Text size="2" mr="3">
            My ultimate goal is to harness my passion for continuous learning and innovation to drive advancements in the intersection of mechatronics engineering and healthcare technology. I am particularly interested in developing cutting-edge medical devices and systems that enhance patient care and treatment outcomes.            </Text>
        </Flex>
            </ScrollArea>

    </Theme>
  );
}

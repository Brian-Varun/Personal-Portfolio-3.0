'use client';

import {
  Button,
  Flex,
  Text,
  Link,
  Separator,
  HoverCard,
  Avatar,
  Box,
  Heading,
  Inset,
  ScrollArea,
} from "@radix-ui/themes";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Theme } from "@radix-ui/themes";
import Image from 'next/image';


import macformula from "../media/formulaphoto.jpg";
import solarcarphoto from "../media/solarcarphoto.jpg"
import mcmaster1photo from "../media/mcmaster ironring photo.jpg"
import mcmaster2photo from "../media/mcmastermathphoto.jpg"
import distributel from "../media/distributel.jpg"

export function Experience() {
    const experienceItems = [
        {
          id: 1,
          position: "Product Development Engineering Intern",
          company: "Dana",
          link: "https://www.dana.com",
          date: "May 2024 - Present",
          desc: "Dana Incorporated is a world leader in highly engineered solutions for improving the efficiency, performance, and sustainability of powered vehicles and machinery. With expertise in electrification and thermal management, Dana supplies components to major automotive and industrial manufacturers globally.",
          role: <Text size="1" weight="light" mr="5" color="gray">Led manufacturing optimization studies resulting in 11% cost reduction for battery components. Utilized PTC Creo for test fixture design, conducted failure analysis on prototypes, and developed Python scripts to automate dimensional tracking and shipping processes, improving efficiency by saving 4 hours weekly.</Text>,
          icon: "/path/to/your/local/dana-image.jpg",
        },
        {
          id: 2,
          position: "Fullstack Developer",
          company: "McMaster Formula Electric",
          link: "https://macformularacing.com/",
          date: "Jan 2024 - Present",
          desc: "McMaster Formula Electric is a student-led team that designs and builds electric race cars to compete in Formula SAE Electric competitions. The team focuses on developing innovative electrical systems and pushing the boundaries of electric vehicle technology.",
          role: <Text size="1" weight="light" mr="5" color="gray">Developing a comprehensive hardware-in-the-loop testing application using React, web-socket, Go, and Raspberry Pi. Additionally, managing and redesigning the team's website to improve online presence.</Text>,
          icon: macformula,
        },
        {
          id: 3,
          position: "Suspension Dynamics",
          company: "McMaster Solar Car Project",
          link: "https://www.mcmastersolarcar.com/",
          date: "Oct 2023 - April 2024",
          desc: "The McMaster Solar Car Project is a student-run initiative that designs, builds, and races solar-powered vehicles for the American Solar Challenge. The team combines sustainable energy innovation with advanced automotive engineering.",
          role: <Text size="1" weight="light" mr="5" color="gray">Developed MATLAB Simulink models for data processing and performance analysis of solar vehicles. Gained hands-on experience in automotive fabrication through machining and assembling aluminum chassis components.</Text>,
          icon: solarcarphoto,
        },
        {
          id: 4,
          position: "Teaching Assistant",
          company: "Faculty of Engineering",
          link: "https://www.eng.mcmaster.ca/ibiomed/",
          date: "Jan 2023 - April 2024",
          desc: "McMaster University's Faculty of Engineering is known for its innovative approach to engineering education, combining theoretical knowledge with practical, hands-on experience in various engineering disciplines.",
          role: <Text size="1" weight="light" mr="5" color="gray">Instructed first-year engineering students in Python programming, 3D CAD modeling, and engineering design principles. Mentored student teams through complete product development cycles, focusing on mechatronic prototypes using Raspberry Pi and various sensors.</Text>,
          icon: mcmaster1photo,
        },
        {
          id: 5,
          position: "Teaching Assistant",
          company: "Department of Mathematics",
          link: "https://math.mcmaster.ca/",
          date: "May 2023 - June 2023",
          desc: "The Department of Mathematics at McMaster University offers comprehensive mathematics education and research opportunities, supporting students across various disciplines in developing strong quantitative and analytical skills.",
          role: <Text size="1" weight="light" mr="5" color="gray">Instructed second-year students in higher level calculus concepts mainly regarding Laplace, triple integrals, and Fourier transforms alongside leading tutorials on how to visualize these concepts graphically using MATLAB.</Text>,
          icon: mcmaster2photo,
        },
        {
          id: 6,
          position: "Administrative Intern",
          company: "Bell Distributel",
          link: "https://www.distributel.ca/",
          date: "Summer 2022 & Summer 2023",
          desc: "Distributel is a leading independent telecommunications provider in Canada, offering internet, phone, and TV services to residential and business customers across the country.",
          role: <Text size="1" weight="light" mr="5" color="gray">Streamlined customer service processes through email automation, helping numerous customers gain internet access while efficiently managing service tickets.</Text>,
          icon: distributel,
        },
      ];
  return (
    <Theme>
      <Flex direction="column" gap="2">
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 600 }}>
        {experienceItems.map((item) => (
          <Flex key={item.id} direction="column" gapY="2">
            <Text size="1">
              {item.position} //{" "}
              <HoverCard.Root>
                <HoverCard.Trigger>
                  <Link href={item.link} target={item.link !== "#" ? "_blank" : undefined}>
                    {item.company}
                  </Link>
                </HoverCard.Trigger>
                <HoverCard.Content>
                  <Flex gap="4">
                    {/* <Box style={{ flexShrink: 0, position: 'relative', width: '100px', height: '100px' }}>
                      {item.icon && (
                        <Image
                        src={item.icon}
                        alt={`${item.company} logo`}
                        fill
                        sizes="100px"
                        quality={100} // Adjust quality as needed
                        style={{
                          objectFit: 'cover',
                          borderRadius: 'var(--radius-2)',
                        }}
                      />
                      )}
                    </Box> */}
                    <Flex direction="column" gap="2">
                      <Heading size="2" as="h3">
                        {item.company}
                      </Heading>
                      <Text as="div" size="1" weight="light">
                        {item.desc}
                      </Text>
                    </Flex>
                  </Flex>
                </HoverCard.Content>
              </HoverCard.Root>
            </Text>

                {item.role}

            <Text size="1" color="gray" weight="light">
              {item.date}
            </Text>
            <Separator size="4" my="2" style={{ width: "95%" }} />
            </Flex>
        ))}
        </ScrollArea>
      </Flex>
    </Theme>
  );
}
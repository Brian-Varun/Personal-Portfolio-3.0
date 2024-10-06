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
          role: <Text size="1" weight="light" mr="5" color="gray">• Spearheaded two critical studies on battery cold plate manufacturing methods, achieving 11% cost reduction per part\n• Designed and fabricated test fixtures for mechanical and electrical testing using PTC Creo\n• Conducted failure analysis on prototype components, investigating material defects and various issues\n• Developed Python scripts to automate GD&T dimensional tracking and shipping list generation, saving 4 hours of weekly manual work </Text>,
          icon: "/path/to/your/local/dana-image.jpg",
        },
        {
          id: 2,
          position: "Fullstack Developer",
          company: "McMaster Formula Electric",
          link: "https://macformularacing.com/",
          date: "Jan 2024 - Present",
          desc: "McMaster Formula Electric is a student-led team that designs and builds electric race cars to compete in Formula SAE Electric competitions. The team focuses on developing innovative electrical systems and pushing the boundaries of electric vehicle technology.",
          role: <Text size="1" weight="light" mr="5" color="gray">• Creating a full-stack application for hardware-in-the-loop testing using React, web-socket, Go, and Raspberry Pi\n• Redesigned and currently managing the team's website (macformularacing.com)</Text>,
          icon: macformula,
        },
        {
          id: 3,
          position: "Suspension Dynamics",
          company: "McMaster Solar Car Project",
          link: "https://mcmastersolarcar.com/",
          date: "Oct 2023 - April 2024",
          desc: "The McMaster Solar Car Project is a student-run initiative that designs, builds, and races solar-powered vehicles for the American Solar Challenge. The team combines sustainable energy innovation with advanced automotive engineering.",
          role: <Text size="1" weight="light" mr="5" color="gray">Engineered MATLAB Simulink models for processing sensor data and generating vehicle performance metrics\n• Contributed to race car fabrication by machining and assembling aluminium chassis components</Text>,
          icon: solarcarphoto,
        },
        {
          id: 4,
          position: "Teaching Assistant",
          company: "Faculty of Engineering",
          link: "https://www.eng.mcmaster.ca/ibiomed/",
          date: "Jan 2023 - April 2024",
          desc: "McMaster University's Faculty of Engineering is known for its innovative approach to engineering education, combining theoretical knowledge with practical, hands-on experience in various engineering disciplines.",
          role: <Text size="1" weight="light" mr="5" color="gray">Instructed 40+ first-year engineering students per semester in Python programming, 3D CAD modeling, and engineering design\n• Guided student teams through full product development cycles, overseeing mechatronic prototypes using Raspberry Pi, sensors, and various fabrication methods</Text>,
          icon: mcmaster1photo,
        },
        {
          id: 5,
          position: "Teaching Assistant",
          company: "Department of Mathematics",
          link: "https://math.mcmaster.ca/",
          date: "May 2023 - June 2023",
          desc: "The Department of Mathematics at McMaster University offers comprehensive mathematics education and research opportunities, supporting students across various disciplines in developing strong quantitative and analytical skills.",
          role: <Text size="1" weight="light" mr="5" color="gray">Role details not provided in resume</Text>,
          icon: mcmaster2photo,
        },
        {
          id: 6,
          position: "Administrative Intern",
          company: "Bell Distributel",
          link: "https://www.distributel.ca/",
          date: "Summer 2022 & Summer 2023",
          desc: "Distributel is a leading independent telecommunications provider in Canada, offering internet, phone, and TV services to residential and business customers across the country.",
          role: <Text size="1" weight="light" mr="5" color="gray">Helped hundreds of customers get access to internet through automating emails and manually completing tickets</Text>,
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
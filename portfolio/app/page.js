import { Grid, Flex, Text, Button, Avatar, Container, Separator, Card, Inset } from "@radix-ui/themes";
import { ThemeToggle } from "./components/ThemeToggle";
import {ArrowUpRight, Dot, CircleGauge, Download} from "lucide-react";

import { ContactMe } from "./components/contactme";
import { Introduction } from "./components/introduction";
import { WhatNow } from "./components/whatnow";
import { Experience } from "./components/experience";
import { ThemeClock } from "./components/torontoclock";
import { Education } from "./components/education";
import { Hobbies } from "./components/hobbies";
export default function Home() {
  const gridItems = [
    { id: 1, colSpan: 'md:col-span-2', rowSpan: 'md:row-span-3', text: "Experience", component:<Experience/>, highlight: <Button variant="ghost" size="1" color="crimson" > <Download size={14}/> Resume  </Button> },
    { id: 2, colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1',  text: "Time", highlight: <Text size="1" color="gray">Toronto, Canada</Text>, component: <ThemeClock/> },
    { id: 3, colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1',  text: "Now", component: <WhatNow/>, highlight:<div 
      style={{ 
        backgroundColor: 'rgb(0, 255, 0)', // Green background
        borderRadius: '50%', 
        boxShadow: 'rgb(48,164,108, 0.5) 0px 0px 5px 1px', // Green shadow
        width: '7px', // Size similar to Dot component
        height: '7px', 
        opacity: 1 
      }}
    />},
    { id: 4, colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2',  text: "About Me", component: <Introduction/> },
    { id: 5, colSpan: 'md:col-span-2', rowSpan: 'row-span-1  lg:row-span-1', text: "Education", component: <Education/> },
    { id: 6, colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1',  text: "Gallery", component: "test"},
    { id: 6, colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1',  text: "Hobbies", component: <Hobbies/>},
    { id: 7, colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1',  text: "Contact Information", component: <ContactMe/> },
    { id: 8, colSpan: 'md:col-span-3', rowSpan: 'md:row-span-1',  text: "", component: "project 1" },
    { id: 9, colSpan: 'md:col-span-3', rowSpan: 'md:row-span-1',  text: "", component: "project 2" },
    { id: 10, colSpan: 'md:col-span-3', rowSpan: 'md:row-span-1',  text: "", component: "project 3" },
    { id: 11, colSpan: 'md:col-span-3', rowSpan: 'md:row-span-1',  text: "", component: "project 4" },
    { id: 12, colSpan: 'md:col-span-3', rowSpan: 'md:row-span-1',  text: "", component: "project 5" },
    { id: 13, colSpan: 'md:col-span-3', rowSpan: 'md:row-span-1',  text: "", component: "extra project lists" },

  ];

  return (
    <Container className="px-1 md:px-4 lg:px-8 max-w-[1400px] mx-auto">
      <Flex justify="between" align="center" pb="4" pt="8">
        <Flex align="center" gap="4">
          <Avatar
            size="3"
            src="https://media.licdn.com/dms/image/v2/D5603AQGqA72L41YH2g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1676932335192?e=1733961600&v=beta&t=l_-zCWyq3N7nJ5Jk_55uau63OlyeOyAk0UQOH-SKxXo"
            fallback="VK"
            radius="full"
          />
          <Flex direction="column">
            <Text size="1" weight="bold">Varun Kothandaraman</Text>
            <Text size="1" color="gray">Product Enginer, Hacker, Designer</Text>
          </Flex>
        </Flex>
        
        <Flex gap="4">
          <ThemeToggle />
          <Button variant="surface" size="2">Contact Me <ArrowUpRight size={14}/></Button>
        </Flex>
      </Flex>
      
      <Separator size="4" mb="4" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[200px]">
        {gridItems.map((item) => (
          <div 
            key={item.id} 
            className={`${item.colSpan} ${item.rowSpan}`}
            style={{
              gridRowEnd: `span ${item.rowSpan.includes('row-span-3') ? 3 : 
                           item.rowSpan.includes('row-span-2') ? 2 : 1}`
            }}
          >
            <Card 
              variant="surface" 
              className="w-full h-full transition-all"
            >
              <Flex justify="between" align="center" >
              <Text size="1">
                  {item.text}
              </Text>
              {item.highlight}
              </Flex>
              
              <Separator size="4" my="2"/>

              <Flex direction="column" className="h-full justify-between">
                <div>
                    {item.component}
                </div>
              </Flex>
            </Card>
          </div>
        ))}
      </div>
      
      <Separator size="4" my="4" />
      
      <Flex justify="between" py="4">
        <Text size="1" color="gray">© 2024</Text>
        <Text size="1" color="gray">Created by VK</Text>
      </Flex>
    </Container>
  );
}
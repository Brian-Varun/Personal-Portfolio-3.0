import { Button, Flex, Text, Container, Heading, Separator, Box } from "@radix-ui/themes";
import Link from 'next/link';
import Image from 'next/image';

const projectsData = {
  'project-1': {
    title: 'Designed a line-following hospital bed porter that moves patients from one area to another',
    description: 'In modern medicine, hospitals are understaffed and nurses are overworked. This results in nurses having to focus on tasks that are outside of what is actually important, treating patients. Our device R.O.B (Robot Operated Bed) utilizes a sensor system to follow the lines commonly found on hospital floors to get from one point to another with the goal of delivering patients, goods, or information.',
    Duration: "4 months",
    industry: "Healthcare",
    role: "Prototype Development",
    keyFocusAreas: ["Cost Reduction •", "Design Optimization •", "Process Automation"],
    introTitle: "Pioneering Efficient Battery Solutions",
    introParagraph: "As the automotive industry shifts towards electrification, optimizing battery manufacturing processes becomes crucial for sustainable and cost-effective production. This case study explores how we achieved significant cost reductions while maintaining product quality.",
    heroImage: "/path/to/hero-image.jpg",
    // Add more fields as needed
  },
  // Add more projects as needed
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = projectsData[slug];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Container className="px-1 md:px-4 lg:px-8 max-w-[1400px] mx-auto">
      <Link href="/">
        <Button variant="soft" mb="150px">Back to Home</Button>
      </Link>
      
      {/* Header Section */}
      <Flex direction="row" justify="between" gap="6" wrap="wrap" mb="6" mt="10">
        {/* Left side */}
        <Box style={{ flex: 1, minWidth: '300px', marginRight: "150px"}}>
          <Heading size="8" mb="2">{project.title}</Heading>
          <Text size="4" color="gray">{project.description}</Text>
        </Box>
        
        {/* Right side */}
        <Flex direction="column" gap="2" style={{ minWidth: "150px", maxWidth: "300px" }}>
          <Text weight="bold">Duration</Text>
          <Text color="gray">{project.Duration}</Text>
          <Separator size="4" />
          
          <Text weight="bold">Industry</Text>
          <Text color="gray">{project.industry}</Text>
          <Separator size="4" />
          
          <Text weight="bold">Role</Text>
          <Text color="gray">{project.role}</Text>
          <Separator size="4" />
          
          <Text weight="bold">Key Focus Areas</Text>
          <Flex direction="row" wrap="wrap" gap="1">
            {project.keyFocusAreas.map((area, index) => (
              <Text key={index} color="gray" size="2">{area}</Text>
            ))}
          </Flex>
        </Flex>
      </Flex>

      {/* Introduction Section */}
      <Box mb="8">
        <Heading size="6" mb="2">{project.introTitle}</Heading>
        <Text mb="4">{project.introParagraph}</Text>
        <Box position="relative" width="100%" height="400px">
          <Image 
            src={project.heroImage}
            alt="Project hero image"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Box>

      {/* Additional sections can be added here */}
    </Container>
  );
}
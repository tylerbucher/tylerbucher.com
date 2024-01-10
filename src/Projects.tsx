import {
    ActionIcon,
    Button, Card,
    Container,
    Grid, Group,
    Paper,
    rem,
    SimpleGrid,
    Text,
    Title,
    Image,
    Tooltip,
    useMantineTheme, Stack
} from '@mantine/core';
import classes from './Projects.module.css';
import {useMediaQuery} from "@mantine/hooks";
import {Carousel} from '@mantine/carousel';
import {IconBrandGithub, IconDownload, IconLink, IconStar} from "@tabler/icons-react";
import React from "react";
import {openInNewTab} from "./Helper";

const projects = [
    {
        id: "jobbox",
        title: "JobBox by Acramo (closed source)",
        description: "JobBox stands as a web application dedicated to streamlining job costing, encompassing time " +
            "costs, related expenses, estimating, and invoicing. Small businesses, particularly contractors, often " +
            "face challenges in locating tools that cater to these specific needs. JobBox emerged as a solution born " +
            "out of this necessity. The project leverages a technology stack with React for the frontend, supported by " +
            "a Java and GraphQL server, all backed by MongoDB.",
        link: "https://github.com/Acramo",
        linkText: "github.com/Acramo",
        images: [
            '/jobbox/1.png',
            '/jobbox/2.png',
            '/jobbox/3.png',
            '/jobbox/4.png',
            '/jobbox/5.png',
            '/jobbox/6.png',
        ]
    },
    {
        id: "atlas",
        title: "AtlasMaker",
        description: "AtlasMaker is an application blending OpenGL, JavaFX, and AJGL (my game engine). Its purpose is " +
            "to preview and extract assets from Minecraft texture packs, converting them into usable OpenGL data for " +
            "integration into an OpenGL web map. The application is currently in beta and does not support " +
            "MinecraftForge.",
        link: "https://github.com/WebGL-Map/AtlasMaker",
        linkText: "github.com/WebGL-Map/AtlasMaker",
        images: [
            '/atlas/1.png',
            '/atlas/2.png',
            '/atlas/3.png',
        ]
    },
    {
        id: "incident-tracker",
        title: "Incident trackers",
        description: "Incident Trackers is a React app inspired by the traditional \"x days since last incident\" " +
            "signs often found in factories. This straightforward React app operates client-side only and stores its " +
            "data locally. To modify the start date, simply click the day counter in the center of the screen, and a " +
            "drawer will pop out.",
        link: "https://incident-trackers.com/",
        linkText: "incident-trackers.com",
        images: [
            '/it/1.png',
            '/it/2.png',
        ]
    },
    {
        id: "balancer",
        title: "Overwatch balancer",
        description: "This project involves a custom game balancer designed for the video game 'Overwatch.' The " +
            "balancer utilizes a diverse set of data on a player, including skill, roles, and preferred positions, " +
            "to effectively balance a custom game. The tool computes up to 8,916,100,448,256 permutations in the worst " +
            "case, which can be reduced with special edge cases and the removal of mirrored duplicates. An alternative " +
            "method to expedite computation time is to offload the work using GPU acceleration (CUDA).",
        link: "https://github.com/tylerbucher/owbalancer",
        linkText: "github.com/tylerbucher/owbalancer",
        images: [
            '/ow/1.png',
            '/ow/2.png',
            '/ow/3.png',
            '/ow/4.png',
            '/ow/5.png',
        ]
    },
    {
        id: "can",
        title: "CAN scanner / hacking",
        description: "This web app enables real-time interpretation of car CAN data directly in the browser from a " +
            "remote location. A planned feature is to allow users to conduct man-in-the-middle attacks on devices " +
            "connected to the CAN network, enhancing diagnostic capabilities and other tool output.",
        link: "https://github.com/SakerPro",
        linkText: "github.com/SakerPro",
        images: [
            '/scanner/1.png',
            '/scanner/2.jpg',
            '/scanner/3.jpg',
            '/scanner/4.png',
        ]
    },
    {
        id: "other",
        title: "Other projects (non tech related)",
        description: "The images above showcase a variety of projects and ideas I work on in my free time. These " +
            "include, but are not limited to, cars, motorcycles, servers, server racks, and tools.",
        link: "",
        linkText: "",
        images: [
            '/other/1.jpg',
            '/other/2.jpg',
            '/other/3.jpg',
            '/other/4.jpg',
            '/other/5.jpg',
            '/other/6.jpg',
            '/other/7.jpg',
            '/other/8.jpg',
        ]
    }
];

function Projects() {
    return (
        <Container size="xl" py="xl" id={"projects"}>
            <Title order={2} className={classes.title} ta="center" mt="sm">
                Personal and professional projects
            </Title>

            <Text c="dimmed" className={classes.description} mt="md">
                The showcased projects below encompass a blend of personal and professional endeavors. Developed and
                executed over the years by me, Tyler Bucher, these projects offer insight into my technical skills.
                Whether you're interested in gaining a deeper understanding of technical expertise or simply curious
                about my work, I invite you to explore them.
            </Text>

            <SimpleGrid cols={{base: 1, md: 3}} spacing="xl" mt={50}>
                {projects.map(project => (
                    <Card radius="md" withBorder padding="xl" id={project.id} key={project.id}>
                        <Card.Section>
                            <Carousel
                                withIndicators
                                loop
                                classNames={{
                                    root: classes.carousel,
                                    controls: classes.carouselControls,
                                    indicator: classes.carouselIndicator,
                                }}
                            >
                                {project.images.map((image) => (
                                    <Carousel.Slide key={image}>
                                        <Image src={image} height={220}/>
                                    </Carousel.Slide>
                                ))}
                            </Carousel>
                        </Card.Section>
                        <Group justify="space-between" mt="lg">
                            <Text fw={500} fz="lg">
                                {project.title}
                            </Text>
                        </Group>
                        <Stack justify={"space-between"} mt="sm" h={"100%"}>
                            <Text fz="sm" c="dimmed" >
                                {project.description}
                            </Text>
                            <Group justify="left" mt="md" align={"center"} gap={"4"}>
                                <ActionIcon size="lg" color="gray" variant="subtle"
                                            onClick={() => openInNewTab(project.link)}>
                                    <IconLink style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                                </ActionIcon>
                                <Text span fz="sm" c="dimmed">
                                    {project.linkText}
                                </Text>
                            </Group>
                        </Stack>

                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
}

export default Projects;
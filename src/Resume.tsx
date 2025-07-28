import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme, Paper, ThemeIcon, Grid, List, Button, Flex, Divider, ActionIcon, Tooltip, Pill, Box,
} from '@mantine/core';
import {
    IconGauge,
    IconUser,
    IconCookie,
    IconColorSwatch,
    IconPhoto,
    IconDownload,
    IconAdjustments
} from '@tabler/icons-react';
import classes from './Resume.module.css';
import React from "react";

const mockdata = [
    {
        id: 'apex',
        title: 'Senior Software Engineer, APEX',
        subTitle: 'Austin, Texas — 2023 - present',
        items: [
            'Audit cross team pull requests to ensure quality code in production and facilitate group discussion on practices and solutions.',
            'Maintain and enhance mission critical legacy systems used by small and large clients every day.',
            'Investigate and document new solutions / processes for growing client and business needs.',
            'Collaborate with other teams and staff engineers to effectively roll out new systems and solutions.'
        ],
        tech: [
            'GCP', 'Kubernetes', 'Mono-repo', 'Micro services', 'Monolith', 'Kafka', 'GRPC', 'REST', 'Java', 'SQL', 'MongoDB'
        ]
    },{
        id: 'bc',
        title: 'Software Engineer II, BigCommerce',
        subTitle: 'Austin, Texas — 2021 - 2023',
        items: [
            'Engaged closely with direct team and cross-functional teams to architect and maintain mission-critical microservices.',
            'Mentored and empowered SE1s, contributing to their skill development and professional growth.',
            'Actively participated in team code reviews, ensuring the delivery of high-quality code and fostering valuable learning experiences for all team members.'
        ],
        tech: [
            'GCP', 'Kubernetes', 'Micro services', 'Rabbit MQ', 'Redis', 'Scala'
        ]
    },{
        id: 'sf',
        title: 'Software Team Lead, Security Foundations, LLC',
        subTitle: 'Austin, Texas — 2020 - 2021',
        items: [
            'Coordinate with teams to design and implement high-throughput data pipelines.',
            'Crafted responsive front ends using React and deployed applications as Docker containers for optimal scalability.',
            'Engineered and enhanced high-throughput JAVA services, aligning them with project objectives.',
            'Contributed to CUDA and RF (radio frequency) code bases, enhancing the overall end-user experience.'
        ],
        tech: [
            'Embedded', 'Java', 'RF', 'ML', 'CUDA', 'GRPC', 'REST'
        ]
    },{
        id: 'ees',
        title: 'Software Engineer, Elliott Electric Supply',
        subTitle: 'Nacogdoches, Texas — 2019 - 2020',
        items: [
            'Oversaw the management and maintenance of multiple high-throughput .NET web applications.',
            'Innovated and optimized existing code bases for ASP.NET/Blazor web projects and .NET CORE.',
            'Collaborated with internal teams to design and implement APIs, thereby enhancing the end-user experience.',
            'Implemented daily bug fixes and efficiently completed Team Foundation work items.',
            'Collaborated with team members to conceptualize and execute projects in adherence to specifications.'
        ],
        tech: [
            'ASP.NET', 'Lucene', 'IIS', 'IBM DB'
        ]
    }
];

function Resume() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <Paper withBorder radius="md" className={classes.card} key={feature.title} id={feature.id}>
            <ThemeIcon
                size="xl"
                radius="md"
                variant="gradient"
                gradient={{ deg: 0, from: 'pink', to: 'orange' }}
            >
                <IconColorSwatch style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
            </ThemeIcon>
            <Text size="lg" fw={500} mt="md">
                {feature.title}
            </Text>
            <Text size="sm" c="dimmed">
                {feature.subTitle}
            </Text>
            <List size="sm" mt="sm" classNames={{itemLabel: classes.labelFix}}>
                {feature.items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                ))}
            </List>
            <Flex mt='sm' wrap={"wrap"} gap={4}>
                {feature.tech.map((item, index) => (
                    <Pill key={index} bg={theme.colors.dark[5]}>{item}</Pill>
                ))}
            </Flex>
        </Paper>
    ));

    return (
        <Container size="xl" py="xl" id={"resume"}>
            <Title order={2} className={classes.title} ta="center" mt="sm">
                Work experience
                <Tooltip label="Download resume PDF" color="gray" position={"right"}>
                    <ActionIcon
                        variant="subtle"
                        color="gray"
                        ml={"sm"}
                        component="a"
                        href="resume.pdf"
                        target={"_blank"}
                    >
                        <IconDownload style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                </Tooltip>

            </Title>

            <Text c="dimmed" className={classes.description} mt="md">
                Collaborative software engineer, specializing in user driven requirements with a robust background in
                software development. Recognized for consistently delivering quality work across applications,
                documentation and system design.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
            <Divider mt="60" />
        </Container>
    );
}

export default Resume;
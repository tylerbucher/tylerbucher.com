import footerClasses from "./Footer.module.css";
import {ActionIcon, Container, Group, rem, Text} from "@mantine/core";
import {IconBrandGithub, IconBrandLinkedin, IconFlame} from "@tabler/icons-react";
import React from "react";
import {openInNewTab} from "./Helper";

const data = [
    {
        title: 'Resume',
        links: [
            { label: 'APEX', link: '#apex' },
            { label: 'BigCommerce', link: '#bc' },
            { label: 'Security Foundations', link: '#sf' },
            { label: 'Elliott Electric Supply', link: '#ees' },
        ],
    },
    {
        title: 'Projects',
        links: [
            { label: 'JobBox', link: '#jobbox' },
            { label: 'AtlasMaker', link: '#atlas' },
            { label: 'Incident trackers', link: '#incident-tracker' },
            { label: 'Overwatch balancer', link: '#balancer' },
            { label: 'CAN scanner', link: '#can' },
            { label: 'Other projects', link: '#other' },
        ],
    }
];

function Footer() {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={footerClasses.link}
                component="a"
                href={link.link}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={footerClasses.wrapper} key={group.title}>
                <Text className={footerClasses.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={footerClasses.footer}>
            <Container className={footerClasses.inner}>
                <div className={footerClasses.logo}>
                    <Group gap={8}>
                        <IconFlame size={30}/>
                        <Text>
                            Tyler Bucher
                        </Text>
                    </Group>
                    <Text size="xs" c="dimmed" className={footerClasses.description}>
                        For inquiries you can reach me at tylerb318@gmail.com
                    </Text>
                </div>
                <div className={footerClasses.groups}>{groups}</div>
            </Container>
            <Container className={footerClasses.afterFooter}>
                <Text c="dimmed" size="sm">
                    © 2024 - present Tyler Bucher. All rights reserved.
                </Text>
                <Group gap={0} className={footerClasses.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle"
                                onClick={() => openInNewTab("https://github.com/tylerbucher")}>
                        <IconBrandGithub style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle"
                                onClick={() => openInNewTab("https://www.linkedin.com/in/tyler-bucher/")}>
                        <IconBrandLinkedin style={{width: rem(18), height: rem(18)}} stroke={1.5}/>
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default Footer;
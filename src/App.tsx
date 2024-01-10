import React from 'react';
import cx from 'clsx';
import {Button, Container, Divider, Menu, Overlay, Text, Title} from '@mantine/core';
import classes from './App.module.css';
import './App.module.css';
import {useFavicon} from "@mantine/hooks";
import Footer from "./Footer";
import Resume from "./Resume";
import Projects from "./Projects";

function App() {
    useFavicon("flame.svg");

    return (
        <React.Fragment>
            <div className={classes.wrapper}>
                <Overlay color="#000" opacity={0.65} zIndex={1}/>

                <div className={classes.inner}>
                    <Title className={classes.title} >
                        Projects and resume by Tyler Bucher
                    </Title>

                    <Container size={640}>
                        <Text size="lg" className={classes.description}>
                            Specializing in web apps with experience in game engine development, high performance Java
                            code, embedded systems and CUDA (GPU acceleration)
                        </Text>
                    </Container>

                    <div className={classes.controls}>
                        <Button
                            className={classes.control}
                            variant="gradient"
                            gradient={{ deg: 0, from: 'pink', to: 'yellow' }}
                            size="lg"
                            color={"gray"}
                            component="a"
                            href="#resume"
                        >
                            Resume
                        </Button>
                        <Button
                            className={cx(classes.control)}
                            size="lg"
                            variant={"outline"}
                            color={"gray"}
                            component="a"
                            href="#projects"
                        >
                            Projects
                        </Button>
                    </div>
                </div>
            </div>
            <Resume/>
            <Projects/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;

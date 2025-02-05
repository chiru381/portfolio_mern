import React, { Suspense, lazy } from 'react';
import { useTheme } from 'stelios';
import classes from './css/Homepage.module.css';

import Loader from '../../components/Loader/Loader';

const Intropage = lazy(() => {
    return Promise.all([
        import("../../pages/intropage/Intropage"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
const LineDiamondLine = lazy(() => {
    return Promise.all([
        import("../../components/ui/linediamondline/LineDiamondLine"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
const ProjectSet = lazy(() => {
    return Promise.all([
        import("../../components/projectset/ProjectSet"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
const CertificateSet = lazy(() => {
    return Promise.all([
        import("../../components/certificateset/CertificateSet"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
const SkillSet = lazy(() => {
    return Promise.all([
        import("../../components/skillset/SkillSet"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
const ExperienceSet = lazy(() => {
    return Promise.all([
        import("../../components/experience/ExperienceSet"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
const Education = lazy(() => {
    return Promise.all([
        import("../../components/education/EducationSet"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});
const ContactForm = lazy(() => {
    return Promise.all([
        import("../contactpage/ContactPage"),
        new Promise((resolve) => setTimeout(resolve, 500)),
    ]).then(([moduleExports]) => moduleExports);
});

const Homepage = () => {
    const colorPalette = useTheme().theme.colorPalette;

    // Calculate window width - Do not use hooks!
    let certificateset = <CertificateSet title="Latest Certificates" time="latest" type="story" limit="6"/>
    if(window.innerWidth < 400){
        certificateset = <CertificateSet title="Latest Certificates" time="latest" type="story" limit="4"/>
    }

    return (
        <div className={classes.homepage} style={{backgroundColor: colorPalette.primary.appearance === "light" ? "white" : "#202124"}}>
            <Suspense fallback={<div style={{height: "600px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}><Loader/></div>}>
                <Intropage/>
                <LineDiamondLine/>
                <ProjectSet title="Latest Projects" time="latest" limit="3"/>
                <LineDiamondLine/>
                {certificateset}
                <LineDiamondLine/>
                <SkillSet title="High Rated Skills" time="latest" limit="6" />
                <LineDiamondLine/>
                <ExperienceSet title="Experience" time="latest" limit="2" />
                <LineDiamondLine/>
                <Education title="Education" time="latest" limit="2" />
                <LineDiamondLine/>
                <ContactForm title="Contact Me" />
            </Suspense>
        </div>
    )
};

export default Homepage;
import { Avatar, Button, Card, List, ListItem, Text, useTheme } from "stelios";
import profileImage from "../../assets/images/profile.jpg";

const Intropage = () => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    const _primaryBgColor = useTheme().theme.colorPalette.primary.accentScale[8]
    const _primaryColor = useTheme().theme.colorPalette.primary.accentContrast;

    return (
        <>
        <Card
            animate="fade-in"
            variant="neumorph"
            color="primary"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
                flexWrap: "wrap"
            }}
        >
        <>
            <div
                style={{
                    flex: "1 1 30%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <Avatar
                    size="xlarge"
                    type="image"
                    src={profileImage}
                    alt="Profile Image"
                />
                <Text
                    variant="h4"
                    color="primary"
                    size="large"
                    fontFamily='"Alegreya", serif;'
                    style={{ marginTop: "1rem", textAlign: "center" }}
                >
                    Chiranjeevi Kosanam
                </Text>
            </div>
            <div style={{ flex: "1 1 65%", padding: "1rem 0" }}>
                <List color="primary" title={<Text color="primary" size="large">Full Stack Developer</Text>} style={{ gap: "0.25rem" }}>
                    <ListItem><Text preciseColor={_color} size="medium">Master Of Computer Applications (MCA) Completed in 2020.</Text></ListItem>
                    <ListItem><Text preciseColor={_color} size="medium" style={{marginTop: "0.5rem"}}>I have 3.8 years of experience as a MERN Stack Developer, specializing in building scalable web applications.</Text></ListItem>
                    <ListItem><Text preciseColor={_color} size="medium" style={{marginTop: "0.5rem"}}>Worked on Single Page Applications (SPA) in Reactjs.</Text></ListItem>
                    <ListItem><Text preciseColor={_color} size="medium" style={{marginTop: "0.5rem"}}>Worked on Development, Testing, Debugging, Review and Execution of the project modules as well.</Text></ListItem>
                </List>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", columnGap: "2rem", rowGap: "1rem", flexWrap: "wrap" }}>
                <Button variant="neumorph" color="primary" onClick={() => window.open("https://drive.google.com/drive/u/1/my-drive")} style={{ backgroundColor: _primaryBgColor, color: _primaryColor , border:0 }}>View Resume</Button>
                <Button variant="neumorph" color="primary" onClick={() => {window.open("https://www.linkedin.com/in/chiranjeevi-kosanam-454805169/")}}>LinkedIn Profile</Button>
            </div>
            </div>
        </>
        </Card>
        </>
    );
};

export default Intropage;

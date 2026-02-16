import { List, ListItem, Text, useTheme } from 'stelios';
import { Link } from 'react-router-dom';
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';
import classes from './css/Footer.module.css';

const Footer = () => {
    const colorPalette = useTheme().theme.colorPalette;
    const _primaryBgColor = colorPalette.primary.accentScale[8];

    return (
        <div className={classes.footer} style={{ backgroundColor: _primaryBgColor }}>
            <div className={classes.footerContent}>
                <Text variant="div" fontSize="2rem" style={{ textAlign: "center", marginTop: "36px", color: "white", lineHeight: "1.25" }}>
                    Thank you for visiting
                </Text>

                {/* Contact Information */}
                <div className={classes.contactInfo}>
                    <Text size="large" color="white" className={classes.contactItem}>
                        <IconMail size={20} /> chirukosanam123@gmail.com
                    </Text>
                    <Text size="large" color="white" className={classes.contactItem}>
                        <IconPhone size={20} /> +91 9010813851
                    </Text>
                    <Text size="large" color="white" className={classes.contactItem}>
                        <IconMapPin size={20} /> Visakhapatnam, India
                    </Text>
                </div>

                {/* Footer Menu */}
                <div className={classes.footerMenuComplete} style={{ marginTop: "24px" }}>
                    <div className={classes.footerMenu}>
                        <List className={classes.footerMenuContent} style={{ padding: "0 0 0 12px", margin: 0, display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center" }}>
                            <ListItem><Link style={{ color: "white" }} to="/">Home</Link></ListItem>
                            <ListItem><Link style={{ color: "white" }} to="/projects">Projects</Link></ListItem>
                            <ListItem><Link style={{ color: "white" }} to="/skills">Skills</Link></ListItem>
                        </List>

                        {/* Social Links */}
                        <div className={classes.socialLinks}>
                            <Link size="large" to="https://www.linkedin.com/in/chiranjeevi-kosanam-454805169/" className={classes.socialIcon}>
                                <IconBrandLinkedin />
                            </Link>
                            <Link size="large" to="https://github.com/chiru381/" className={classes.socialIcon}>
                                <IconBrandGithub />
                            </Link>
                            <Link size="large" to="https://www.instagram.com/chiru_9010" className={classes.socialIcon}>
                                <IconBrandInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

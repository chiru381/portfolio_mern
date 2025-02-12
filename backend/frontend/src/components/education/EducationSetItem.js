import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Card, List, Tag, ListItem, Text, useTheme } from 'stelios';
import classes from './css/EducationSetItem.module.css';

const EducationSetItem = (props) => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    return (
        <div>
            <div>
                <Card color="primary" className={classes.educationSetItemWrapper} variant="neumorph" style={{padding: 0, marginRight: 20, borderRadius: "16px"}}>
                    <>
                    <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>{props.education}</Text></Tag></ListItem>
                    </List>
                    <div className={classes["timeline-location"]}>
                        <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;{props.location}</Text>
                        <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;{props.category[0]} - {props.category[1]}&nbsp;&nbsp;</Text>
                    </div>
                    <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                        <ListItem><Text size="small" preciseColor={_color}>{props.institute}</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>{props.university}</Text></ListItem>
                        </List>
                    </List>
                    </>
                </Card>
            </div>
        </div>
    );
};

export default EducationSetItem;
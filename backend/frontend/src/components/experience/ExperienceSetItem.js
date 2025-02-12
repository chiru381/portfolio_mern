import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Card, List, ListItem, Tag, Text, useTheme } from 'stelios';
import classes from './css/ExperienceSetItem.module.css';

const ExperienceSetItem = (props) => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    return (
        <>
                    <Card color="primary" className={classes.experienceSetItemWrapper} variant="neumorph">
                        <>
                        <Text preciseColor={_color}>{props.jobTitle}</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'><FontAwesomeIcon icon={faLocationPin}/>{props.location}</Text>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>{props.startDate} - {props.endDate}</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                        <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">{props.description}</Text></ListItem> 
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">{props.employmentType}</Text></ListItem>
                        </List>
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>{props.company}</Text></Tag></ListItem>
                        </List>
                        </>
                    </Card>
        </>
  );
}

export default ExperienceSetItem;
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
                        <Text preciseColor={_color}>{props.idTitle}</Text>
                        <div className={classes["timeline-location"]}>
                            <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;{props.title}</Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>July 2021 - January 2022&nbsp;&nbsp;</Text>
                        </div>
                        <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">{props.category[0]}</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">{props.category[1]}</Text></ListItem>
                            <ListItem className={classes["timeline-description-item"]}><Text preciseColor={_color} size="small" variant="paragraph">{props.category[2]}</Text></ListItem> 
                        </List>
                        <List variant="unordered" size="small" style={{padding: 0, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: "1rem", flexWrap: "wrap"}} color="primary">
                            <ListItem><Tag variant="outlined" color="black"><Text fontSize='0.875rem' size="small" preciseColor={_color}>{props.description}</Text></Tag></ListItem>
                        </List>
                        </>
                    </Card>
        </>
  );
}

export default ExperienceSetItem;
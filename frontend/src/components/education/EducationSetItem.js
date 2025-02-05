import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Card, List, ListItem, Text, useTheme } from 'stelios';
import classes from './css/EducationSetItem.module.css';

const EducationSetItem = (props) => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";
    return (
        <div>
            <div>
                <Card color="primary" className={classes.educationSetItemWrapper} variant="neumorph" style={{padding: 0, marginRight: 20, borderRadius: "16px"}}>
                    <>
                    <Text preciseColor={_color}>{props.title}</Text>
                    <div className={classes["timeline-location"]}>
                        <Text size="small" preciseColor={_color} variant='span'>&nbsp;<FontAwesomeIcon icon={faLocationPin}/>&nbsp;&nbsp;{props.description}</Text>
                        <Text size="small" preciseColor={_color}><FontAwesomeIcon icon={faCalendar}/>&nbsp;&nbsp;June 2018 - November 2020&nbsp;&nbsp;</Text>
                    </div>
                    <List className={classes["timeline-description"]} size='small' style={{gap:"0.25rem", paddingLeft: "1rem"}}>
                        <ListItem><Text size="small" preciseColor={_color}>{props.idTitle}</Text></ListItem> 
                        <List style={{paddingLeft: 0, marginTop: 0}}>
                            <ListItem className={classes["timeline-description-item"]}><Text size="small" preciseColor={_color}>{props.content}</Text></ListItem>
                        </List>
                    </List>
                    </>
                </Card>
            </div>
        </div>
    );
};

export default EducationSetItem;
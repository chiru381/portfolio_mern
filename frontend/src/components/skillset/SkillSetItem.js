import { Fragment } from 'react';
import { Card, Text, useTheme } from 'stelios';

import classes from './css/SkillSetItem.module.css';

const SkillSetItem = (props) => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

    return (
        <Fragment>
            <Card color="primary" className={classes.skillSetItemWrapper} variant="neumorph" style={{padding: 0, marginRight: 20, borderRadius: "16px"}}>
                <>
                    <img src={props.image} alt={props.alt}/>
                    <Text style={{marginTop:"0.5rem", marginBottom: "0.5rem"}} size="small" preciseColor={_color} className={classes.skillDescription}>{props.name}</Text>
                </>
            </Card>
        </Fragment>
    );
};

export default SkillSetItem;
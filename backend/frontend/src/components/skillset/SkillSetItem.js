import { Fragment } from 'react';
import { Card, Text, useTheme } from 'stelios';
import { FaStar, FaRegStar } from 'react-icons/fa';  // Import star icons
import classes from './css/SkillSetItem.module.css';

const SkillSetItem = (props) => {
    const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

    // Generate star rating based on skill rating (out of 5)
    const renderStars = (rating) => {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                {Array.from({ length: 5 }, (_, index) =>
                    index < rating ? <FaStar key={index} color="gold" size={14} /> : <FaRegStar key={index} color="gray" size={14} />
                )}
            </div>
        );
    };

    return (
        <Fragment>
            <Card color="primary" className={classes.skillSetItemWrapper} variant="neumorph" style={{ padding: 0, marginRight: 20, borderRadius: "16px" }}>
                <>
                    <img src={props.image} alt={props.alt} />
                    <Text style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }} size="small" preciseColor={_color} className={classes.skillDescription}>
                        {props.name}
                    </Text>
                    {renderStars(props.rating)} {/* Render Star Rating */}
                </>
            </Card>
        </Fragment>
    );
};

export default SkillSetItem;

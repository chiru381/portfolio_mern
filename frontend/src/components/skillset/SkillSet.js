import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Text } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';

import SkillSetItem from './SkillSetItem';
import getAxiosRequest from '../../util/getAxiosRequest';
import classes from './css/SkillSet.module.css'

const SkillSet = (props) => {
    const [skills, setSkills] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        let isMounted = true;
        const fetchSkills = async () => {
            if (props.time === "latest") {
                let query="";
                if(props.category){
                    query = query + "category=" + props.category +"&";
                }
                if(props.limit){
                    query = query + "limit=" + props.limit +"&";
                }
                if(query){
                    const res = await getAxiosRequest("skills/?"+ query);
                    setSkills(res.data);
                }
                else{
                    const res = await getAxiosRequest("skills/?"+query);
                    setSkills(res.data);
                }
            }
        }
        
        if(isMounted)
          fetchSkills();

        return () => { isMounted = false };
    },[props.category,props.limit,props.time,props.type]);

    let currentPageData = skills.map((skill,index) => <SkillSetItem key={index} _id={skill._id} idTitle={skill.idTitle} rating={skill.imageCaption} name={skill.title} image={skill.coverImage} alt={skill.imageAlt}/>);

    if (skills.length === 0){
        currentPageData = <p>No Skills found</p>
    }

    return (
        <div className={classes.skillSetWrapper}>  
            <Link variant="hover" to="" onClick={() => navigate("/skills")} color="primary" size="large" className={classes.skillSetTitle} style={{marginTop: "1rem", justifyContent: "center", alignItems: "center", display: 'flex'}}><Text size="large" color="primary">{props.title}</Text> <IconArrowRight/></Link>
            <div className={classes.skillSetItemWrapper} style={{marginTop: "2rem"}}>
                {currentPageData}
            </div>
        </div>
    );
};

export default SkillSet;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, Link } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';
import 'react-spinning-wheel/dist/style.css';

import classes from './css/ExperienceSet.module.css';
import ExperienceSetItem from './ExperienceSetItem';
import Loading from '../Loading/Loading';

const ExperienceSet = (props) => {
    const [experience, setExperience] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchExperience = async () => {
          if (props.time === "latest") {
            let query="";
            if(params.category){
              query = query + "category=" + params.category +"&";
            }
            if(props.limit){
              query = query + "limit=" + props.limit +"&";
            }
            if(query){
              const res = await axios.get("https://portfolio-8ir6.onrender.com/api/experience/?"+ query);
              setExperience(res.data);
            }
            else{
              const res = await axios.get("https://portfolio-8ir6.onrender.com/api/experience/");
              setExperience(res.data);
            }
            setIsLoading(false);
          }
        }
        fetchExperience();
      }, [props.time, props.type, params.category, props.limit]);
      
      let currentPageData = Array.isArray(experience)
      ? experience.map((experience,index) => 
        <div key={experience._id}>
        <ExperienceSetItem key={experience._id} id={experience._id} jobTitle={experience.jobTitle} description={experience.description} company={experience.company} location={experience.location}
        employmentType={experience.employmentType} startDate = {experience.startDate} endDate={experience.endDate} isCurrent={experience.isCurrent} technologies={experience.technologies} /> 
      </div>
      ) : [];
    
      if(isLoading){
        return (<div>
          <Loading />
        </div>
        );
      }
      else if (experience.length === 0) {
        currentPageData = <p>No experience found</p>
      }

    return (
        <div className={classes.experienceSetWrapper}>
            <Link variant="hover" to="" onClick={() => navigate("/experience")} color="primary" size="large" className={classes.experienceSetTitle} style={{marginTop: "1rem", justifyContent: "center", alignItems: "center", display: 'flex'}}><Text size="large" color="primary">{props.title}</Text> <IconArrowRight/></Link>
            <div className={classes.experienceSetCollection} style={{marginTop: "1rem"}}>
                {currentPageData}
            </div>
        </div>
  );
}

export default ExperienceSet;
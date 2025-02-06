import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, Link } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';
import 'react-spinning-wheel/dist/style.css';

import classes from './css/EducationSet.module.css';
import EducationSetItem from './EducationSetItem';
import getAxiosRequest from '../../util/getAxiosRequest';
import Loading from '../Loading/Loading';

const EducationSet = (props) => {
    const [education, setEducation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEducation = async () => {
          if (props.time === "latest") {
            let query="";
            if(params.category){
              query = query + "category=" + params.category +"&";
            }
            if(props.limit){
              query = query + "limit=" + props.limit +"&";
            }
            if(query){
              const res = await getAxiosRequest("education/?"+ query);
              setEducation(res.data);
            }
            else{
              const res = await getAxiosRequest("education/");
              setEducation(res.data);
            }
            setIsLoading(false);
          }
        }
        fetchEducation();
      }, [props.time, props.type, params.category, props.limit]);
      
      let currentPageData = education.map((education,index) => <EducationSetItem key={education._id} id={education._id} education={education.education} institute={education.institute} location={education.location} university={education.university} category={education.category} />);
    
      if(isLoading){
        return (<div>
          <Loading />
        </div>
        );
      }
      else if (education.length === 0) {
        currentPageData = <p>No education found</p>
      }

    return (
        <div className={classes.educationSetWrapper}>
        <Link variant="hover" to="" onClick={() => navigate("/education")} color="primary" size="large" className={classes.educationSetTitle} style={{marginTop: "1rem", marginBottom: "2rem", justifyContent: "center", alignItems: "center", display: 'flex'}}><Text size="large" color="primary">{props.title}</Text> <IconArrowRight/></Link>
            <div className={classes.educationSetCollection} style={{marginTop: "1rem"}}>
                {currentPageData}
            </div>
        </div>
    );
};

export default EducationSet;
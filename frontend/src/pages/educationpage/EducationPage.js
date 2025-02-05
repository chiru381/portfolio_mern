import EducationSet from '../../components/education/EducationSet';
import classes from './css/EducationPage.module.css';

const EducationPage = (props) => {
  return (
    <div className={classes.educationspage}>
        <EducationSet title="All Educations" time="latest" type="education"/>
    </div>
  );
};

export default EducationPage;
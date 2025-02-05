import ExperienceSet from '../../components/experience/ExperienceSet';
import classes from './css/ExperiencePage.module.css';

const ExperiencePage = (props) => {
  return (
    <div className={classes.experiencespage}>
        <ExperienceSet title="All Experiences" time="latest" type="experience"/>
    </div>
  );
};

export default ExperiencePage;
import { Card, Text, useTheme } from 'stelios';
import { Link } from 'react-router-dom'; // Import useNavigate
import classes from './css/ProjectSetItem.module.css';

const ProjectSetItem = (props) => {
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

  let coverImage;
  if (props.coverImage) {
    coverImage = <div className={classes.image}><img src={props.coverImage} alt={props.imageAlt} /></div>;
  }
  
  return (
    <Card 
      animate="fade-in" 
      clickable 
      variant="neumorph" 
      style={{ padding: 0, border: 0, flexBasis: "30%" }} 
      color="primary" 
      className={classes.projectSetItemWrapper} 
    >
      <div className={classes.projectSetItem}>
        {coverImage}
        <div className={classes.content}>
          <Text variant="h5" style={{ marginTop: "1rem" }} color="primary" size="medium" >
            {props.title}
          </Text>
          <Text size="small" preciseColor={_color} style={{ marginTop: "1rem" }} className={classes.description}>
            {props.description}
          </Text>
          <Text size="small" preciseColor={_color} style={{ marginTop: "1rem" }} className={classes.description}>
            <Link to={`/project/${props.id}`} className="mt-3 inline-block">
                  <button className="btn btn-sm border-2 border-transparent bg-primary hover:bg-transparent text-white hover:border-primary duration-500">
                      See Details
                  </button>
            </Link>
          </Text>
        </div>
      </div>
    </Card>
  );
};

export default ProjectSetItem;

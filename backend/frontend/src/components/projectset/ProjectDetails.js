import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Text, Loader, List, ListItem, Card, useTheme } from 'stelios';

import getAxiosRequest from '../../util/getAxiosRequest';
import classes from './css/ProjectDetails.module.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

  useEffect(() => {
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const response = await getAxiosRequest(`projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
      setIsLoading(false);
    };

    fetchProject();
  }, [id]);

  if (isLoading) {
    return <Loader color="primary" />;
  }

  if (!project) {
    return <Text variant="span" color="red">Project not found</Text>;
  }

  return (
    <Card
      animate="fade-in"
      variant="neumorph"
      color="primary"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        margin: "80px",
        width: "100%",
        flexWrap: "wrap"
      }}
      className={classes.projectContainer}
    >
      <div className={classes.projectContainer}>
        {/* Left Side - Project Image */}
        <div className={classes.imageContainer}>
          {project.coverImage && (
            <img src={project.coverImage} alt={project.title} className={classes.projectImage} />
          )}
        </div>

        {/* Right Side - Project Details */}
        <div className={classes.detailsContainer}>
        <List color="primary" title={<Text color="primary" size="large">{project.title}</Text>} style={{ gap: "0.25rem" }}>
          <ListItem><Text preciseColor={_color} size="medium">{project.description}</Text></ListItem>
          <ListItem><Text size="medium">{<Text color="primary" size="large">Technologies Used:</Text>}</Text> <Text preciseColor={_color} size="medium">{project.category[0]}</Text></ListItem>
          <ListItem><Text size="medium">{<Text color="primary" size="large">Role & Responsibilities:</Text>}</Text> 
            <Text preciseColor={_color} size="medium">{project.authors[0]}</Text>
            <Text preciseColor={_color} size="medium">{project.authors[1]}</Text>
            <Text preciseColor={_color} size="medium">{project.authors[2]}</Text>
            <Text preciseColor={_color} size="medium">{project.authors[3]}</Text>
            <Text preciseColor={_color} size="medium">{project.authors[4]}</Text>
            <Text preciseColor={_color} size="medium">{project.authors[5]}</Text>
            <Text preciseColor={_color} size="medium">{project.authors[6]}</Text>
            <Text preciseColor={_color} size="medium">{project.authors[7]}</Text>
          </ListItem>
          <ListItem><Text size="medium">{<Text color="primary" size="large">Duration:</Text>}</Text> <Text preciseColor={_color} size="medium">{project.category[1]}</Text></ListItem>
          <ListItem><Text size="medium">{<Text color="primary" size="large">Team Size:</Text>}</Text> <Text preciseColor={_color} size="medium">{project.category[2]}</Text></ListItem>
          <ListItem><Text size="medium">{<Text color="primary" size="large">Client/Company:</Text>}</Text> <Text preciseColor={_color} size="medium">{project.category[3]}</Text></ListItem>
          <ListItem><Text size="medium">{<Text color="primary" size="large">Challenges & Solutions:</Text>}</Text> <Text preciseColor={_color} size="medium">{project.authors[9]}</Text></ListItem>
        </List>


          {project.link && (
            <Text size="medium" preciseColor={_color}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Project Link</a>
            </Text>
          )}
          
          {/* Back to Projects Button */}
          <div className={classes.backButton}>
            <Link to="/projects">
              <button className="btn btn-sm border-2 border-primary text-primary hover:bg-primary hover:text-white duration-500">
                Back to Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetails;

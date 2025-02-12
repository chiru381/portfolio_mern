import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Text, Link, Loader } from 'stelios';
import { IconArrowRight } from '@tabler/icons-react';

import classes from './css/ProjectSet.module.css';
import ProjectSetItem from './ProjectSetItem.js';
import getAxiosRequest from '../../util/getAxiosRequest';

const ProjectList = ({ posts }) => {
  if (posts.length === 0) {
    return <Text variant='span' color="primary">No Projects found</Text>;
  }

  return (
    <div className={classes.projectSetCollection}>
      { Array.isArray(posts)
      ? posts.map((post, index) => (
        <ProjectSetItem
          key={index}
          id={post._id}
          idTitle={post.idTitle}
          title={post.title}
          description={post.description}
          date={post.createdAt}
          category={post.category}
          isDetailed={post.isDetailed}
          coverImage={post.coverImage}
          content={post.content}
          difficultyType={post.difficultyType}
        />
      )) : []
    }
    </div>
  );
};

const ProjectSet = (props) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContent, setSelectedContent] = useState(""); // Store selected content
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      let query = "";
      if (params.category) {
        query += "category=" + params.category + "&";
      }
      if (props.limit) {
        query += "limit=" + props.limit + "&";
      }
      try {
        const [res] = await Promise.all([
          getAxiosRequest("projects/?" + query),
          new Promise(resolve => setTimeout(resolve, 300))
        ]);
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setPosts([]);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [params.category, props.limit]);

  // Handle filtering based on selected content
  const filteredPosts = selectedContent
    ? posts.filter(post => post.content === selectedContent)
    : posts;

  return (
    <div>
      <Link variant="hover" to="" color="primary" onClick={() => navigate("/projects")} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <Text size="large" color="primary">{props.title}</Text> <IconArrowRight/>
      </Link>
      
      {/* Filter Dropdown */}

      {location.pathname === "/projects" && (

      <div style={{ marginTop: "1rem" }}>
        <Text color='black' size="large">Filter:</Text>
        <select 
          value={selectedContent} 
          onChange={(e) => setSelectedContent(e.target.value)}
          className="custom-select"
        >
          <option value="">All</option>
          {[...new Set(posts.map(post => post.content))].map((content, index) => (
            <option key={index} value={content}>{content}</option>
          ))}
        </select>
      </div>
      )}

      {/* Display Filtered Projects */}
      <div style={{ marginTop: "2rem" }}>
        {isLoading ? (
          <LoadingProjectList limit={props.limit}/>
        ) : (
          <ProjectList posts={filteredPosts} />
        )}
      </div>
    </div>
  );
};

export default ProjectSet;

const LoadingProjectList = ({ limit }) => {
  if (!limit) {
    limit = 9;
  }

  return (
    <div className={classes.loadingSetCollection}>
      {Array.from({ length: limit }).map((_, index) => (
        <Loader key={index} color="primary" style={{ padding: 0, border: 0, flexBasis: "30%", height: "510px" }} className={classes.projectSetItemWrapper} />
      ))}
    </div>
  )
};

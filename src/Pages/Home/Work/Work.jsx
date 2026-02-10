import React, { useEffect, useState } from "react";
import axios from "axios";
import MediaCard from "../../../Components/Card/MediaCard";

export default function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/projects");
        setProjects(res.data);
      } catch (error) {
        console.log("Erreur fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <MediaCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

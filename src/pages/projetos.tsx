import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import InfiniteScroll from "react-infinite-scroll-component";

const PAGE_SIZE = 30;

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
  };
}

function generateImageURL(username: string, repo: string): string {
  return `https://raw.githubusercontent.com/${username}/${repo}/master/exemplo.jpg`;
}

export default function Projetos() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch(
        `https://api.github.com/users/andreocunha/repos?per_page=${PAGE_SIZE}&page=${page}`
      );
      const data: Project[] = await response.json();
      setProjects((prevProjects) => [...prevProjects, ...data]);
      if (data.length < PAGE_SIZE) setHasMore(false);
    }

    fetchProjects();
  }, [page]);

  return (
    <div
      id="projetos"
      className="flex flex-col w-full justify-center items-center pt-20 pb-20 gap-4"
    >
      <h2>Projetos</h2>
      <p>Total de projetos no Github ({projects.length})</p>

      <InfiniteScroll
        dataLength={projects.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={hasMore}
        loader={<h4>Carregando...</h4>}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.name}
            description={project.description}
            githubLink={project.html_url}
            imageUrl={generateImageURL(project.owner.login, project.name)}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

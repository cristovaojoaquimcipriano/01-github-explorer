import { useEffect, useState } from "react";
import "../styles/repositories.scss";
import RepositoryItem from "./RepositoryItem";

// https://api.github.com/orgs/rocketseat/repos
// https://api.github.com/users/cristovaojoaquimcipriano/repos

const repositories = [
  {
    name: "unform",
    description: "Forms in React",
    link: "https://github.com/unform/unform",
  },
  {
    name: "unform2",
    description: "Forms in React",
    link: "https://github.com/unform/unform",
  },
  {
    name: "unform1",
    description: "Forms in React",
    link: "https://github.com/unform/unform",
  },
  {
    name: "unform3",
    description: "Forms in React",
    link: "https://github.com/unform/unform",
  },
];

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  );
}

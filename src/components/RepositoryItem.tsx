import React from "react";
interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export default function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name ?? "Default"}</strong>
      <p>{repository.description}</p>
      <a href={repository.html_url}>Acessar repositorio</a>
    </li>
  );
}

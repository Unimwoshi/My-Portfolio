import GlassCard from "./GlassCard";
import type { Project, ProjectStatus } from "../data/projects";

const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  academic: "Academic project",
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassCard className="card">
      <span className="badge" data-status={project.status}>
        {statusLabel[project.status]}
      </span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      {project.note && <p className="note">{project.note}</p>}
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      {project.link && (
        <a className="link" href={project.link} target="_blank" rel="noreferrer">
          Visit site
        </a>
      )}
    </GlassCard>
  );
}
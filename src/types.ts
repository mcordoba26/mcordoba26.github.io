export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Backend' | 'Systems / Scripting' | 'Frontend';
  tags: string[];
  stars?: number;
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. 'Avanzado', 'Intermedio', 'Especialista'
  iconKey: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface CodeSnippet {
  language: string;
  displayName: string;
  extension: string;
  code: string;
  output: string;
}

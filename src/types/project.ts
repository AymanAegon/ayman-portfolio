import type { Timestamp } from 'firebase/firestore';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortSummary?: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  order: number;
  createdAt: Timestamp;
}

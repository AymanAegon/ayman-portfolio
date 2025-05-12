import type { Project } from '@/types/project';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import type { Timestamp } from 'firebase/firestore';

// Sample data for fallback or development
const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with Stripe integration, user authentication, and an admin dashboard for managing products and orders. Built with Next.js, Firebase, and Tailwind CSS.',
    shortSummary: 'Next.js e-commerce site with Stripe & Firebase.',
    techStack: ['Next.js', 'Firebase', 'Stripe', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveDemoUrl: 'https://ecommerce.example.com',
    order: 1,
    createdAt: { seconds: Date.now() / 1000, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application allowing users to create projects, assign tasks, and track progress. Features real-time updates using Firestore.',
    shortSummary: 'Real-time task management app.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    githubUrl: 'https://github.com/yourusername/task-manager',
    order: 2,
    createdAt: { seconds: Date.now() / 1000, nanoseconds: 0 } as Timestamp,
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    description: 'This very portfolio website, designed to showcase my skills and projects. Built with Next.js and Tailwind CSS, deployed on Vercel.',
    shortSummary: 'My personal portfolio site (this one!).',
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveDemoUrl: '#', // Link to current site
    order: 3,
    createdAt: { seconds: Date.now() / 1000, nanoseconds: 0 } as Timestamp,
  },
];


export async function getProjects(): Promise<Project[]> {
  try {
    const projectsCol = collection(db, 'projects');
    const q = query(projectsCol, orderBy('order', 'asc'));
    const projectSnapshot = await getDocs(q);
    const projectList = projectSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as Project));
    
    if (projectList.length === 0) {
        console.warn("No projects found in Firestore, returning sample data.");
        return sampleProjects;
    }
    return projectList;
  } catch (error) {
    console.error("Error fetching projects from Firestore: ", error);
    console.warn("Returning sample projects due to error.");
    return sampleProjects;
  }
}

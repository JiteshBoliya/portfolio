import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.',
      image: 'assets/project1.jpg',
      techStack: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/yourusername/ecommerce',
      demoLink: 'https://ecommerce-demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      image: 'assets/project2.jpg',
      techStack: ['React', 'Firebase', 'Redux', 'Material UI'],
      githubLink: 'https://github.com/yourusername/task-manager',
      demoLink: 'https://task-manager-demo.com'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive data visualization platform using D3.js to create dynamic charts and graphs for business analytics.',
      image: 'assets/project3.jpg',
      techStack: ['D3.js', 'Express.js', 'PostgreSQL', 'Chart.js'],
      githubLink: 'https://github.com/yourusername/data-viz',
      demoLink: 'https://data-viz-demo.com'
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive social media analytics tool that tracks engagement metrics and provides insights across multiple platforms.',
      image: 'assets/project4.jpg',
      techStack: ['Next.js', 'Python', 'MongoDB', 'AWS'],
      githubLink: 'https://github.com/yourusername/social-analytics',
      demoLink: 'https://social-analytics-demo.com'
    }
  ];
} 
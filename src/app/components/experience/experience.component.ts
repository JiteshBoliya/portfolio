import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2021 - Present',
      responsibilities: [
        'Led a team of 5 developers in building a scalable e-commerce platform using Angular and Node.js',
        'Implemented microservices architecture, reducing system response time by 40%',
        'Developed and maintained RESTful APIs serving over 100,000 daily requests',
        'Integrated payment processing systems (Stripe) and automated billing solutions',
        'Mentored junior developers and conducted code reviews'
      ],
      techStack: ['Angular', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      duration: 'Mar 2019 - Dec 2020',
      responsibilities: [
        'Developed and maintained multiple client-facing web applications using React and Express.js',
        'Implemented real-time features using WebSocket technology',
        'Optimized database queries, improving application performance by 30%',
        'Collaborated with UX/UI designers to implement responsive designs',
        'Participated in agile development processes and sprint planning'
      ],
      techStack: ['React', 'Express.js', 'PostgreSQL', 'Redis', 'WebSocket']
    }
  ];
} 
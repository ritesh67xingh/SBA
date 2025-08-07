import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Outstanding Teaching Approach',
    content:
      'SBA classes made concepts crystal clear with live explanations, real-life examples, and constant mentor support. I feel more confident in Maths and Science now.',
    user: {
      id: 1,
      name: 'Aryan Sharma',
      professional: 'Class 9 Student',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Best Online Learning Platform!',
    content:
      'I joined SBA for Class 10 preparation. The teachers are highly supportive, the app works smoothly, and the test series helped me boost my performance a lot.',
    user: {
      id: 2,
      name: 'Priya Sinha',
      professional: 'Class 10 Student',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Concept Clarity Guaranteed',
    content:
      'I had always struggled with Maths. But SBA’s visual explanations and daily practice sessions have completely changed my mindset. Now I solve problems faster and better.',
    user: {
      id: 3,
      name: 'Mohammad Faizan',
      professional: 'Class 8 Student',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Supportive & Friendly Teachers',
    content:
      'SBA teachers treat every student equally and clear even the smallest doubts. The dual teacher model really helps during live classes.',
    user: {
      id: 4,
      name: 'Ananya Mehta',
      professional: 'Class 7 Student',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Helped Me Score Better',
    content:
      'With SBA’s regular tests and instant feedback, I improved my marks in all subjects. I highly recommend it to all students from Class 6 to 10.',
    user: {
      id: 5,
      name: 'Rahul Verma',
      professional: 'Class 6 Student',
      photo: '5.jpg',
    },
  },
]

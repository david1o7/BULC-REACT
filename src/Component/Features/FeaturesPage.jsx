import React from 'react';
import SlidingDisplay from './CourseSlides.jsx';
import './features.css';
import leaf from '../../assets/edusity_assets/leafpic.png';
import "./features.css"
const courses = [
  {
    id: 'csc101',
    title: 'CSC 101: Intro to CS',
    subtitle: 'Foundations & Problem Solving',
    description: 'Syllabus, lecture notes, and practice problems.',
    image: leaf,
    ctaLabel: 'Open Materials',
    href: '#',
    slots: {
      body: (
        <ul className='slide-text' style={{ marginTop: 2 , marginBottom: 10 }}>
          <li>• 2 Quizzes</li>
        </ul>
      ),
    },
  },
  {
    id: 'mat201',
    title: 'MAT 201: Calculus II',
    subtitle: 'Integrals & Series',
    description: 'PDF notes, solved examples, and past questions.',
    image: leaf,
    ctaLabel: 'Download Pack',
    href: '#',
  },
  {
    id: 'phy112',
    title: 'PHY 112: Electricity & Magnetism',
    subtitle: 'Fields and Circuits',
    description: 'Cheat sheets, lab manuals, and formula sheets.',
    image: leaf,
    ctaLabel: 'View Resources',
    href: '#',
  },
];

export default function FeaturesPage() {
  return (
    <div className="features-page">
      <SlidingDisplay
        items={courses}
        autoPlayMs={6000}
        showDots
        showArrows
        onSlideChange={(i) => {/* analytics hook if needed */}}
      />
    </div>
  );
}

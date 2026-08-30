import React from 'react';
import { Course } from '../data/courses';

type CourseCardProps = Course & {
  variant?: 'accent' | 'green';
};

export default function CourseCard({ code, name, variant = 'accent' }: CourseCardProps) {
  const bgClass = variant === 'green' ? 'bg-accent-light' : 'bg-green-light';

  return (
    <div className={`${bgClass} p-3 w-full sm:w-56`}>
      <div className="text-sm tracking-wide">{code}</div>
      <div className="text-sm opacity-90">{name}</div>
    </div>
  );
}
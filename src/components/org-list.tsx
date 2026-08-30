import React from 'react';
import { Org } from '@/data/courses';

type OrgListProps = {
  title: string;
  orgs: Org[];
};

export default function OrgList({ title, orgs }: OrgListProps) {
  return (
    <div>
      <p
        className="text-white"
        style={{ textDecoration: 'underline', textDecorationColor: '#A3C269', fontSize: '1.1rem' }}
      >
        {title}
      </p>
      <ul className="list-disc pl-6 pt-2">
        {orgs.map((org) => (
          <li key={org.name}>
            {org.name}
            {org.role && <span className="italic"> ({org.role})</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
import React from 'react';
import './index.scss';

export interface WorkCardProps {
  title: string;
  subtitle: string;
}

const WorkCard: React.FunctionComponent<WorkCardProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <article className='work-card'>
      <h1 className='work-card--header'>{title}</h1>
      <h2 className='work-card--subtitle'>{subtitle}</h2>
      {children}
    </article>
  );
};

export default WorkCard;

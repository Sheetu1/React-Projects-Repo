import React from 'react';
import Card from './Card';

const Testimonials = ({ reviews }) => {
  return (
    <div className="w-full max-w-2xl">
      <Card reviews={reviews[0]} />
    </div>
  );
};

export default Testimonials;

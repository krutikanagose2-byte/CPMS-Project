import React from 'react';
import TopicsGrid from './TopicsGrid';

const QuantitativeAptitude = () => {
  const aptitudeTopics = [
    { id: 1, title: 'Number System', questions: 150, color: 'blue' },
    { id: 2, title: 'Percentages', questions: 120, color: 'green' },
    { id: 3, title: 'Profit and Loss', questions: 110, color: 'purple' },
    { id: 4, title: 'Simple & Compound Interest', questions: 90, color: 'yellow' },
    { id: 5, title: 'Ratio and Proportion', questions: 100, color: 'red' },
    { id: 6, title: 'Averages', questions: 85, color: 'orange' },
    { id: 7, title: 'Time and Work', questions: 130, color: 'blue' },
    { id: 8, title: 'Pipes and Cisterns', questions: 75, color: 'green' },
    { id: 9, title: 'Time, Speed and Distance', questions: 140, color: 'purple' },
    { id: 10, title: 'Problems on Trains', questions: 80, color: 'yellow' },
    { id: 11, title: 'Boats and Streams', questions: 70, color: 'red' },
    { id: 12, title: 'Mixture and Alligation', questions: 95, color: 'blue' },
    { id: 13, title: 'Permutation & Combination', questions: 120, color: 'green' },
    { id: 14, title: 'Probability', questions: 105, color: 'purple' },
    { id: 15, title: 'Mensuration', questions: 110, color: 'orange' },
    { id: 16, title: 'Data Interpretation', questions: 150, color: 'yellow' },
  ];

  return (
    <TopicsGrid 
      topics={aptitudeTopics}
      bannerTitle="Ready to Test Your Aptitude?"
      bannerSubtitle="Take a full length test and analyze your numerical ability."
      bannerButtonText="Take an Online Aptitude Test Now!"
    />
  );
};

export default QuantitativeAptitude;

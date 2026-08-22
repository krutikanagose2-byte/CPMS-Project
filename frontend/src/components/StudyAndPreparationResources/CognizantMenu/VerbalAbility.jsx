import React, { useState } from 'react';
import TopicsGrid from './TopicsGrid';
import QuizComponent from './QuizComponent';

import { readingComprehensionQuestions } from '../../../data/readingComprehensionQuestions';
import { grammarQuestions } from '../../../data/grammarQuestions';
import { sentenceCorrectionQuestions } from '../../../data/sentenceCorrectionQuestions';
import { vocabularyQuestions } from '../../../data/vocabularyQuestions';
import { fillInTheBlanksQuestions } from '../../../data/fillInTheBlanksQuestions';
import { paraJumblesQuestions } from '../../../data/paraJumblesQuestions';
import { errorDetectionQuestions } from '../../../data/errorDetectionQuestions';
import { sentenceCompletionQuestions } from '../../../data/sentenceCompletionQuestions';
import { clozeTestQuestions } from '../../../data/clozeTestQuestions';
import { verbalReasoningQuestions } from '../../../data/verbalReasoningQuestions';

const VerbalAbility = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const verbalTopics = [
    { id: 1, title: 'Reading Comprehension', questions: 20, color: 'blue', data: readingComprehensionQuestions },
    { id: 2, title: 'Grammar', questions: 20, color: 'green', data: grammarQuestions },
    { id: 3, title: 'Sentence Correction', questions: 20, color: 'purple', data: sentenceCorrectionQuestions },
    { id: 4, title: 'Vocabulary', questions: 20, color: 'yellow', data: vocabularyQuestions },
    { id: 5, title: 'Fill in the Blanks', questions: 20, color: 'red', data: fillInTheBlanksQuestions },
    { id: 6, title: 'Sentence Arrangement / Para Jumbles', questions: 20, color: 'orange', data: paraJumblesQuestions },
    { id: 7, title: 'Error Detection', questions: 20, color: 'blue', data: errorDetectionQuestions },
    { id: 8, title: 'Sentence Completion', questions: 20, color: 'green', data: sentenceCompletionQuestions },
    { id: 9, title: 'Cloze Test', questions: 20, color: 'purple', data: clozeTestQuestions },
    { id: 10, title: 'Verbal Reasoning', questions: 20, color: 'yellow', data: verbalReasoningQuestions },
  ];

  const handleTopicClick = (topic) => {
    if (topic.data) {
      setSelectedTopic(topic);
    } else {
      alert(`Content for ${topic.title} will be added soon!`);
    }
  };

  const handleBackToTopics = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    return (
      <QuizComponent 
        topicTitle={selectedTopic.title} 
        questions={selectedTopic.data} 
        onBack={handleBackToTopics} 
      />
    );
  }

  return (
    <TopicsGrid 
      topics={verbalTopics}
      bannerTitle="Ready to Test Your Verbal Ability?"
      bannerSubtitle="Take a full length test and analyze your English skills."
      bannerButtonText="Take an Online Verbal Test Now!"
      onTopicClick={handleTopicClick}
    />
  );
};

export default VerbalAbility;

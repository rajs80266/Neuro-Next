// QuestionsPage.js (React component)
import React, { useState } from 'react';
import './style.css';

const QuestionsPage = () => {
  const questions = [
    {
      id: 1,
      question: 'Does your child look at you when you call his/her name?',
      options: ['Yes', 'No']
    },
    {
      id: 2,
      question: 'How easy is it for you to get eye contact with your child?',
      options: ['Yes', 'No']
    },
    {
      id: 3,
      question: 'Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)',
      options: ['Yes', 'No']
    },
    {
      id: 4,
      question: 'Does your child point to share interest with you? (e.g. pointing at an interesting sight)',
      options: ['Yes', 'No']
    },
    {
      id: 5,
      question: 'Does your child pretend? (e.g. care for dolls, talk on a toy phone)',
      options: ['Yes', 'No']
    },
    {
      id: 6,
      question: 'Does your child follow where you’re looking?',
      options: ['Yes', 'No']
    },
    {
      id: 7,
      question: 'If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)',
      options: ['Yes', 'No']
    },
    {
      id: 8,
      question: 'Would you describe your child’s first words as:',
      options: ['Yes', 'No']
    },
    {
      id: 9,
      question: 'Does your child use simple gestures? (e.g. wave goodbye)',
      options: ['Yes', 'No']
    },
    {
      id: 10,
      question: 'Does your child stare at nothing with no apparent purpose?',
      options: ['Yes', 'No']
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionSelect = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prevQuestion => prevQuestion + 1);
      }, 500); // Delay to simulate button click
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prevQuestion => prevQuestion - 1);
    }
  };

  const handleSubmit = () => {
    // Handle submission of answers (e.g., send to server)
    console.log('User Answers:', userAnswers);
  };

  return (
    <div className="questions-page">
      <h2>{questions[currentQuestion].question}</h2>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <div
            key={index}
            className={`option ${userAnswers[currentQuestion] === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={handlePrev} disabled={currentQuestion === 0}>Prev</button>
        {currentQuestion === questions.length - 1 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
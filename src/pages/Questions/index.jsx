// QuestionsPage.js (React component)
import React, { useState } from 'react';
import './style.css';
import { loadModel, predict } from '../../utils/load_model';

const QuestionsPage = () => {
  const questions = [
    {
      id: 1,
      question: 'Does your child look at you when you call his/her name?',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 2,
      question: 'How easy is it for you to get eye contact with your child?',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 3,
      question: 'Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 4,
      question: 'Does your child point to share interest with you? (e.g. pointing at an interesting sight)',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 5,
      question: 'Does your child pretend? (e.g. care for dolls, talk on a toy phone)',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 6,
      question: 'Does your child follow where you’re looking?',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 7,
      question: 'If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 8,
      question: 'Would you describe your child’s first words as something meaningful?',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 9,
      question: 'Does your child use simple gestures? (e.g. wave goodbye)',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 10,
      question: 'Does your child stare at nothing with no apparent purpose?',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 11,
      question: 'What is your Age? (To the nearest Whole Number)',
      options: ['0', '1', '2', '3', '4'],
      values: [0, 1, 2, 3, 4]
    },
    {
      id: 12,
      question: 'What is your Sex?',
      options: ['Female', 'Male'],
      values: [0, 1]
    },
    {
      id: 13,
      question: 'Did you have jaundice during pregnancy?',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 14,
      question: 'Any family members with ASD diagnosis in the past?',
      options: ['No', 'Yes'],
      values: [0, 1]
    },
    {
      id: 15,
      question: 'What is your Ethnicity?',
      options: ['Latino', 'Native Indian', 'Others', 'Pacific', 'White European', 'Asian', 'Black', 'Middle Eastern', 'Mixed', 'South Asian'],
      values: [0,1,2,3,4,5,6,7,8,9]
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
      }, 500); 
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prevQuestion => prevQuestion - 1);
    }
  };

  const handleSubmit = () => {
    console.log(userAnswers);
    let lastAnswers = [];
    console.log(lastAnswers);
    for (let i = 0; i < 10; i++) {
      if(i == userAnswers[15]) {
        lastAnswers.push(1);
      } else {
        lastAnswers.push(0);
      }
  }
  let selections = userAnswers.slice(0, 14).concat(lastAnswers).join(',');
  window.location = "http://localhost:3000?inputs=" + selections;
    console.log('User Answers:', );
  };

  return (
    <div className="questions-page">
      <h2>{questions[currentQuestion].question}</h2>
      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <div
            key={index}
            className={`option ${userAnswers[currentQuestion] === questions[currentQuestion].values[index] ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(questions[currentQuestion].values[index])}
            style={{ padding: '10px' }}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="navigation">
        <button onClick={handlePrev} disabled={currentQuestion === 0} className='button' style={{ width: '100px', height: '50px' }}>Prev</button>
        {currentQuestion === questions.length - 1 && (
          <button onClick={handleSubmit} disabled={!userAnswers[14] && userAnswers[14] != 0} className='button'>Submit</button>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
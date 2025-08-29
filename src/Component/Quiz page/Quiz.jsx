import React, { useState, useEffect } from 'react'
import "./Quiz.css"
import { quizData } from './data.js'

// Helper function to shuffle an array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

const Quiz = () => {
  // State management
  const [currentState, setCurrentState] = useState('configuration'); // 'configuration', 'quiz', 'results'
  const [selectedCategory, setSelectedCategory] = useState('CSS');
  const [numberOfQuestions, setNumberOfQuestions] = useState(10); // Total questions to ask in this quiz

  // New states for dynamic random question selection
  const [unaskedQuestionsPool, setUnaskedQuestionsPool] = useState([]); // Questions remaining to be asked
  const [askedQuestionsHistory, setAskedQuestionsHistory] = useState([]); // Questions already presented in current quiz session
  const [currentQuestionData, setCurrentQuestionData] = useState(null); // The actual question object currently being displayed
  const [userAnswers, setUserAnswers] = useState([]); // User's selected answers, matches index with askedQuestionsHistory

  const [score, setScore] = useState(0); // Score accumulated per question
  const [timeLeft, setTimeLeft] = useState(25);
  const [timerActive, setTimerActive] = useState(false);
  const [answerSelectedThisTurn, setAnswerSelectedThisTurn] = useState(false); // State for disabling buttons
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false); // State for visual feedback

  // Timer effect
  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && timerActive) {
      // If time runs out, stop timer and show correct answer, but do not auto-advance
      setShowCorrectAnswer(true);
      setTimerActive(false); // Stop timer immediately
      setAnswerSelectedThisTurn(true); // Disable answer options
    }
    return () => clearTimeout(timer);
  }, [timeLeft, timerActive]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleQuestionCountSelect = (count) => {
    setNumberOfQuestions(parseInt(count));
  };

  const handleStartQuiz = () => {
    const initialTime = 25;
    const allCategoryQuestions = quizData[selectedCategory] || [];
    if (allCategoryQuestions.length === 0) {
      console.warn(`No questions found for category: ${selectedCategory}. Cannot start quiz.`);
      setCurrentState('configuration'); // Stay in config or show an error
      return;
    }

    // Shuffle all questions in the category to create the initial pool
    const initialPool = shuffleArray([...allCategoryQuestions]);

    setUnaskedQuestionsPool(initialPool); // This is the pool we will draw from
    setAskedQuestionsHistory([]); // No questions asked yet
    setUserAnswers([]); // No answers yet
    setScore(0);
    setTimeLeft(initialTime);
    setTimerActive(true);
    setAnswerSelectedThisTurn(false);
    setShowCorrectAnswer(false);

    // Load the first question
    if (initialPool.length > 0 && numberOfQuestions > 0) {
      const firstQuestion = initialPool[0];
      setCurrentQuestionData(firstQuestion);
      setAskedQuestionsHistory([firstQuestion]); // Add first question to history
      setUnaskedQuestionsPool(initialPool.slice(1)); // Remove first question from the pool
      setUserAnswers([undefined]); // Initialize answer slot for the first question

      setCurrentState('quiz'); // Transition to quiz state
    } else {
      // Handle case where no questions are available or numberOfQuestions is 0
      console.warn("Cannot start quiz: No questions available or question count is zero.");
      setCurrentState('configuration');
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    if (answerSelectedThisTurn) {
      return;
    }

    // Update the answer for the current question being displayed
    const updatedUserAnswers = [...userAnswers];
    // The current question is always the last one added to askedQuestionsHistory
    updatedUserAnswers[askedQuestionsHistory.length - 1] = answerIndex;
    setUserAnswers(updatedUserAnswers);

    setAnswerSelectedThisTurn(true);
    setShowCorrectAnswer(true);
    setTimerActive(false);
  };

  const handleNextQuestion = () => {
    // Score calculation for the question just answered
    const currentQuestionIndexInHistory = askedQuestionsHistory.length - 1;
    const answeredQuestion = askedQuestionsHistory[currentQuestionIndexInHistory];
    const userAnswerIndex = userAnswers[currentQuestionIndexInHistory];

    // Only update score if an answer was selected and it's correct
    if (userAnswerIndex !== undefined && answeredQuestion && userAnswerIndex === answeredQuestion.correct) {
      setScore(prevScore => prevScore + 1);
    }

    // Determine the total number of questions for this quiz based on user config and available questions
    const totalQuestionsInSelectedCategory = (quizData[selectedCategory] || []).length;
    const effectiveNumberOfQuestions = Math.min(numberOfQuestions, totalQuestionsInSelectedCategory);

    // Check if there are more questions to ask based on the set limit
    if (askedQuestionsHistory.length < effectiveNumberOfQuestions && unaskedQuestionsPool.length > 0) {
      // Pick the next random question from the pool (it's already randomized due to initial shuffle)
      const nextQuestion = unaskedQuestionsPool[0]; // Take the first from the shuffled pool

      setCurrentQuestionData(nextQuestion);
      setAskedQuestionsHistory(prev => [...prev, nextQuestion]); // Add to history
      setUnaskedQuestionsPool(prev => prev.slice(1)); // Remove from pool
      setUserAnswers(prev => [...prev, undefined]); // Initialize answer slot for new question

      setTimeLeft(25);
      setTimerActive(true);
      setAnswerSelectedThisTurn(false);
      setShowCorrectAnswer(false);
    } else {
      // Quiz completed (either asked enough questions or ran out of questions in the pool)
      setCurrentState('results');
      setTimerActive(false);
    }
  };

  const handleTryAgain = () => {
    const initialTime = 25;
    setCurrentState('configuration');
    setUnaskedQuestionsPool([]); // Reset pool
    setAskedQuestionsHistory([]); // Reset history
    setCurrentQuestionData(null); // Clear current question
    setUserAnswers([]);
    setScore(0);
    setTimeLeft(initialTime);
    setTimerActive(false);
    setAnswerSelectedThisTurn(false);
    setShowCorrectAnswer(false);
  };

  // Dynamically determine total questions for display
  const totalQuestionsInCurrentQuiz = Math.min(
    numberOfQuestions,
    (quizData[selectedCategory] || []).length
  );


  // Render the current question or the appropriate state
  const currentQuestionToDisplay = currentQuestionData;

  // Handle error state if no questions are available for a category
  if (currentState === 'quiz' && !currentQuestionToDisplay && askedQuestionsHistory.length === 0) {
    return (
      <div className='body'>
        <div className="error-container">
          <h2>Error: No questions found for the selected category or quiz configuration.</h2>
          <p>Please go back to configuration and select a different category or check the quiz data.</p>
          <button className="start-quiz-btn" onClick={() => setCurrentState('configuration')}>
            Go to Configuration
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Material Symbols Font Imports (unchanged) */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

      <div id='div' className='body'>

        {currentState === 'configuration' && (
          <div className="config-container">
            <h2 className="config-title">QUIZ CONFIGURATION</h2>

            <div className="config-option">
              <h4 className="option-title">SELECT CATEGORY</h4>
              <div className="category-options">
                {Object.keys(quizData).map((category) => (
                  <button
                    key={category}
                    className={`category-option ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="config-option">
              <h4 className="option-title">NO. OF QUESTIONS</h4>
              <div className="question-options">
                {[5, 10, 15, 20, 25, 50].map((count) => (
                  <button
                    key={count}
                    className={`question-option ${numberOfQuestions === count ? 'active' : ''}`}
                    onClick={() => handleQuestionCountSelect(count)}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            <button className="start-quiz-btn" onClick={handleStartQuiz}>
              START QUIZ
            </button>
          </div>
        )}

        {currentState === 'quiz' && currentQuestionData && (
          <div className="quiz-container">
            <header className="quiz-header">
              <h2 className="quiz-title">Quiz Application</h2>
              <div className="quiz-timer">
                <span className="material-symbols-rounded">timer</span>
                <p className="time-duration">{timeLeft}s</p>
              </div>
            </header>

            <div className="quiz-content">
              <h1 className="question-text">{currentQuestionData.question}</h1>
              <ul className="answer-options">
                {currentQuestionData.options.map((option, index) => {
                  // Check the answer for the current question being displayed
                  const currentQuestionAnsweredIndex = askedQuestionsHistory.length - 1;
                  const isSelected = userAnswers[currentQuestionAnsweredIndex] === index;
                  const isCorrectOption = index === currentQuestionData.correct;
                  let className = 'answer-option';

                  // Visual Feedback for Correct/Incorrect Answers
                  if (showCorrectAnswer) {
                    if (isCorrectOption) {
                      className += ' correct';
                    } else if (isSelected && !isCorrectOption) {
                      className += ' incorrect';
                    }
                  } else if (isSelected) {
                    className += ' selected';
                  }

                  return (
                    <li key={index}>
                      <button
                        className={className}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={answerSelectedThisTurn || showCorrectAnswer}
                      >
                        {option}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="quiz-footer">
              <p className="question-status">
                Question {askedQuestionsHistory.length} of {totalQuestionsInCurrentQuiz}
              </p>
              <button
                className="next-question-btn"
                onClick={handleNextQuestion}
                // Only enable the next button after an answer is selected or time runs out
                disabled={!answerSelectedThisTurn && timeLeft > 0}
              >
                {askedQuestionsHistory.length === totalQuestionsInCurrentQuiz ? 'Finish' : 'Next'}
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </button>
            </div>
          </div>
        )}

        {currentState === 'results' && (
          <div className="result-container">
            <div className="celebration-content">
              <h2 className="result-title">🎉 Quiz Completed! 🎉</h2>
              <div className="score-display">
                <h3>Your Score: {score}/{totalQuestionsInCurrentQuiz}</h3>
                <p className="score-percentage">
                  {totalQuestionsInCurrentQuiz > 0 ? Math.round((score / totalQuestionsInCurrentQuiz) * 100) : 0}%
                </p>
              </div>
              <div className="celebration-message">
                {score === totalQuestionsInCurrentQuiz && (
                  <p>🎊 Perfect Score! You're a master! 🎊</p>
                )}
                {score >= totalQuestionsInCurrentQuiz * 0.8 && score < totalQuestionsInCurrentQuiz && (
                  <p>🌟 Excellent! Great job! 🌟</p>
                )}
                {score >= totalQuestionsInCurrentQuiz * 0.6 && score < totalQuestionsInCurrentQuiz * 0.8 && (
                  <p>👍 Good work! Keep learning! 👍</p>
                )}
                {score < totalQuestionsInCurrentQuiz * 0.6 && (
                  <p>📚 Keep practicing! You'll get better! 📚</p>
                )}
              </div>
              <button className="try-again-btn" onClick={handleTryAgain}>
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Quiz;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizSetup from './Components/QuizSetup';
import Quiz from './Components/Quiz';
import Score from './Components/Score';
import Login from './Components/Login';
import { Provider } from 'react-redux';
import store from './Components/Store';


function App() {
  const [quizData, setQuizData] = useState(null);

  return (
    <Provider store={store}>
    <Router>
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<QuizSetup />} />
          <Route path='/Quiz' element={<Quiz />} />
          <Route path='/Score' element={<Score />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;


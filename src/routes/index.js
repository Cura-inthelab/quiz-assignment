import Home from 'pages/Home';
import QuizRouter from './Quiz';
import QuestionRouter from './Question';

export default [
    {
        path: '/',
        element: <Home />,
        errorElement: <div>찾을 수 없는 위치 입니다.</div>,
    },
    QuizRouter,
    QuestionRouter,
];

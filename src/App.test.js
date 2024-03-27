import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// Задача React JS. Реализовать компоненту:

// <ColoredUserpic
//     src='./avatar.png'
//     size={150}
//     margin={4}
//     backgroundColor='red'
//     colors={['green', 'blue']}
//     hoverColors={['blue', 'green']}
//     colorWidth={6}
// />

// Результат рендера это круглая картинка с градиентной обводкой, меняющей цвет при наведении.

// Расстояние между картинкой и обводкой задаётся параметром margin, цвет этого отступа тоже задаётся.

// Пришли zip архив кода + билд, чтоб можно было открыть в браузере. Можно на свой сервер залить, если есть.
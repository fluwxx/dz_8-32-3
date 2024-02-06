import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="app">
        <h1>Пример использования хука useState</h1>
        <p>Текущее значение счетчика: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Увеличить счетчик
        </button>
      </div>
  );
}

export default App;

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders properly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText('任務列表')).toBeInTheDocument();
  expect(getByText('全部')).toBeInTheDocument();
  expect(getByText('進行中')).toBeInTheDocument();
  expect(getByText('已完成')).toBeInTheDocument();
});

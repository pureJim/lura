import React from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

const LoginForm = () => {
  const login = (params: { username: string; password: string }) => {
    fetch(`${apiUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(async res => {
      if (res.ok) {
        return res;
      }
    });
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>用户名</label>
        <input type='text' id='username' />
      </div>
      <div>
        <label htmlFor='password'>密码</label>
        <input type='text' id='password' />
      </div>
      <button type='submit'>注册</button>
    </form>
  );
};

export default LoginForm;

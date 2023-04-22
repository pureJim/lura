import { useAuth } from '@/context/auth-context';
import React from 'react';

const LoginForm = () => {
  const { login, user } = useAuth();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const username = (evt.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (evt.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      {user ? <div>登陆成功，用户名：{user.name}</div> : null}
      <div>
        <label htmlFor='username'>用户名</label>
        <input type='text' id='username' />
      </div>
      <div>
        <label htmlFor='password'>密码</label>
        <input type='password' id='password' />
      </div>
      <button type='submit'>登陆</button>
    </form>
  );
};

export default LoginForm;

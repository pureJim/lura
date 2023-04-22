import React, { ReactNode, useState } from 'react';
import * as auth from '@/components/wrapper/auth-provider';
import { User } from '@/views/project-list/search-panel';

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // point free  user => setUser(user)  -> setUser
  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />;
};

/**hook 包装了 useContext */
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 必须在 AuthProvider 中使用');
  }
  return context;
};

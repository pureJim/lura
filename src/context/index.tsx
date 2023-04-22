import { FC, ReactNode } from 'react';
import { AuthProvider } from './auth-context';

interface IAppProps {
  children: ReactNode;
}

export const AppProvider: FC<IAppProps> = props => {
  return <AuthProvider>{props.children}</AuthProvider>;
};

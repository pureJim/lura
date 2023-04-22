import { useEffect, useState } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchPanelProps['param']) => void;
}

export const SearchPanel = () => {
  const [param, setParam] = useState({
    name: '',
    personId: '',
  });
  const [users] = useState<{ id: string; name: string }[]>([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('').then(async res => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [param]);

  return (
    <form>
      <div>
        <input type='text' value={param.name} onChange={evt => setParam({ ...param, name: evt.target.value })}></input>
        <select value={param.personId} onChange={evt => setParam({ ...param, personId: evt.target.value })}>
          <option value={''}>负责人</option>
          {users.map(user => (
            <option value={user.id}>{user.name}</option>
          ))}
          {list}
        </select>
      </div>
    </form>
  );
};

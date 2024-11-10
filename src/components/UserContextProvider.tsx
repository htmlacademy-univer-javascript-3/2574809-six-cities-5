import { createContext, useMemo, useState } from 'react';

type UserData = {
    logged: boolean;
    email?: string;
    avatarUrl?: string;
  };

type UserDataContext = {
    user: UserData;
    logout: () => void;
    login: () => void;
  };

const defaultUserDataValue = {
  logged: false,
};

const defaultContextValue: UserDataContext = {
  user: defaultUserDataValue,
  logout: () => {},
  login: () => {},
};

export const UserContext = createContext<UserDataContext>(defaultContextValue);

export const UserContextProvider = ({ children }: {children: JSX.Element}) => {
  const [userData, setUserData] = useState<UserData>(defaultUserDataValue);

  const logout = () => setUserData(defaultUserDataValue);
  const login: UserDataContext['login'] = () => {
    setUserData({
      logged: true
    });
  };

  const contextValue = useMemo(
    () => ({
      user: userData,
      logout,
      login,
    }),
    [userData],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

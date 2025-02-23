import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

export type LoginStateType = 'signin' | 'join' | 'signup';

interface LoginValueType {
  currentState: LoginStateType;
}

type Action =
  | { type: 'GO_TO_SINGIN' }
  | { type: 'GO_TO_JOIN' }
  | { type: 'GO_TO_SIGNUP' };

const LoginStepContext = createContext<{
  state: LoginValueType;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const reducer = (state: LoginValueType, action: Action): LoginValueType => {
  switch (action.type) {
    case 'GO_TO_SINGIN':
      return { currentState: 'signin' };
    case 'GO_TO_JOIN':
      return { currentState: 'join' };
    case 'GO_TO_SIGNUP':
      return { currentState: 'signup' };
    default:
      return state;
  }
};

const initialState: LoginValueType = { currentState: 'signin' };

export const LoginStepProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <LoginStepContext.Provider value={value}>
      {children}
    </LoginStepContext.Provider>
  );
};

export const useLoginStep = () => {
  const context = useContext(LoginStepContext);
  if (!context) {
    throw new Error('LoginStepProvider 내부에서 사용해야 합니다.');
  }
  return context;
};

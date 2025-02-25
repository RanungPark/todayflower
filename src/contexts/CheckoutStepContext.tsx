import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';

type CheckoutStateType = 'done' | 'curr' | 'pending';
export type Step = 'firstStep' | 'secondStep' | 'thirdStep';

type CheckoutStep = {
  title: string;
  sub: string;
  state: CheckoutStateType;
};

type CheckoutValueType = Record<Step, CheckoutStep>;

type Action =
  | { type: 'STEP_DONE'; step: Step }
  | { type: 'STEP_CLICK'; step: Step };

const CheckoutStepContext = createContext<{
  state: CheckoutValueType;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const initialState: CheckoutValueType = {
  firstStep: {
    title: '1 Contact Information',
    sub: 'information',
    state: 'curr',
  },
  secondStep: {
    title: '2 Shipping Details',
    sub: 'shipping',
    state: 'pending',
  },
  thirdStep: { title: '3 Payment', sub: 'payment', state: 'pending' },
};

const reducer = (
  state: CheckoutValueType,
  action: Action,
): CheckoutValueType => {
  const stepOrder: Step[] = ['firstStep', 'secondStep', 'thirdStep'];
  const stepIndex = stepOrder.indexOf(action.step);

  if (action.type === 'STEP_DONE') {
    return {
      firstStep: {
        ...state.firstStep,
        state: stepIndex >= 0 ? 'done' : 'pending',
      },
      secondStep: {
        ...state.secondStep,
        state: stepIndex === 1 ? 'done' : stepIndex === 0 ? 'curr' : 'pending',
      },
      thirdStep: {
        ...state.thirdStep,
        state: stepIndex === 2 ? 'done' : stepIndex === 1 ? 'curr' : 'pending',
      },
    };
  }

  if (action.type === 'STEP_CLICK') {
    return {
      firstStep: {
        ...state.firstStep,
        state: stepIndex === 0 ? 'curr' : 'done',
      },
      secondStep: {
        ...state.secondStep,
        state: stepIndex === 1 ? 'curr' : stepIndex > 1 ? 'done' : 'pending',
      },
      thirdStep: {
        ...state.thirdStep,
        state: stepIndex === 2 ? 'curr' : 'pending',
      },
    };
  }

  return state;
};

export const CheckoutStepProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CheckoutStepContext.Provider value={value}>
      {children}
    </CheckoutStepContext.Provider>
  );
};

export const useCheckoutStep = () => {
  const context = useContext(CheckoutStepContext);
  if (!context) {
    throw new Error('CheckoutStepProvider 내부에서 사용해야 합니다.');
  }
  return context;
};

import { LoginStepProvider } from '@contexts/LoginStepContext';
import { useUserStore } from '@store/userStore';

import Done from './components/Done';
import Forms from './forms';

const Login = () => {
  const { isLoggedIn } = useUserStore();
  return (
    <LoginStepProvider>{isLoggedIn ? <Done /> : <Forms />}</LoginStepProvider>
  );
};

export default Login;

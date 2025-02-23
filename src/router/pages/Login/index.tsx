import { LoginStepProvider } from '@contexts/LoginStepContext';
import { useUserStore } from '@store/userStore';

import Done from './components/Done';
import Forms from './Forms';

const Login = () => {
  const { isLoggedIn } = useUserStore();
  return (
    <LoginStepProvider>{isLoggedIn ? <Done /> : <Forms />}</LoginStepProvider>
  );
};

export default Login;

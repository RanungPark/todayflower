import {getAuth, signOut} from 'firebase/auth';
import {useCallback} from 'react';
import {useNavigate} from 'react-router';

import {useUserStore} from '@store/userStore';
import {Button} from '@todayflower-public/ui';

const LogoutButton = () => {
  const navigate = useNavigate();
  const {logout} = useUserStore();

  const handleSignout = useCallback(async () => {
    const auth = getAuth();
    await signOut(auth);
    logout();
    navigate('/');
  }, [logout]);

  return (
    <Button theme="secondary" full onClick={handleSignout}>
      logout
    </Button>
  );
};

export default LogoutButton;

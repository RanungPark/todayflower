import {useState, useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';

import {useUserStore} from '@store/userStore';
import {auth} from '@remote/firebase';

function AuthGuard({children}: {children: React.ReactNode}) {
  const [initialize, setInitialize] = useState(false);
  const {login, logout} = useUserStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user != null) {
        login({
          uid: user.uid,
          email: user.email ?? '',
          displayName: user.displayName ?? '',
          photoURL: user.photoURL ?? '',
        });
      } else {
        logout();
      }

      setInitialize(true);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  if (initialize === false) {
    return null; // 스플레쉬 이미지 추가
  }

  return <>{children}</>;
}

export default AuthGuard;

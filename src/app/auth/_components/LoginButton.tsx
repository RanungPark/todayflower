import styled from 'styled-components';
import {useNavigate} from 'react-router';
import {FirebaseError} from 'firebase/app';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {collection, doc, getDoc, setDoc} from 'firebase/firestore';

import {COLLECTIONS} from '@constants/callection';
import {Button, SVG} from '@todayflower-public/ui';
import Google from '@assets/icons/wght300/Brands/Google.svg';
import {auth, fireStore} from '@remote/firebase';

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const LoginButton = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider 구글 설정

    try {
      const {user} = await signInWithPopup(auth, provider); // 팝업창 띄워서 로그인

      // 중복 체크
      const ref = await getDoc(doc(collection(fireStore, COLLECTIONS.USER), user.uid));

      if (ref.exists() === true) {
        navigate('/');
        return;
      }

      // 새로운 유저
      const newUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoUrl: user.photoURL || 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
      };

      await setDoc(doc(collection(fireStore, COLLECTIONS.USER), user.uid), newUser);

      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/cancelled-popup-request') {
          return;
        }
      }

      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <Button theme="secondary" onClick={handleGoogleLogin} full>
      <Text>
        <SVG src={Google} />
        continue with google
      </Text>
    </Button>
  );
};

export default LoginButton;

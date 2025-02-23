import { useMutation } from '@tanstack/react-query';

const fetchLogin = async (username: string) => {
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useLoginIdMutations = (onSuccess: (data: any) => void) => {
  const mutation = useMutation({
    mutationFn: (username: string) => fetchLogin(username),
    onSuccess,
    onError: (error: any) => {
      console.error('Login failed:', error);
    },
  });

  return mutation;
};

export default useLoginIdMutations;

import { useMutation } from '@tanstack/react-query';

const fetchJoin = async (username: string, password: string, type: string) => {
  const response = await fetch(`/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, type }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const useJoinMutations = (
  onSuccess: (data: any) => void,
  onError: (error: any) => void,
) => {
  const mutation = useMutation({
    mutationFn: ({
      username,
      password,
      type,
    }: {
      username: string;
      password: string;
      type: string;
    }) => fetchJoin(username, password, type),
    onSuccess,
    onError,
  });

  return mutation;
};

export default useJoinMutations;

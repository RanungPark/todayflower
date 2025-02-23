import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';

import PrimaryButton from '@components/buttons/PrimaryButton';
import InputFiled from '@components/inputField';
import { REG_EMAIL } from '@constants/reg';
import { subscriptionDone, subscriptionFail } from '@constants/toast';
import { useUserStore } from '@store/userStore';

interface FooterRemindForm {
  remind: string;
}

const FooterRemind = () => {
  const methods = useForm<FooterRemindForm>();
  const { isLoggedIn, setSubscribe } = useUserStore();

  const handleSubscription = ({ remind }: FooterRemindForm) => {
    if (!isLoggedIn) {
      subscriptionFail('로그인을 해주세요');
      return;
    }

    if (remind.trim() === '') {
      subscriptionFail('이메일을 작성해주세요');
      return;
    }

    if (!REG_EMAIL.test(remind)) {
      subscriptionFail('이메일 형식으로 작성해주세요');
      return;
    }

    subscriptionDone(remind);
    setSubscribe(true);
    methods.reset({ remind: '' });
  };

  return (
    <FooterRemindWrapper>
      <p>
        오늘의 꽃을 통해 발렌타인데이, 어버이날, 크리스마스...에서 아름다운 꽃을
        제공하는 것을 잊지 마세요... 7일 전에 알려드립니다. 스팸 또는 주소 공유
        금지
      </p>
      <FormProvider {...methods}>
        <FooterRemindForm onSubmit={methods.handleSubmit(handleSubscription)}>
          <InputFiled input={{ id: 'remind', placeholder: 'Your Email' }} />
          <PrimaryButton onClick={() => {}}>remind</PrimaryButton>
        </FooterRemindForm>
      </FormProvider>
    </FooterRemindWrapper>
  );
};

const FooterRemindWrapper = styled.div`
  ${({ theme }) => theme.typography.Body}
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`;

const FooterRemindForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default FooterRemind;

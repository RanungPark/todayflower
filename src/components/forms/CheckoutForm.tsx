// import {useState} from 'react';
// import {useForm} from 'react-hook-form';
// import styled from 'styled-components';

// import PrimaryButton from '@components/buttons/PrimaryButton';
// import DefaultTextField from '@components/textfields/DefaultTextField';
// import DropDown from '@components/utilities/DropDown';
// import type {InputTextsType} from '@data/inputDatas';
// import {mixins} from '@styles/Mixin';

// interface CheckoutFormProps {
//   onSubmit: () => void;
//   checkoutFormDatas: InputTextsType[];
// }

// const CheckoutFormWrapper = styled.form`
//   ${mixins.flexBox({direction: 'column', align: 'start'})}
//   gap: 16px;

//   width: 100%;
// `;

// const CheckoutForm = ({onSubmit, checkoutFormDatas}: CheckoutFormProps) => {
//   const [selectValue, setSelectValue] = useState('');
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//   const handleDateChange = (date: Date) => {
//     setSelectedDate(date);
//   };

//   const {register, handleSubmit} = useForm();

//   return (
//     <CheckoutFormWrapper onSubmit={handleSubmit(onSubmit)}>
//       {checkoutFormDatas.map(({component, registerValue, placeholder, ...rest}, index) => {
//         if (component === 'textField') {
//           return (
//             <DefaultTextField key={index}>
//               <input
//                 {...register(registerValue, {
//                   required: rest?.required,
//                   pattern: rest.pattern && {
//                     value: rest.pattern.value,
//                     message: rest.pattern.message,
//                   },
//                 })}
//                 data-cy={`${registerValue}Input`}
//                 placeholder={placeholder}
//                 aria-label={registerValue}
//               />
//             </DefaultTextField>
//           );
//         } else if (component === 'datePicker') {
//           // return <DatePicker placeholder={placeholder} value={selectedDate} key={} onChange={handleDateChange} />;
//           return <>달력이 나와야 하는곳</>;
//         } else if (component === 'selectBox') {
//           return (
//             <DropDown
//               value={selectValue}
//               onChange={setSelectValue}
//               options={rest.options ? rest.options : []}
//               placeholder={placeholder}
//               testId={`${registerValue}Input`}
//               key={index}
//             />
//           );
//         }
//         return null;
//       })}
//       <PrimaryButton onClick={handleSubmit(onSubmit)} testId="nextStepBtn">
//         Continue to Payment
//       </PrimaryButton>
//     </CheckoutFormWrapper>
//   );
// };

// export default CheckoutForm;

'use client';

import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import { Input } from '../Input';
import { InputMessage } from '../InputMessage';
import { Button } from '../Button';

const LOCAL_STORAGE_KEY = 'callback';

export const CallbackForm = ({ className }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  useFormPersist(LOCAL_STORAGE_KEY, {
    watch,
    setValue,
    storage: typeof window !== 'undefined' && window.localStorage,
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <form
      className={`max-w-[424px] p-[16px] md:px-[64px] md:py-[36px] rounded-[24px] bg-block ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name="name"
        labelText="Ім'я*"
        placeholderText="Іван Іванов"
        type="name"
        setValue={setValue}
        register={register}
        errors={errors}
        errorMessages={{
          required: "Обовє'язкове поле",
          minLength: 'Мінімум одна буква',
          maxLength: 'Максимум 70 символів',
          pattern: "Невірне ім'я",
        }}
      />

      <Input
        name="tel"
        labelText="Телефон*"
        placeholderText="+38 050 123 45 67"
        type="phone"
        setValue={setValue}
        register={register}
        errors={errors}
        errorMessages={{
          required: "Обовє'язкове поле",
          minLength: 'Мінімум 11 цифр',
        }}
      />
      <InputMessage
        name="message"
        labelText="Повідомлення"
        placeholderText="Ваше повідомлення..."
        setValue={setValue}
        register={register}
        errors={errors}
        errorMessages={{
          maxLength: 'Максимум 500 символів',
        }}
      />

      {/* <button type="submit">Submit</button> */}
      <Button
        label={'отправить'}
        onChange={() => {
          console.log('Hello');
        }}
      >
        Submit
      </Button>
    </form>
  );
};

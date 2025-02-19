import { reactive } from 'vue';

interface FormRef {
  email: string;
  password: string;
  confirmPassword: string;
}

const formRef = reactive<FormRef>({
  email: '',
  password: '',
  confirmPassword: '',
});

export function useRules() {
  const emailRules = [
    (val: string) => (val && val.length > 0) || 'Please type something',
    (val: string) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
      'Please enter a valid email address',
  ];
  const passwordRules = [
    (val: string) =>
      val.length > 8 || 'Password must be greater than 8 characters',
  ];

  const confirmPasswordRules = [
    (val: string) =>
      val.length > 8 || 'Password must be greater than 8 characters',
  ];

  return {
    emailRules,
    passwordRules,
    confirmPasswordRules,
    formRef,
  };
}

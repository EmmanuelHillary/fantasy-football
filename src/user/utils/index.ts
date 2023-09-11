import otpGenerator from 'otp-generator';

export const OTPGenerator = (): number => {
  return otpGenerator.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
};

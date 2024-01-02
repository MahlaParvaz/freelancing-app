import { useState } from 'react';
import SendOTPForm from './sendOTPForm';
import CheckOTPForm from './CheckOTPForm';
import toast from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import { useForm } from 'react-hook-form';
function AuthContainer() {
  const [step, setStep] = useState(1);
  // const [phoneNumber, setPhoneNumber] = useState();
  const { handleSubmit, register, getValues } = useForm();

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            onSubmit={handleSubmit(sendOtpHandler)}
            isSendingOtp={isSendingOtp}
            setStep={setStep}
            register={register}
              // onSubmit={sendOtpHandler}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep((s) => s - 1)}
            onReSendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;

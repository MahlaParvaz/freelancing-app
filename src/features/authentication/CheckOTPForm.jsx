import OTPInput from 'react-otp-input';
import { useState } from 'react';
function CheckOTPForm() {
  const [otp, setOtp] = useState('');
  return (
    <div>
      <form className="space-y-8">
        <p className="font-bold text-secondary-800">کدتایید را وارد کنید </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2  justify-center"
          inputStyle={{
            width: '2.5rem',
            padding: '0.5rem 0.2rem',
            border: '1px solid rgb(var(--color-primary-400))',
            borderRadius: '0.5rem',
          }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;

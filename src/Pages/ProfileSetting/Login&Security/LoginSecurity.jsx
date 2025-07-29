import React from 'react'
import SharedHeading from '../../../Component/Shared/SharedHeading'
import PasswordInput from '../../../Component/Shared/PasswordInput'

export default function LoginSecurity() {
  const [formData, setFormData] = React.useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  return (
    <div className='px-4 md:px-0'>
      {/* Heading */}
      <div>
        <SharedHeading text="Change Password" />
      </div>

      {/* Password fields */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pb-18 '>
        <PasswordInput
          value={formData.password}
          onChange={handleInputChange("password")}
          label="Current Password"
          placeholder="Current password"
        />
        <PasswordInput
          value={formData.newPassword}
          onChange={handleInputChange("newPassword")}
          label="New Password"
          placeholder="New password"
        />
        <PasswordInput
          value={formData.confirmPassword}
          onChange={handleInputChange("confirmPassword")}
          label="Confirm Password"
          placeholder="Confirm password"
        />
      </div>
    </div>
  );
}

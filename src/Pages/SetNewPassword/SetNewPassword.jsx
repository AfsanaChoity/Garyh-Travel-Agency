import React from 'react'
import FormBackground from '../../Component/Shared/FormBackground'
import FormIcon from '../../Component/Shared/FormIcon'
import { Key } from '@mui/icons-material'
import FormSubtitle from '../../Component/Shared/FormSubtitle'
import PasswordInput from '../../Component/Shared/PasswordInput'
import CustomButton from '../../Component/Shared/CustomButton'
import BackToLogin from '../../Component/Shared/BackToLogin'
import { Link } from 'react-router-dom'

export default function SetNewPassword() {
  return (
    <>
        <FormBackground text={"Set New Password"} icon={<FormIcon icon={Key}/>}>
        <FormSubtitle text={"Your new password must be different from previously used passwords."}></FormSubtitle>

        <PasswordInput label='New Password'></PasswordInput>
        <PasswordInput label='Confirm Password'></PasswordInput>
        <Link to="/password-reset">
        <CustomButton text={"Reset Password"}></CustomButton>
        </Link>
        <BackToLogin to="/login"></BackToLogin>
        </FormBackground>

    </>
  )
}

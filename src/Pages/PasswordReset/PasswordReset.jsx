import React from 'react'
import FormBackground from '../../Component/Shared/FormBackground'
import FormIcon from '../../Component/Shared/FormIcon'
import FormSubtitle from '../../Component/Shared/FormSubtitle'
import { Link } from 'react-router-dom'
import CustomButton from '../../Component/Shared/CustomButton'
import { CheckCircle } from '@mui/icons-material'

export default function PasswordReset() {
    return (
        <>
            <FormBackground text={"Password Reset"} icon={<FormIcon icon={CheckCircle}/>}>
                <FormSubtitle
                    text="Your password has been successfully reset.
Click below to login in magically.">

                </FormSubtitle>

                <Link to="/login">
                <CustomButton text="Continue"></CustomButton>
                </Link>

            </FormBackground>

        </>
    )
}

import React, { useState } from 'react'
import FormBackground from '../../Component/Shared/FormBackground'
import CloseButton from '../../Component/Shared/CloseButton'
import FormIcon from '../../Component/Shared/FormIcon'
import { Email } from '@mui/icons-material'
import FormSubtitle from '../../Component/Shared/FormSubtitle'
import CustomButton from '../../Component/Shared/CustomButton'
import { Link } from 'react-router-dom'
import BackToLogin from '../../Component/Shared/BackToLogin'
import Box from '../../Component/Shared/Box'

export default function CheckYourEmail() {
    const [loading, setLoading] = useState(false)
    const [resendLoading, setResendLoading] = useState(false)
    const values = ['2', '8', '4', ' ', ' '];

    // This would typically come from props or route params
    const userEmail = "loremipsum@gmail.com"

    
    const handleResendEmail = () => {
        setResendLoading(true)

        // Simulate API call to resend email
        setTimeout(() => {
            console.log("Resend email to:", userEmail)
            setResendLoading(false)
            // You can show a success message here
        }, 2000)
    }
    return (
        <div>
            
            <FormBackground text="Check Your Email" icon={<FormIcon icon={Email}/>}>
                {/* Email Icon */}

              
                {/* Subtitle */}
                <FormSubtitle text={"We sent a 5 digit code to"}>
                    <div className='text-center'>
                        <strong >{userEmail}</strong>
                    </div>
                </FormSubtitle>

                {/* Code box */}
                 <div className='flex gap-2 mb-[64px] justify-center'>
                    {values.map((val, index) => (
                        <Box key={index} text={val}></Box>
                    ))}
                </div>

               <Link to="/set-new-password">
                <CustomButton text="Verify" 
                
                ></CustomButton>
               </Link>

                {/* Rersend Email Link */}
                <div className='text-center text-xs '>
                    <p>
                        Didn't receive the email? <Link onClick={handleResendEmail} className='text-[#468F9D]'>Click to resend</Link>
                    </p>
                </div>

                <BackToLogin to="/login"></BackToLogin>


            </FormBackground>
        </div>
    )
}

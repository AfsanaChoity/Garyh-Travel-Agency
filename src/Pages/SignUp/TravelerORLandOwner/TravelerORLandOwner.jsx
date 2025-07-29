import React from 'react'
import FormBackground from '../../../Component/Shared/FormBackground'
import FormIcon from '../../../Component/Shared/FormIcon'
import { CheckCircle } from '@mui/icons-material'
import FormSubtitle from '../../../Component/Shared/FormSubtitle'
import { Link } from 'react-router-dom'
import CustomButton from '../../../Component/Shared/CustomButton'
import logo from "../../../assets/icon1.png"
import FormImg from '../../../Component/Shared/FormImg'
import { Button } from '@mui/material'


export default function TravelerORLandOwner() {
    return (
        <>
            <FormBackground text={"Welcome To "} icon={<FormImg img={logo} />}>
            
      
                <div className='text-[#468F9D] font-semibold text-4xl flex justify-center mb-6'>
                    <h1 >RvNBo</h1>
                </div>
                <FormSubtitle
                    text="Choose your role to continue. Select whether you want to be Traveler or Land Owner.">

                </FormSubtitle>

                <div className='flex flex-col gap-4'>
                    <Link to="/sign-up" onClick={() => localStorage.setItem("userRole", "traveler")}>
                        <CustomButton text="Traveler"></CustomButton>
                    </Link>
                    <Link to="/sign-up" onClick={() => localStorage.setItem("userRole", "landOwner")}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            // onClick={onClick}

                            sx={{
                                backgroundColor: "#8AC197",
                                color: "white",
                                py: 1.5,
                                borderRadius: 2,
                                textTransform: "none",
                                fontSize: "1rem",
                                fontWeight: 500,

                                "&:hover": {
                                    backgroundColor: "#26a69a",
                                },

                            }}
                        >
                            Land Owner
                        </Button>
                    </Link>
                </div>


            </FormBackground>

        </>
    )
}

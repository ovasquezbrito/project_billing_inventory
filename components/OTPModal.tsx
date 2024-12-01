import React, { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import Image from "next/image"
import { Button } from "./ui/button"



const OTPModal = ({ email }: { email: string }) => {

  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      
    } catch (error) {
      console.log("Falla de verificación de tokens")
      
    }

    setIsLoading(false)

   
  }

  const handleResendOTP = async () => {
    try {
      
    } catch (error) {
      console.log("Falla de verificación de tokens")
      
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader className="relative flex justify-center">
          <AlertDialogTitle className="h2 text-center">
            Ingresa tu OTP
            <Image 
              src="/assets/icons/close-dark.svg" 
              alt="close" 
              width={20} 
              height={20}
              onClick={() => setIsOpen(false)} 
              className='otp-close-button'
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="subtitle-2 text-center text-light-100">
          Nosotros hemos enviado un código a <span className="pl-1 text-brand">{email}</span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <InputOTP maxLength={6} value={password} onChange={setPassword}>
          <InputOTPGroup className="shad-otp">
            <InputOTPSlot index={0} className="shad-otp-slot"/>
            <InputOTPSlot index={1} className="shad-otp-slot"/>
            <InputOTPSlot index={2} className="shad-otp-slot"/>
            <InputOTPSlot index={3} className="shad-otp-slot"/>
            <InputOTPSlot index={4} className="shad-otp-slot"/>
            <InputOTPSlot index={5} className="shad-otp-slot"/>
          </InputOTPGroup>
        </InputOTP>

        <AlertDialogFooter>
          <div className="flex w-full flex-col gap-4">

            <AlertDialogAction
              onClick={handleSubmit}
              type="button"
              className="shad-submit-btn h-12"
            >
              Validar
              {isLoading && (<Image 
                src="/assets/icons/loader.svg"
                alt="loader" 
                width={20}
                height={20}
                className="ml-2 animate-spin"
              />)}
            </AlertDialogAction>
            <div className="subtitle-2 mt-2 text-center text-light-100">
              ¿No recibiste un código?
              <Button
                type="button"
                variant="link"
                className="pl-1 text-brand"
                onClick={handleResendOTP}
                >
                Solicitar de Nuevo!
              </Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  )
}

export default OTPModal
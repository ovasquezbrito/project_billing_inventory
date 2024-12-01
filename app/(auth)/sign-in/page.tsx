import AuthForm from '@/components/AuthForm'

const SignIn = () => {
  return (
    <>
    <div className='flex h-screen w-full items-center justify-center px-4'>

      <AuthForm type="signin" />
    </div>
    </>
  )
}

export default SignIn
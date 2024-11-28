import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Login = () => {
  return (
    <>
      <div className='flex h-screen items-center justify-center px-4'>
        <Card className='max-w-sm'>
          <CardHeader>
            <CardTitle className='text-2xl'>Login</CardTitle>
            <CardDescription>Ingresa tus credenciales para poder accesar a tu cuenta</CardDescription>
            <CardContent>
              <form className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    type='email'
                    name='email'
                    placeholder='hola@example.com'
                  />
                </div>
                <Button type='submit'>Login</Button>
              </form>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </>
  )
}

export default Login
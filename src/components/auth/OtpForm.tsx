import {Button} from '@/components/ui/button.tsx'
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from '../ui/input-otp'
import config from '@/config/schema/authForm.ts'
import {ControllerRenderProps, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {otpSchema, OtpSchema} from '@/validations/forms/otpSchema.ts'
import {Form, FormField, FormItem, FormMessage} from '@/components/ui/form.tsx'

const OtpForm = () => {
    // todo implement 2fa for login
    const form = useForm<OtpSchema>({
        resolver: zodResolver(otpSchema),
        defaultValues: {
            otp: ''
        }
    })

    const onChange = (value: string, field: ControllerRenderProps<any, any>) => {
        field.onChange(value.toUpperCase())
        if (value.length === config.otp.length) {
            form.handleSubmit(onSubmit)()
        }
    }

    const onSubmit = (values: any) => {
        // TODO: Add logic
        console.log(values)
    }

    return (
        <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="otp"
                    render={({field}) => (
                        <FormItem className={'flex--col items-center'}>
                            <InputOTP
                                maxLength={config.otp.length}
                                pattern={config.otp.pattern}
                                value={field.value}
                                onChange={value => onChange(value, field)}
                            >
                                <InputOTPGroup>
                                    <InputOTPSlot index={0}/>
                                    <InputOTPSlot index={1}/>
                                    <InputOTPSlot index={2}/>
                                </InputOTPGroup>
                                <InputOTPSeparator/>
                                <InputOTPGroup>
                                    <InputOTPSlot index={3}/>
                                    <InputOTPSlot index={4}/>
                                    <InputOTPSlot index={5}/>
                                </InputOTPGroup>
                            </InputOTP>
                            <FormMessage
                                className={'self-start'}/>
                        </FormItem>
                    )}
                />
                <Button className="w-full" type={'submit'}>
                    Verify Code
                </Button>
            </form>
        </Form>
    )
}

export default OtpForm

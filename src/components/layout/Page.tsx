import {PropsWithChildren} from 'react'
import {ClassName} from '@/types/react.ts'
import {twMerge} from 'tailwind-merge'

type PageProps = {
    className?: ClassName
} & PropsWithChildren

const Page = ({className, children}: PageProps) => (
    <main className={twMerge(
        'relative min-h-screen w-full p-6',
        className)
    }>
        {children}
    </main>
)


export default Page

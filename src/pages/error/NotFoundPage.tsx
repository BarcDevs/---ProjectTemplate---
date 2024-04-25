import Page from '@/components/layout/Page.tsx'
import {Link} from '@tanstack/react-router'
import {Button} from '@/components/ui/button.tsx'

const NotFoundPage = ({}) => (
    <Page className={'flex--col items-center gap-4'}>
        <p className={'mt-10 text-xl'}>
            Page Not Found.
        </p>
        <Button className={'max-w-40'}>
            <Link to={'/'}>Go back to Home</Link>
        </Button>
    </Page>
)


export default NotFoundPage

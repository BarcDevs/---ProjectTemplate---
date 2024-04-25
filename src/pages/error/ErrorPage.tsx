import Page from '@/components/layout/Page.tsx'
import {Link} from '@tanstack/react-router'
import {Button} from '@/components/ui/button.tsx'

const ErrorPage = ({}) =>
    (
        <Page className={'flex--col gap-4'}>
            <h3 className={'mt-10 text-xl'}>
                Oops, something went wrong
            </h3>
            <p>
                We're sorry, but something went wrong. Please try again later.
                {/* todo error message */}
            </p>
            <Button>
                <Link to={'/'}>Go back to Home</Link>
            </Button>
        </Page>
    )


export default ErrorPage

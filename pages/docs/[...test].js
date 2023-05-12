import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import Link from 'next/link'

function Doc() {
    const router = useRouter();
    const { test = [] } = router.query;
    console.log(test)

    return


}

function Browse() {
    const tests = 'About'
    return (
        <>
            <Navbar />
            <ul>
                <li>
                    <Link href={'./[page]'} as={'./${tests}'}><h1>Hatdog1</h1></Link>
                </li>
                <li>
                    <Link href='#'><h1>hatdog2</h1></Link>
                </li>
                <li>
                    <Link href='#'><h1>hatdog3</h1></Link>
                </li>

            </ul>
        </>)

}

export default Browse;
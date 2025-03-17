import Link from "next/link"

const Navbar = () => {
    const styles = {
        display: 'flex',
        background: 'grey',
        justifyContent: 'space-between'
        
    }
            {/* IN some cases anchor tag works inside <Link></Link> and in some case throw error
        
        <Link> will generate onclick() fn by default hence tags that accepts on onClick() can be used within <Link> such as button, span
        */}

    return(
    <div style={styles}>
        <Link href='/'>home</Link>
        <Link href='/about'>about page</Link>
        <Link href='/contact'>contact page</Link>
    </div>
    )
}
export default Navbar;
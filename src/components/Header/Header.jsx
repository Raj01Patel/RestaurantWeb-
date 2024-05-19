import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className="navdiv">
            <nav className="navbarItem">
                <section className="logo">
                    <img src="https://flowbite.com/docs/images/logo.svg" />
                    <p>GeekFood</p>
                </section>

                <section>

                    <ul className="list">
                        <NavLink  className={({ isActive }) => (isActive ? 'link active' : 'link')} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to="quote">Quote</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to="restaurant">Resturantse</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to="food">Foods</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'link active' : 'link')} to="contact">Contact</NavLink>
                    </ul>

                </section>

                <section>
                    <button className="getstartbtn">Get started</button>
                </section>
            </nav>
        </div>
    )
}

export default Header
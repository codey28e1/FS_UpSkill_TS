import { useState } from 'react'
import "./Header.css"
import Button from "../../components/Button/Button"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Modal from '../Modal/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { sessionStore } from '../../store/slice'
import { removeSession } from '../../store/slice'
const Header = () => {
    const location= useLocation()
    const dispatch = useDispatch()
    const [isShowSessions, setIsShowSession] = useState(false)
    const sessions = useSelector((state: sessionStore) => state?.sessions)
    const toggleModal = () => {
        setIsShowSession((prev) => !prev)
    }
    const removeSessionHandler = (i: string) => {
        dispatch(removeSession(i))
    }
  return <>
    <header className='' id='main-header'>
        <div className="header-logo">
            <h1>ReactMentoring</h1>
        </div>
        <ul className="header__nav">
            <li className="header__nav-item">
                <Button activeLink={location.pathname === "/"} textOnly to="/">Our Mission</Button>
            </li>
            <li className="header__nav-item">
                <Button activeLink={location.pathname === "/sessions"} textOnly to="/sessions">Browse Sessions</Button>
            </li>
            <li className="header__nav-item">
                <Button onClick={toggleModal}>Upcoming Sessions</Button>
            </li>
        </ul>
    </header>
    <Modal isOpen={isShowSessions}>
        <h2>{sessions.length > 0 ? 'Upcoming Sessions' : 'No upcomming sessions'}</h2>
        <ul>
            {sessions.map((s) => {
                return <li key={s.id}>
                    <article className='upcoming-session'>
                        <div>
                            <h3>{s.title}</h3>
                            <p>{s.summary}</p>
                            <time>{s.date}</time>
                        </div>
                        <div className='actions'>
                            <Button onClick={() => {removeSessionHandler(s.id)}} textOnly>Cancel</Button>
                        </div>
                    </article>
                </li>
            })}
        </ul>
         <div className="actions">
          <Button onClick={toggleModal}>Close</Button>
        </div>
    </Modal>
    </>
}

export default Header
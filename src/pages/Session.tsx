import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal/Modal.tsx'
import { SESSIONS } from '../dummy-sessions.ts';
import Button from '../../components/Button/Button.tsx';
import { useRef, useState } from 'react';
import Input from '../../components/Input/Input.tsx'
import { useDispatch } from 'react-redux';
import { addSessions, removeSession } from '../../store/slice.tsx';
export default function SessionPage() {
  const dispatch = useDispatch()
  const params = useParams<{ id: string }>();
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);
  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }
  const toggleModal = () => {
    setIsOpenModal((prev) => !prev)
  }
  const addSession = () => {
    dispatch(addSessions({
      id: loadedSession.id,
      title: loadedSession.title,
      date: loadedSession.date,
      summary: loadedSession.summary
    }))
    setEmail('')
    setName('')
    toggleModal()
  }


  return (
    <main id="session-page">
      <article>
        <header>
          <img
            src={loadedSession.image}
            alt={loadedSession.title}
          />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
            <p>
              <Button onClick={toggleModal}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
      <Modal isOpen={isOpenModal}>
        <h1>Book Session</h1>
        <div>
          <Input value={name} onChange={(e) => setName(e.target.value)} label='Your name' type='text' id='name'/>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} label='Your email' type='email' id='email'/>
        </div>
        <div className="actions">
          <Button onClick={toggleModal} textOnly>Cancel</Button>
          <Button onClick={addSession}>Book session</Button>
        </div>
      </Modal>
    </main>
  );
}

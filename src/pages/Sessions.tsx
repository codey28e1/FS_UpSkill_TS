import Button from '../../components/Button/Button.tsx';
import { SESSIONS } from '../dummy-sessions.ts'; // normally, we would probably load that from a server

export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <ul id='sessions-list'>
        {SESSIONS.map((book) => {
          return <li className='session-item' key={book.id}>
            <div>
              <img src={book.image}></img>
            </div>
            <div className="session-data">
              <p>{book.title}</p>
              <h3>{book.summary}</h3>
              <div className="actions">
                <Button to={`/sessions/${book.id}`}>Learn More</Button>
              </div>
            </div>
          </li>
        })}
      </ul>
    </main>
  );
}

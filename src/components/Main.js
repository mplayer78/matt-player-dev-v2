import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <h4>Prospect Plaice </h4>
          <a href="https://github.com/mplayer78/prospect-plaice">Code</a>
          <span> | </span>
          <a href="https://prospect-plaice.netlify.app/">Depolyed</a>
          <p>
            Online ordering service for a local takeaway. Built in Gatsby over
            the course of 48 hours and integrated with Stripe Checkout. Database
            hosted on FaunaDB
          </p>

          <br />
          <h4>Svelte Todos</h4>
          <a href="https://github.com/mplayer78/svelte-todo-list">Code</a>
          <span> | </span>
          <a href="https://mplayer-svelte-todos.netlify.app/">Depolyed</a>
          <br />
          <p>
            The ubiquitous todos app, built in Svelte and using the integrated
            Svelte state-management
          </p>

          <h4>Connect-N</h4>
          <a href="https://github.com/mplayer78/ConnectN_mk2">Code</a>
          <br />
          <p>
            A command-line version of connect-4 with recursive logic to check
            for a game win. Demonstrates the use of Inheritance, Polymorphism &
            Encapsulation. Part of the Computer Science MSc.
          </p>

          <h4>React eCalendar</h4>
          <a href="https://github.com/mplayer78/eCalendar-react">Code</a>
          <span> | </span>
          <a href="https://ecalendar-react.netlify.app/">Depolyed</a>
          <br />
          <p>
            A simple event tracker and calendar built as an SPA and utilising
            the WebStorage API.
          </p>
          {/* <h4>Firerise Casestudy</h4> */}
          {/* <a href="">Article</a>
          <p>
            Software Engineering coursework to design the software for drinks
            vending machines installed on busses.
          </p>

          <br /> */}
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <ul>
            <li>Deep & comprehensive knowledge of Javascript</li>
            <li>Deep & comprehensive knowledge of the React Library</li>
            <li>Thorough understanding of the Angular Framework</li>
            <li>Thorough understanding of the Svelte Library</li>
            <li>Experience with REST and GraphQL Degisn Architectures</li>
            <li>Thorough understanding of NodeJS</li>
            <li>Prociciency in Java</li>
            <li>Proficiency in Rust</li>
            <li>Working Knowledge of Python</li>
            <li>Exposure to WebAssembly</li>
          </ul>
          {close}
        </article>

        <article
          id="cv"
          className={`${this.props.article === 'cv' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">CV Download Below</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <a href="/src/assets/downloads/cv.pdf" download="cv.pdf">
            Download
          </a>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="post" netlify>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>

          <a href="https://github.com/mplayer78" className="icon fa-github">
            <span className="label">GitHub</span>
          </a>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

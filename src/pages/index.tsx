import React, { FunctionComponent } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage: FunctionComponent<{}> = () => (
  <Layout>
    <SEO title="Home" />
    <main className="profile">
        {/* <div className="profile-picture">
            <img src="../images/bryan-wong.jpg" className="profile-picture--img"></img>
        </div> */}
        <div className="profile-content">
            <p>
                Hi! I'm a <b>Software Engineer</b> currently in Melbourne, Australia.
            </p>
            <p>
                My goal is to continuously build my knowledge across the <b>full stack</b>, but my current interests lie in front end engineering.
            </p>
            <p>
                I also have a passion for optimising processes, managing business requirements, and leadership development.
            </p>
            <p>
                In my spare time, you can find me working out, producing music, or just having a great time with friends.
            </p>
        </div>
        <div className="profile-socials">
            <a 
                href="https://www.linkedin.com/in/bryanwongyk/" 
                target="_blank" 
                title="LinkedIn" 
            >
                <i className="fab fa-linkedin"></i>    
            </a>

            <a 
                href="https://github.com/bryanwyk" 
                target="_blank" 
                title="GitHub" 
            >
            <i className="fab fa-github-square"></i> 
            </a>

            <a 
            href="mailto:bryanwyk@gmail.com" 
            title="Email" 
            >
            <i className="fas fa-envelope-square"></i>
            </a>
        </div>
    </main>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

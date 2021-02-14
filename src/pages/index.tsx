import React, { FunctionComponent } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage: FunctionComponent<{}> = () => (
  <Layout>
    <SEO title="Home" />
    <main className="profile">
        <Menu/>
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
                LinkedIn
            </a>

            <a 
                href="https://github.com/bryanwyk" 
                target="_blank" 
                title="GitHub" 
            >
                GitHub
            </a>

            <a 
            href="mailto:bryanwyk@gmail.com" 
            title="Email" 
            >
                Email
            </a>
        </div>
    </main>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

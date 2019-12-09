import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my study guide tool for Nutrition, Health and Wellness</p>
    <br />

    <Link to="/carbs/">Carbohydrate Flashcards</Link>
    <br />
    <Link to="/proteins/">Protein Flashcards</Link>
    <br />
    <Link to="/lipids/">Lipid Flashcards</Link>
    <br />
    <Link to="/vitamins/">Vitamin Flashcards</Link>
    <br />
    <Link to="/minerals/">Mineral Flashcards</Link>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Flashcard from "../components/flashcard"

const cards = [
  {
    q: "Lipids are separated into two categories",
    a: "Fats and Oils",
  },
  {
    q: "_____ is responsible for the breakdown of lipids..",
    a: "Endoplasmic Reticulum",
  },
  {
    q: "High intake of this can lead to unhealthy blood lipid levels",
    a: "sugar",
  },
  {
    q: "Good and bad Lipids in our blood are generally categorized as ",
    a: "HDLs or LDLs",
  },
  {
    q: "True or False? Lipids are insoluable in water.",
    a: "True",
  },
]

const LipidsPage = () => (
  <Layout>
    {cards.map((card, index) => {
      return (
        <div id={index}>
          <Flashcard cards={card} />
        </div>
      )
    })}

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LipidsPage

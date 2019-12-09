import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Flashcard from "../components/flashcard"

const cards = [
  {
    q:
      "______ are a primary source of energy for our bodies and are found in a wide variety of foods.",
    a: "Carbohydrates",
  },
  {
    q: "What moistens food and starts the chemical digestion of carbohydrates?",
    a: "Saliva",
  },
  {
    q: "True or False? Carbohydrates are one of the three macronutrients.",
    a: "True",
  },
  {
    q:
      "True or False ? Complex carbohydrates contain either one or two molecules.",
    a:
      "False, Complex carbohydrates contain hundreds of thousands of molecules.",
  },
  {
    q: "Polysaccharides are the technical name for what ?",
    a: "Complex Carbohydrates",
  },
]

const SecondPage = () => (
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

export default SecondPage

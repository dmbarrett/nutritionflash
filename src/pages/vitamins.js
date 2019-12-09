import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Flashcard from "../components/flashcard"

const cards = [
  {
    q: "Carbohydrates, lipids, protiens and vitamins are organic because",
    a: "They contain Carbon",
  },
  {
    q:
      "Food that contain ___ are also important in providing fat-soluable vitamins",
    a: "Fats",
  },
  {
    q: "Vitamins are classified into two categories",
    a: "Water soluable, and Fat soluable",
  },
  {
    q: "True or False? Water soluable vitamins should be consumed daily.",
    a: "True",
  },
  {
    q: "True of False? Foods can be fortified with vitamins",
    a: "True",
  },
]

const VitaminsPage = () => (
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

export default VitaminsPage

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Flashcard from "../components/flashcard"

const cards = [
  {
    q:
      "True or False? Foods containing protien have the highest satiety value.",
    a: "True",
  },
  {
    q: "True or False? Protien is the primary source of energy for our bodies.",
    a: "False, carbohydrates are the primary source",
  },
  {
    q: "List some high protein foods",
    a: "meat, poultry, fish, dry beans, eggs, nuts, milk, yogurt, and cheese",
  },
  {
    q: "Protein and Fat begin digestion in the _____",
    a: "Stomach",
  },
  {
    q: "What two things initiate the digestion of Protien?",
    a: "Hydrochloric Acid and Pepsin",
  },
]

const ProteinsPage = () => (
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

export default ProteinsPage

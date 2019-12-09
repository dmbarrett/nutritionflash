import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Flashcard from "../components/flashcard"

const cards = [
  {
    q: "Minerals and water are inorganic because they do not contain",
    a: "Carbon",
  },
  {
    q: "True or False? Minerals assist in regulation of many bodilt functions.",
    a: "True",
  },
  {
    q: "Sodium, Potassium, calcium, magnesium and iron are all examples of",
    a: "Minerals",
  },
  {
    q: "Minerals can be classified as major and ____",
    a: "Trace",
  },
  {
    q:
      "True or False? we need to consume at least 100mg of all minerals everyday",
    a: "False, we only need to consume 100mg of major minerals per day",
  },
]

const MineralsPage = () => (
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

export default MineralsPage

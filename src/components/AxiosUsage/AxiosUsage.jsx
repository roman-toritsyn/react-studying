import axios from "axios"
import { useEffect, useState } from "react"

export const AxiosUsage = () => {
  const [articles, setArticles] = useState([])
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')

  useEffect(async () => {
    if(query !== '') {
      const result = await axios(`http://hn.algolia.com/api/v1/search?query=${query}`)

      setArticles(result.data.hits)
    }
  }, [query])


  const listItems = articles.map(article =>
    <li key={article.objectId}>
      <a href={article.url}>{article.title}</a>
      </li>
    )

  return(
    <>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      >
      </input>

      <br/>

      <button
        onClick={() => setQuery(input)}
      >
        Search
      </button>


      <ul>
        {listItems}
      </ul>
    </>
  )
}

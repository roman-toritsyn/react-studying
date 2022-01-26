import axios from "axios"
import { useEffect, useState } from "react"

const URL = 'http://hn.algolia.com/api/v1/search?query='

export const AxiosUsage = () => {
  const [articles, setArticles] = useState([])
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true)

      const result = await axios(`${URL}${query}`)

      setArticles(result.data.hits)
      setIsloading(false)
    }

    if(query !== '') fetchData()
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

      {isLoading ? (
        <div>L o a d i n g   . . .</div>
      ) : (
        <ul>
          {listItems}
        </ul>
      )}
    </>
  )
}

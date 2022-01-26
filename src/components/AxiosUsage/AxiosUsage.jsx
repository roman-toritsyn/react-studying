import { useMemo, useState, useRef, useCallback } from "react"
import { useGetArticles } from './useGetArticles'

const URL = 'http://hn.algolia.com/api/v1/search?query='



export const AxiosUsage = () => {
  const [input, setInput] = useState('')
  const [query, setQuery] = useState('')
  
  const { articles, isLoading, isError } = useGetArticles(URL, query)
  

  // const [isLoading, setIsloading] = useState(false)
  // const [articles, setArticles] = useState([])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsloading(true)

  //     const result = await axios(`${URL}${query}`)

  //     setArticles(result.data.hits)
  //     setIsloading(false)
  //   }

  //   if(query !== '') fetchData()
  // }, [query])

  const listItems = useMemo(() => articles.map(article =>
    <li key={article.objectId}>
      <a href={article.url}>{article.title}</a>
      </li>
    ), [articles])

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

      {isError && <div>Oops, we've got some error. . .</div>}

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

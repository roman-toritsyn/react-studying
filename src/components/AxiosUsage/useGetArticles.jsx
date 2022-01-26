import { useEffect, useState } from "react"
import axios from "axios"

export const useGetArticles = (url, query) => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const result = await axios(`${url}${query}`)
        setArticles(result.data.hits)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    if(query !== '') fetchData()
  }, [url, query])

  return { articles, isLoading, isError }
}

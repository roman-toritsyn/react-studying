import React, { useState, useEffect} from "react"

export const DataProvider = ({ url, renderContent }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
  }, [url])


  return (
    // <>{children(data)}</>
    <>{renderContent(data)}</>
  )
}

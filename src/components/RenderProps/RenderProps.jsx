import React from "react"
import { DataProvider } from "."
import { Posts } from "."

const POSTS_API = 'https://jsonplaceholder.typicode.com/posts'

export const RenderProps = () => {

  return (
    <div>
      {/* можно передавать через children */}
      {/* <DataProvider>
        {(data) => <Posts posts={data} />}
      </DataProvider> */}



      <DataProvider
        url={POSTS_API}
        renderContent={(data) => <Posts posts={data} />}
      />
    </div>
  )
}
import 'react-app-polyfill/stable'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark as style } from 'react-syntax-highlighter/dist/esm/styles/prism'
import 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import gfm from 'remark-gfm'
import toc from 'remark-toc'
import Layout from './Layout'
import Box from './Box'

SyntaxHighlighter.registerLanguage('jsx', jsx)

const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter showLineNumbers style={style} language={language}>{value}</SyntaxHighlighter>
  }
}

function Home() {
  const [text, setText] = useState()
  useEffect(() => {
    fetch('/content/two.md')
      .then((response) => response.text())
      .then((data) => setText(data))
  }, [])
  return (
    <Layout>
      <Box>
        Test
      </Box>
      <button type="button" className="btn btn-primary">
        <i className="far fa-eye" />
      </button>
      <ReactMarkdown plugins={[[gfm, {singleTilde: false}], toc]} renderers={renderers}>
        {text}
      </ReactMarkdown>
    </Layout>
  )
}

export default Home


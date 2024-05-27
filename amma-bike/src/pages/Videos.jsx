import React from 'react'
import { Link } from '../Link'
import YouTubeEmbed from '../components/YouTubeEmbed'

export default function Videos() {
  return (
    <>
    <div>
        <h1>Viajecitos y Ranchadas</h1>
         <YouTubeEmbed videoId="ymhg96JqSLQ&t" />
        <Link to= '/'>Volver al inicio</Link>
    </div>
    </>
  )
}

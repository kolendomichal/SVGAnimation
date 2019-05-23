import React from 'react'

const SVGContext = React.createContext({})

export const SVGProvider = SVGContext.Provider
export const SVGConsumer = SVGContext.Consumer
export default SVGContext;
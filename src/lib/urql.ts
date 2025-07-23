import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange
} from 'urql'

const isServerSide = typeof window !== 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const url = process.env.API

const client = createClient({
  url: url,
  exchanges: [dedupExchange, cacheExchange, fetchExchange, ssrCache]
})

export { client, ssrCache }

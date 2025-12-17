import {
  cacheExchange,
  Client,
  fetchExchange,
  ssrExchange
} from 'urql'

const isServerSide = typeof window !== 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const url = process.env.NEXT_PUBLIC_API as string

const client = new Client({
  url: url,
  exchanges: [cacheExchange, fetchExchange, ssrCache]
})

export { client, ssrCache }

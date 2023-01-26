import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange
} from 'urql'

const isServerSide = typeof window !== 'undefined'
const ssrCache = ssrExchange({ isClient: !isServerSide })

const client = createClient({
  url: 'https://api-sa-east-1.hygraph.com/v2/cldbp847108l901t8bkt312mz/master',
  exchanges: [dedupExchange, cacheExchange, fetchExchange, ssrCache]
})

export { client, ssrCache }

// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'pr6i6vae',
  dataset: 'production',
  useCdn: true
})
import { g, auth, config } from '@grafbase/sdk'

const provider = auth.JWT({
  issuer: g.env('ISSUER_URL'),
  secret: g.env('NEXTAUTH_SECRET')
})

const tags = g.enum('Tags', ['VERY_SAD', 'SAD', 'NEUTRAL', 'HAPPY', 'VERY_HAPPY'])

const story = g.model('Story', {
  content: g.string().optional(),
  images: g.string().optional().list(),
  tag: g.enumRef(tags).default('NEUTRAL')
})

// const task = g.model('Task', {
//   task: g.string(),
//   completed: g.boolean().optional().default(false)
// })

export default config({
  schema: g,
  auth: {
    providers: [provider],
    rules: rules => {
      rules.owner()
    }
  }
})

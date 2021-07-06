import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
      <div className="py-28 flex items-center">
          <div className="flex justify-center items-center lg:pl-4">
          <h4 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4">
            <a href="https://discord.gg/hqJbyGdFms">Join our Discord server to jump onto the bandwagon</a>
          </h4>
        </div>
        </div>
      </Container>
    </footer>
  )
}

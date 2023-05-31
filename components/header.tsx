import Link from 'next/link'
import Container from '../components/container'
import EnvironmentDisplay from "./EnvironmentDisplay";
import {useAppSlugContext} from "../providers/AppSlugProvider";

export default function Header() {
  const {appSlug, resetAppSlug} = useAppSlugContext()
  return (
    <header className="py-5">
      <Container>
        <div style={{marginBottom: 20}}>
          <strong style={{fontSize: 20}}>{appSlug}</strong>
            <button
                onClick={resetAppSlug}
                className="mx-5 py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700"
            >
              Change Application
            </button>
        </div>
        <EnvironmentDisplay />
        <nav className="flex space-x-4">
          <Link href="/">About</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </Container>
    </header>
  )
}

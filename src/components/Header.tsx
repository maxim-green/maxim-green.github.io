import {Link} from './Link.tsx';
import {DarkModeSwitch} from './DarkModeSwitch.tsx';



export const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="container h-16 mx-auto flex items-center justify-between">
        <div>
          LOGO
        </div>
        <nav>
          <ul className="flex items-center justify-between">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <DarkModeSwitch/>
      </div>
    </header>
  )
}
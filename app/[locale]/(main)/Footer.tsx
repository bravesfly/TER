import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <div className="h-16 bg-muted gap-8 px-8 mx-auto md:flex md:items-center md:justify-between md:px-12 lg:px-32 max-w-full">
      <div className="flex justify-center space-x-6 md:order-2">
        <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
          <a className="size-6 transition fill-black hover:text-blue-500">
            <span className="sr-only"> github </span>
            <Github className="size-5 md hydrated text-primary" name="logo-github" role="img" aria-label="logo github"></Github>
          </a>
          <a className="size-6 transition fill-black hover:text-blue-500">
            <span className="sr-only"> twitter </span>
            <Twitter className="size-5 md hydrated text-primary" name="logo-twitter" role="img" aria-label="logo twitter"></Twitter>
          </a>
        </span>
      </div>
      <div className="md:order-1" x-data="{ year: new Date().getFullYear() }">
        <span className="text-sm font-medium text-primary">
          Copyright © <span x-text="year">2024</span>
          <a aria-label="Michael Andreuzza" href="#_" className="mx-2 text-blue-500 hover:text-gray-500">TER</a>
          Since 2023
        </span>
      </div>
    </div>
  )
}
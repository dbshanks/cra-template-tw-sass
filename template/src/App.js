import React from 'react'
import { Intro } from './Intro'

const data = [
  {
    title: 'Tailwind Template',
    description:
      'A React template using preconfigured TailwindCSS and Sass modules.',
    links: [
      {
        title: 'Official Tailwind Site',
        linkOne: 'https://tailwindcss.com',
      },
      {
        title: 'Tailwind Components Cheat Sheet',
        linkOne: 'https://tailwindcss.com',
      },
      {
        title: 'NerdCave Tailwind Cheat Sheet',
        linkOne: 'https://nerdcave.com/tailwind-cheat-sheet',
      },
    ],
  },
]

export const App = () => {
  return (
    <div className='container h-screen w-screen flex flex-col justify-center items-center'>
      <Intro data={data} />
    </div>
  )
}

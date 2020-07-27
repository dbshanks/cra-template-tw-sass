import React from 'react'

export const Intro = ({ data }) => {
  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <h1 className='text-5xl text-teal-500'>{item.title}</h1>
          <p className='text-3xl'>{item.description}</p>
          <div className='flex flex-col'>
            <a
              className='text-2xl text-blue-400 hover:text-green-300 mt-2 transition ease-in-out duration-300'
              href={item.links[0].linkOne}>
              {item.links[0].title}
            </a>
            <a
              className='text-2xl text-blue-400 hover:text-green-300 transition mt-2 transition ease-in-out duration-300'
              href={item.links[1].linkOne}>
              {item.links[1].title}
            </a>
            <a
              className='text-2xl text-blue-400 hover:text-green-300 mt-2 transition ease-in-out duration-300'
              href={item.links[2].linkOne}>
              {item.links[2].title}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

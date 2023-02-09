import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className='text-gray-700 border-b-4 border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>GT Ecology</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>
              Home
            </a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>
              About
            </a>
            <a href="#blog" className='hover:text-blue-400 duration-300'>
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section className='text-gray-700' id='home'>
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16'>
            <h1 className='text-2xl sm:text-3xl text-gray-900 font-medium mb-4'>
              Welcome to the world of GT!!
              <br />
              Let's take peek into the world!
            </h1>
            <p className='mb-8 leading-relaxed'>
              Giant trevally inhabits temperate zones from the Indian Ocean to the Pacific Ocean off the coast of Hawaii. In Japan and around the world, 
              anglers commonly call it "GT", which is an abbreviation of the English name "Giant Trevally". 
              <br />
              Among the large, carnivorous fishes of the Perciformes family of the Perciformes of the genus Bigeye Trevally, 
              it grows up to be the largest and most powerful, so it is recognized by anglers around the world as the supreme target for lure fishing in coastal areas.
            </p>
            <button className='text-white bg-blue-500 py-2 px-6 border-0 rounded text-lg hover:bg-blue-400 duration-300'>
              Learn more
            </button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg'>
            <img src="./img/883941_s.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
    
  )
}

export default App

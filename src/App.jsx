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

      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto '>
          <div className='text-center mb-20 '>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>
              Explanation
            </h1>
            <p className='pb-10 '>
              Fishes dissipate into all aquatic environments on earth, 
              and their habitats range from the tropics to the polar regions, 
              from the surface to the depths of the ocean, and to inland freshwater areas. 
              Their ecology and morphology are also very diverse.
            </p>
            <p>
              There are currently 27,000 species of fish on earth. About 4,000 species 
              live around Japan. Fish can appear anywhere there is water, both saltwater 
              and freshwater. In the ocean, which covers 70% of the earth's surface, 
              there is no place without fish, from the coast to the middle of the ocean far offshore to a depth of 8000 m. 
              On land, fish live not only in rivers and lakes, 
              but also in groundwater, hot springs, alpine lakes and desert puddles.
              New species of mammals and birds are rarely found, but many new species of fish are reported each year. 
              Several new species are also reported from around Japan every year. In addition, 
              even if it is not a new species, about 15 species of fish that have been discovered 
              for the first time in Japan are reported every year. 
              In other words, 
              the taxonomy of fish is still in its infancy.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </>
    
  )
}

export default App

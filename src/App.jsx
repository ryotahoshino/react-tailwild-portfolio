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

          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-blue-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium mr-2'>
                    type of fish
                  </h2>
                </div>
                <div>
                  <p>
                    There are about 25,000 species of fish in the world.
                    About 14,550 of them are saltwater fish.
                    There are about 10,450 species of freshwater fish.
                    About 3,863 species of fish have been confirmed in 
                    Japan and its surrounding waters.
                  </p>
                  <a href="#" className='flex mt-3 text-blue-500 items-center'>
                    more read
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-blue-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium mr-2'>
                    type of fish
                  </h2>
                </div>
                <div>
                  <p>
                    There are about 25,000 species of fish in the world.
                    About 14,550 of them are saltwater fish.
                    There are about 10,450 species of freshwater fish.
                    About 3,863 species of fish have been confirmed in 
                    Japan and its surrounding waters.
                  </p>
                  <a href="#" className='flex mt-3 text-blue-500 items-center'>
                    more read
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-200 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-blue-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium mr-2'>
                    type of fish
                  </h2>
                </div>
                <div>
                  <p>
                    There are about 25,000 species of fish in the world.
                    About 14,550 of them are saltwater fish.
                    There are about 10,450 species of freshwater fish.
                    About 3,863 species of fish have been confirmed in 
                    Japan and its surrounding waters.
                  </p>
                  <a href="#" className='flex mt-3 text-blue-500 items-center'>
                    more read
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default App

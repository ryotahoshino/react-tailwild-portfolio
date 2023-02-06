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

      <section>
        <div>
          <div>
            <h1>
              Welcome to the world of GT!!
              <br />
              Let's take peek into the world!
            </h1>
            <p>
              Giant trevally inhabits temperate zones from the Indian Ocean to the Pacific Ocean off the coast of Hawaii. In Japan and around the world, 
              anglers commonly call it "GT", which is an abbreviation of the English name "Giant Trevally". 
              Among the large, carnivorous fishes of the Perciformes family of the Perciformes of the genus Bigeye Trevally, 
              it grows up to be the largest and most powerful, so it is recognized by anglers around the world as the supreme target for lure fishing in coastal areas.
              <br />
              It is said to grow up to a total length of 180 cm and a weight of 80 kg, 
              and in the waters near Japan, which is the northernmost habitat in the world, 
              it is possible to catch a large fish with a length of 160 cm and a weight of 60 kg, 
              which is close to the upper limit. The fishing grounds include the waters surrounding Okinawa Prefecture, 
              the Amami Islands in Kagoshima Prefecture, and the Tokara Islands.
            </p>
            <button>Learn more</button>
          </div>
          <div>
            <img src="./img/883941_s.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
    
  )
}

export default App

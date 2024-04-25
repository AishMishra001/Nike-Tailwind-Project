import { CustomerReviews , Footer , PopularProducts , Services , SpecialOffers , Subscribe , SuperQuality , Hero } from './sections'
import './index.css'

const App = ()=>(
  <main className='relative'>
    nav

    <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero></Hero>
    </section>

    <section className='padding'>
      <PopularProducts></PopularProducts>
    </section>


    <section className='padding'>
      <SuperQuality></SuperQuality>
    </section>


    <section className='padding'>
      <Services></Services>
    </section>


    <section className='padding'>
      <SpecialOffers></SpecialOffers>    
      </section>


    <section className='bg-pale-blue padding'>
      <CustomerReviews></CustomerReviews> 
    </section>


    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe></Subscribe>
    </section>


    <section className='bg-black padding-x padding-t pb-8'>
      <Footer></Footer>
    </section>

    
  </main>
)
export default App

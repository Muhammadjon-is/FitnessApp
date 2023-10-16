import { SelectedPage } from '../shared/types'
import logo from "../../assets/Logo.png"


type Props = {
    setSelectedPage:(value:SelectedPage) => void
}

const FooterPage = ({setSelectedPage}: Props) => {
  return <footer className='bg-primary-100 py-16'>
  <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
    <div className='mt-16 basis-1/2 md:mt-0'>
        <img src={logo} alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sapiente corporis est modi voluptas odio explicabo ipsam sit? Ratione fugit sint nesciunt officia </p>
        <p>All Rights Reserved</p>
    </div>
    <div className='mt-16 basis-1/4 md:mt-0'>
  <h4 className=' font-bold'>LINK</h4>
  <p className='my-5 '>Lorem ipsum dolor sit.</p>
  <p className='my-5 '>Lorem ipsum dolor sit.</p>
 <p>Lorem, ipsum.</p>
    </div>
    <div>
    <div className='mt-16 basis-1/4 md:mt-0'>
  <h4 className=' font-bold'>Contact Us</h4>
  <p className='my-5 '>Lorem ipsum dolor sit.</p>
  <p className='my-5 '>(+48) 456 456 458</p>

    </div>
  </div>
  </div>
  </footer>
}

export default FooterPage
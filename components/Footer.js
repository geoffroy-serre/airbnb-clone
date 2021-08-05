import { GlobeAltIcon } from '@heroicons/react/outline';

function Footer() {
  return (
    <div className="bg-gray-100">
      <div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 md:justify-items-center">
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsrom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>Papafam</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">HOST</h5>
            <p>Papa React</p>
            <p>Presents</p>
            <p>Zero to full stack</p>
            <p>Hundreds of students</p>
            <p>Join Now</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Say Hi Youtube</p>
            <p>Easter Eggs</p>
            <p>For the win</p>
          </div>
        </div>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 items-center justify-items-center text-gray-800 text-xs pb-5 border-t-2 border-solid border-gray-200">
        <div className="space-x-3 flex items-center md:pl-10 pt-2">
          <p>© 2021 Airbnb, Inc. </p>
          <p>Privacy</p>
          <p>Terms </p>
          <p>Site Map </p>
        </div>
        <div className="space-x-2 flex items-center md:pl-20 pt-2">
          <p className="space-x-2 flex items-center ">
            <GlobeAltIcon className="h-6" /> English(US)
          </p>
          <p>€ EUR</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

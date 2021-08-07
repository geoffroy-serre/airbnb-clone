import { GlobeAltIcon } from '@heroicons/react/outline';

function Footer() {
  return (
    <div className="bg-gray-100">
      <div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 md:justify-items-center">
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">ABOUT</h5>
            <p className="footer_link">How Airbnb works</p>
            <p className="footer_link">Newsrom</p>
            <p className="footer_link">Investors</p>
            <p className="footer_link">Airbnb Plus</p>
            <p className="footer_link">Airbnb Luxe</p>
            <p className="footer_link">HotelTonight</p>
            <p className="footer_link">Airbnb for work</p>
            <p className="footer_link">Made possible by Hosts</p>
            <p className="footer_link">Careers</p>
            <p className="footer_link">Founder's Letter</p>
          </div>

          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">COMMUNITY</h5>
            <p className="footer_link">Diversity & Belonging</p>
            <p className="footer_link">Against Discrimination</p>
            <p className="footer_link">Accessibility</p>
            <p className="footer_link">Airbnb Associates</p>
            <p className="footer_link">Frontline Stays</p>
            <p className="footer_link">Guest Referrals</p>
            <p className="footer_link">Gift cards</p>
            <p className="footer_link">Airbnb.org</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">HOST</h5>
            <p className="footer_link">Host your home</p>
            <p className="footer_link">Host an Online Experience</p>
            <p className="footer_link">Host an Experience</p>
            <p className="footer_link">Responsible hosting</p>
            <p className="footer_link">Resource Center</p>
            <p className="footer_link">Community Center</p>
          </div>
          <div className="space-y-4 text-xs text-gray-800">
            <h5 className="font-bold">SUPPORT</h5>
            <p className="footer_link">Our COVID-19 Response</p>
            <p className="footer_link">Help Center</p>
            <p className="footer_link">Cancellation options</p>
            <p className="footer_link">Neighborhood Support</p>
            <p className="footer_link">Trust & Safety</p>
          </div>
        </div>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 items-center justify-items-center text-gray-800 text-xs pb-5 border-t-2 border-solid border-gray-200">
        <div className="space-x-3 flex items-center md:pl-10 pt-2">
          <p>© 2021 Airbnb, Inc. </p>
          <p className="footer_link">Privacy</p>
          <p className="footer_link">Terms </p>
          <p className="footer_link">Site Map </p>
        </div>
        <div className="space-x-2 flex items-center md:pl-20 pt-2">
          <p className="space-x-2 flex items-center ">
            <GlobeAltIcon className="h-6" /> <span className="footer_link">English(US)</span>
          </p>
          <p className="footer_link">€ EUR</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

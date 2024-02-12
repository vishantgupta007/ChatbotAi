import google from '../assets/google.png';
import slack from '../assets/slack.png';
import atlassian from '../assets/atlassian.png';
import dropbox from '../assets/dropbox.png';
import shopify from '../assets/shopify.png';



const Brand = () => (
   <div className="gpt3__brand flex justify-around items-center flex-wrap bg-slate-200 h-20">
      <div>
         <img src={google} />
      </div>
      <div>
         <img src={slack} />
      </div>
      <div>
         <img src={atlassian} />
      </div>
      <div>
         <img src={dropbox} />
      </div>
      <div>
         <img src={shopify} />
      </div>
   </div>
);

export default Brand;



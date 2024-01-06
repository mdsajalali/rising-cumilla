
import { FaFacebook, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa';
const DetailsHeading = () => {
  return (
    <div className="my-10">
      <h1 className="bg-[#E7FFE2] p-2">
        প্রচ্ছদ » জাতীয় » চার হাজার কেন্দ্রে ব্যালট পেপার পৌঁছে যাবে আজ
      </h1>
      <h2 className="text-2xl mt-5">
        চার হাজার কেন্দ্রে ব্যালট পেপার পৌঁছে যাবে আজ
      </h2>
      <p className='my-2'>রাইজিং ডেস্ক </p>
      <p>জানুয়ারি ৬, ২০২৪ ১২:২০ পিএম</p>
      <div className='flex gap-5 mt-5'>
        <FaFacebook size={25} className='cursor-pointer' />
        <FaTwitter size={25} className='cursor-pointer' />
        <FaPinterest size={25} className='cursor-pointer' />
        <FaWhatsapp  size={25} className='cursor-pointer'/>
      </div>
    </div>
  );
}

export default DetailsHeading
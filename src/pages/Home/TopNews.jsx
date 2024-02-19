import allNews from "../../assets/images/allbanglanewspaperbds.webp";
import winter from "../../assets/images/winter.webp";
const TopNews = () => {
  return (
    <div className="max-w-[1230px] mx-auto">
      <div className="grid xl:grid-cols-12 md:grid-cols-6 grid-cols-1 gap-10 my-10 ">
        <div className="xl:col-span-7 md:col-span-3">
          <img src={winter} alt="" />
          <h1 className="text-2xl my-2 cursor-pointer">
            দেশের বিভিন্ন স্থানে গুঁড়ি গুঁড়ি বৃষ্টির সম্ভাবনা, আরও বাড়বে শীত
          </h1>
          <p className="text-[16px] my-2">
            দেশের বিভিন্ন স্থানে গুঁড়ি গুঁড়ি বৃষ্টি ও শীতের তীব্রতা বাড়ার
            পূর্বাভাস দিয়েছে আবহাওয়া অধিদফতর। এছাড়াও সারাদেশে আজ বৃহস্পতিবার রাত
            ও দিনের তাপমাত্রা সামান্য বাড়তে পারে।
          </p>
        </div>
        <div className="md:col-span-3 border-l border-r px-3">
          <div>
            <h1 className="text-2xl">সর্বশেষ</h1>
            <p className="mt-2 cursor-pointer">
              প্রেমে থাকা সত্ত্বেও ব্রেকআপ জরুরি কেন?
            </p>
            <hr />
          </div>
          <div className="py-3">
            <p className="cursor-pointer">
              প্রেমে থাকা সত্ত্বেও ব্রেকআপ জরুরি কেন?
            </p>
            <hr />
          </div>
          <div className="py-3">
            <p className="cursor-pointer">
              প্রেমে থাকা সত্ত্বেও ব্রেকআপ জরুরি কেন?
            </p>
            <hr />
          </div>
          <div className="py-3">
            <p className="cursor-pointer">
              প্রেমে থাকা সত্ত্বেও ব্রেকআপ জরুরি কেন?
            </p>
            <hr />
          </div>
          <div className="py-3">
            <p className="cursor-pointer">
              প্রেমে থাকা সত্ত্বেও ব্রেকআপ জরুরি কেন?
            </p>
            <hr />
          </div>
          <div className="py-3">
            <p className="cursor-pointer">
              প্রেমে থাকা সত্ত্বেও ব্রেকআপ জরুরি কেন?
            </p>
            <hr />
          </div>
          <div className="py-3">
            <p className="cursor-pointer">
              প্রেমে থাকা সত্ত্বেও ব্রেকআপ জরুরি কেন?
            </p>
            <hr />
          </div>
        </div>
        <div className="flex items-center md:col-span-2">
          <img src={allNews} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopNews;

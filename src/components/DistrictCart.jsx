
const DistrictCart = ({news}) => {
    console.log(news)
    const {img, news_desc} = news;
  return (
    <div>
        <img className="w-72" src={img} alt="" />
        <p>{news_desc}</p>
    </div>
  )
}

export default DistrictCart
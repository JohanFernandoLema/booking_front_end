import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    'http://localhost:8000/api/hotels?featured=true'
  )
  console.log(data)
  return (
    <div className="fp">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          {data.map((item, i) => (
            <div className="fpItem" key={i}>
              <img src={item.gallery[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>

              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default FeaturedProperties

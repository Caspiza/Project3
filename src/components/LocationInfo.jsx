
const LocationInfo = ( {location} ) => {
  return (
    <article className="location">
        <h2 className="location__name">
            {location?.name}
        </h2>
        <ul className="location__info">
            <li className="location__item">
              <span className="location__label">Type:</span>
              <span className="location__answer">{location?.type}</span>
            </li>
            <li className="location__item">
              <span className="location__label">Dimension:</span>
              <span className="location__answer">{location?.dimension || 'unknown'}</span>
            </li>
            <li className="location__item">
              <span className="location__label">Population:</span>
              <span className="location__answer">{location?.residents.length}</span>              
            </li>
        </ul>
    </article>
  )
}

export default LocationInfo
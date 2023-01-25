import './index.css'

const CardItem = props => {
  const {learnCard} = props
  const {title, description, imgUrl, className} = learnCard

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="cardH">{title}</h1>
        <p className="cardP">{description}</p>
        <img className="img1" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem

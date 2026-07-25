 

const Card = ({image, 
  title, 
  description,

}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure className=""> 
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn rounded-2xl bg-black text-white cursor-pointer ">Visit now </button>
    </div>
  </div>
</div>
    )
}

export default Card;
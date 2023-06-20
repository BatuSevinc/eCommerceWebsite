//Component
import Card from '../Card/Card';
//Scss
import './list.scss'

const List = () => {
    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
          img2: "https://images.pexels.com/photos/949671/pexels-photo-949671.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Long Sleeve Graphic T-shirt",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Coat",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Skirt",
          isNew: true,
          oldPrice: 19,
          price: 12,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
          title: "Hat",
          oldPrice: 19,
          price: 12,
        },
      ];
    
  return (
    <div className='list'>
        {
            data?.map(item=>(
                <Card item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default List
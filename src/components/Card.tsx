import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';


interface CardProps {
  id: string;
  poster_path: string;
  title: string;
  description: string;
  duration: string;
}

const Card: FC<CardProps> = ({ id, poster_path, title, description, duration }) => {

  const navigate = useNavigate()
  const navigasi =() => {
    navigate(`/detail/${id}`, {
      state: {
        id: id
      }
    }) 
  }

  return (
    <div className="bg-white shadow-md mt-16 w-64 rounded-lg p-4 flex flex-col items-center">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="w-full h-40 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-lg text-center font-semibold mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
        {title}
      </h3>
      <p>{duration}</p>
      <p className="text-gray-600">{description}</p>
      <button className="flex justify-center items-center my-3" 
      onClick={() => navigasi()}
      >
        Detail Movie
      </button>
    </div>

  )
}

export default Card
import { useState } from "react"
import { observer } from "mobx-react-lite"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { v4 as uuid } from "uuid"
import store from "../store"
import { CardProps } from "../interfaces/types"
import capitalize from "../utils/capitalize"
import "react-lazy-load-image-component/src/effects/blur.css"
import Modal from "./Modal"

function Card({ pokemon, index }: CardProps) {
  const { name, type, imageUrl } = pokemon
  console.log(index)

  const [showModal, setShowModal] = useState<boolean>(false)

  // @ts-ignore-next-line
  const openModal = (event) => {
    if (event.button === 0 || event.code === "Enter") {
      setShowModal(true)
    }
  }

  return (
    <>
      <div
        onClick={openModal}
        className='group font-mono relative border-0 rounded-lg flex flex-col overflow-hidden flex-shrink-0 shadow-2xl hover:shadow-2xl hover:scale-105 ease-in-out duration-200	 '
        style={{ backgroundColor: store.colorTypes[type[0]] }}
        onKeyDown={openModal}
        tabIndex={0}
        role='button'
      >
        <div className='mx-auto my-6'>
          <LazyLoadImage
            className='w-full h-full object-center object-cover'
            alt={name}
            effect='blur'
            src={imageUrl}
            style={{ height: "150px", width: "150px", borderRadius: "50%" }}
          />
        </div>
        <div className='flex-1 p-4 flex items-center justify-center	 flex-col select-none'>
          <h3 className='bg-stone-400	rounded-lg p-3 font-bold text-white'>#{index}</h3>
          <h3 className='text-dark font-bold'>{capitalize(name)}</h3>
          <div className=' flex gap-3'>
            <div key={uuid()} className='rounded-xl px-4 text-center font-bold py-2 border-0 '>
              {type[0]}
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} pokemon={pokemon} />}
    </>
  )
}

export default observer(Card)

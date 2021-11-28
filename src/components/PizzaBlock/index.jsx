import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Button } from '../index'

const PizzaBlock = ({
  id,
  name,
  imageUrl,
  price,
  types,
  sizes,
  onClickAddPizza,
  addedCount,
}) => {
  // console.log(sizes)
  let pizzaSizeIndex = []

  let activeSizeIndex = []

  sizes.forEach((e) => {
    pizzaSizeIndex.push(e)
  })

  if (pizzaSizeIndex[0] === 26) {
    activeSizeIndex[0] = 0
  }
  if (pizzaSizeIndex[0] === 30) {
    activeSizeIndex[0] = 1
  }
  if (pizzaSizeIndex[1] === 30) {
    activeSizeIndex[1] = 1
  }
  if (pizzaSizeIndex[1] === 40) {
    activeSizeIndex[1] = 2
  }
  if (pizzaSizeIndex[2] === 40) {
    activeSizeIndex[2] = 2
  }

  // console.log(activeSizeIndex)

  const [activeType, setActiveType] = React.useState(types[0])
  const availableTypes = ['тонкое', 'традиционное']
  const onSelectType = (index) => {
    setActiveType(index)
  }

  const [activeSize, setActiveSize] = React.useState(activeSizeIndex[0])
  const availableSize = [26, 30, 40]

  const onSelesctSize = (index) => {
    setActiveSize(index)
  }

  // console.log(availableSize[1])

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: availableSize[activeSize],
      type: availableTypes[activeType],
    }
    onClickAddPizza(obj)
  }

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes.map((type, index) => {
            //console.log(type, index + " type")
            return (
              <li
                onClick={() => onSelectType(index)}
                className={classNames({
                  active: activeType === index,
                  disabled: !types.includes(index),
                })}
                key={type + index}
              >
                {type}
              </li>
            )
          })}
        </ul>
        <ul>
          {availableSize.map((size, index) => {
            return (
              <li
                key={size + index}
                onClick={() => onSelesctSize(index)}
                className={classNames({
                  active: activeSize === index,
                  disabled: !sizes.includes(size),
                })}
              >
                {size} см.
              </li>
            )
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={onAddPizza} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  )
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  onClickAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
}

PizzaBlock.defaultProps = {
  name: '---',
  imageUrl: '',
  price: 0,
  sizes: [],
  types: [],
}

export default PizzaBlock

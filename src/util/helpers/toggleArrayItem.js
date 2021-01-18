const removeItemAtIndex = (array, itemIndex) => {
  const copy = [...array]
  copy.splice(itemIndex, 1)
  return copy
}

const toggleArrayItem = (array, item) => {
  const itemIndex = array.findIndex(i => i === item)

  if (itemIndex === -1) {
    return [...array, item]
  }

  return removeItemAtIndex(array, itemIndex)
}

export default toggleArrayItem
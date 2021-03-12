const searchItems = (commandsList, searchValue) => {
  if (!searchValue || !commandsList) {
    return commandsList
  }

  let filteredItems = []
  const regexp = new RegExp(searchValue.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'), 'i')

  commandsList.length && commandsList.forEach(item => {
    const {command, desc, keywords} = item
    const keywordsString = keywords.join(', ')

    if (
      regexp.test(command)
      || regexp.test(desc)
      || regexp.test(keywordsString)
    ) filteredItems.push(item)
  })

  return filteredItems
}

export default searchItems
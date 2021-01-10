const parseYmlContent = (content) => {
  if (!content) {
    return
  }

  return content.split('\n\n').map(p => p.replace(/\n/g, '<br/>')).join('')
}

export default parseYmlContent
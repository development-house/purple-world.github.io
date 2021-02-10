const parseKeybindsData = (keybindsData) => {
  const modifiers = ['CTRL', 'ALT', 'SHIFT']

  let keymap = {}

  keybindsData.forEach(keybind => {
    // @TODO: Refactor so that key order doesn't matter
    const keybindKey = keybind.keys[keybind.keys.length - 1]

    let keybindModifier = null
    if (keybind.keys.length > 1) {
      modifiers.forEach(modifier => {
        if (keybind.keys.indexOf(modifier) > -1) {
          keybindModifier = modifier
        }
      })
    }

    const keybindDef = {
      desc: keybind.desc,
      tags: keybind.tags,
      modifier: keybindModifier
    }

    let keyArray = []
    if (keymap[keybindKey]) {
      keyArray = keymap[keybindKey]
    }
    keyArray.push(keybindDef)

    keymap = {
      ...keymap,
      [keybindKey]: keyArray
    }
  })

  return keymap
}

export default parseKeybindsData
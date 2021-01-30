require('dotenv').config()
const axios = require('axios')

const {GITLAB_URL, GITLAB_PROJECT_ID, GITLAB_ACCESS_TOKEN} = process.env

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
  const {createNode} = actions

  const getKeybindingsConfig = async () => {
    const nodeData = {
      keybinds: null,
      tags: null
    }

    try {
      const res = await axios({
        method: 'GET',
        url: `https://${GITLAB_URL}/api/v4/projects/${GITLAB_PROJECT_ID}/repository/files/keybinds.yml/raw?ref=master&private_token=${GITLAB_ACCESS_TOKEN}`
      })

      if (res.data) {
        nodeData.keybinds = res.data
      }
    } catch (err) {
      console.log('[gatsby-node] getKeybindingsConfig - error: ', err)
    }

    try {
      const res = await axios({
        method: 'GET',
        url: `https://${GITLAB_URL}/api/v4/projects/${GITLAB_PROJECT_ID}/repository/files/tags.yml/raw?ref=master&private_token=${GITLAB_ACCESS_TOKEN}`
      })

      if (res.data) {
        nodeData.tags = res.data
      }
    } catch (err) {
      console.log('[gatsby-node] getKeybindingsConfig - error: ', err)
    }

    const nodeContent = JSON.stringify(nodeData)

    const nodeMeta = {
      id: createNodeId('keybindings'),
      parent: null,
      children: [],
      internal: {
        type: 'keybindings',
        mediaType: 'text/html',
        content: nodeContent,
        contentDigest: createContentDigest(nodeContent)
      }
    }

    const node = {...nodeData, ...nodeMeta}
    createNode(node)
  }

  return getKeybindingsConfig()
}
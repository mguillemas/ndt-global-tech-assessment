const { Router } = require('express')
const bodyParser = require('body-parser')
const Workflow = require('./handlers/Workflow')

const parseBody = bodyParser.json()
    
const api = new Router()

api.post('/run-workflow', parseBody, async(req, res) => {
  const body = req.body
  const workflow = new Workflow()
    // await workflow.validate(request.workflow)
  const response = await workflow.execute(body.workflow)
  await res.send(JSON.stringify(response))

})

module.exports = {
    api
}



const { Router } = require('express')
const bodyParser = require('body-parser')
const Workflow = require('./handlers/Workflow')

const parseBody = bodyParser.json()
const request = 
{
  workflow: [
      {
        name: 'substraction',
        inputs: [
          2.5,
          2
        ],
        algorithms: [
          {
            name: 'sum',
            inputs: [
              2.5 - 2,
              1,
              2.5
            ],
            algorithms: [
            	{
                name: 'concat',
                inputs: [
                 `Result: ${(2.5 - 2) + 1 + 2.5}`
                ],
                algorithms: []
              },
              {
                name: 'saveDouble',
                // save result (2.5 - 2) + 1 + 2.5 = 4
              }
            ]
          }
        ]
      }
  	]
}
    
const api = new Router()

api.post('/operation', parseBody, (req, res) => {
    new Workflow().execute(request.workflow)
    res.send(JSON.stringify(request))
})

module.exports = {
    api
}



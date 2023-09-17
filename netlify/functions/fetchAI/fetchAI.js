// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})


const openai = new OpenAIApi(configuration)


const handler = async (event) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'davinci:ft-scrimba-2023-03-30-23-10-03',
      prompt: event.body,
      presence_penalty: 0,
      frequency_penalty: 0.3,
      max_tokens: 100,
      temperature: 0,
      stop: ['\n', '->']
    })

    //const subject = event.queryStringParameters.name || 'World'

    return {
      statusCode: 200,
      body: JSON.stringify( 
        {
          reply: response.data
        }

        // // more keys you can return:
        // headers: { "headerName": "headerValue", ... },
        // isBase64Encoded: true,
      ),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }

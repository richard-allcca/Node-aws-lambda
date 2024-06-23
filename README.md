<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node HTTP API on AWS

This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

## Enlace Fast

    https://www.youtube.com/watch?v=wvux4WOU5dc

## Usage

### Deployment

    serverless deploy
    serverless deploy --verbose

Endpoints:

      GET - https://ihmpb9vjb3.execute-api.sa-east-1.amazonaws.com/
      POST - https://ihmpb9vjb3.execute-api.sa-east-1.amazonaws.com/tasks
      GET - https://ihmpb9vjb3.execute-api.sa-east-1.amazonaws.com/tasks
      GET - https://ihmpb9vjb3.execute-api.sa-east-1.amazonaws.com/tasks/{id}

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

    curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/

Which should result in response similar to the following (removed `input` content for brevity):

    {
      "message": "Go Serverless v2.0! Your function executed successfully!",
      "input": {
        ...
      }
    }

### Local development

You can invoke your function locally by using the following command:

    serverless invoke local --function hello

Which should result in response similar to the following:

    {
      "statusCode": 200,
      "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
    }

Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

    serverless plugin install -n serverless-offline

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

    serverless offline

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).

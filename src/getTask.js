const AWS = require("aws-sdk");

// FIXME - Este método no crea el endpoint el modo de crear el .yml esta deprecado quiza sea la razón me faltan datos
// Ejemplo de crud hasta el abril 2022 - https://www.paradigmadigital.com/dev/serverless-framework-crea-api-crud-aws-lambda-dynamodb/

const getTask = async (event) => {

  try {

    const dynamodb = new AWS.DynamoDB.DocumentClient();

    //REVIEW - segun log no puede obtener 'id' 'event.pathParameters' es null
    const { id } = event.pathParameters;

    const result = await dynamodb.get({
      TableName: 'TaskTable',
      Key: {
        id,
      }
    }).promise();

    const task = result.Item;

    return {
      status: 200,
      body: {
        task
      }
    };

  } catch (error) {
    console.log(error);
  }


};

module.exports = {
  getTask,
};

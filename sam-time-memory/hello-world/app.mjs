/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

export const lambdaHandler1 = async (event, context) => {
    try {
        console.log("Hello World function 1")
        console.log("Hello There from console...")
        setTimeout(()=>{
            console.log("Hello again after timeout of 4 seconds")
        }, 4000)
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Hello from return in function HelloWorldFunction1!',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const lambdaHandler2 = async (event, context) => {
    try {
        console.log("Hello World function 2")
        console.log("Hello There from console...")
        setTimeout(()=>{
            console.log("Hello again after timeout of 3 seconds")
        }, 3000)
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Hello from return in function HelloWorldFunction2!',
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const lambdaHandler3 = async (event, context) => {
    try {
        const firstName = process.env.FIRST_NAME;
        // if(firstName) {
        //  } else {
        //     throw new Error('FIRST_NAME environment variable not found!!')
        // }
        return {
            'statusCode': 200,
            'body': JSON.stringify({
                message: `Hello from ${firstName}`,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }
};

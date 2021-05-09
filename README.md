# Lambda Layers Experiment

## Services
There are two services.
 1. The top level service which contains the function `hello`
 2. `layers/nodejs/serverless.yml` Which deploys the layer containing node_modules & the libs directory

## Deploy

### Layers

AWS lambda does not work with ES6 so the files need to be converted by Bable.
- `yarn build`
Which will convert `/src/libs` and copy them to the `layers/nodejs/libs` directory

Deploy the layers first as the functions in the top level depend on them:
- `cd layers/nodejs`
- create a name for the service: `export LAYERS_EXP_LAYER_SERVICE=my-layers-layer`
- `yarn`
- `yarn sls delpoy`

### Functions
Now the functions service can be deployed:
- `cd ../../` (to get back to the root of this project)
- create a name for the service: `export LAYERS_EXP_SERVICE=my-layers-funcs`
- `yarn`
- `yarn sls delpoy`

## Invoke
Invoke the function with: `yarn sls invoke --function hello --data='{"some": "stuff"}'`

## Using the libs

Libs are located in `/opt/libs` when deployed.

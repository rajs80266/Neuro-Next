import * as tf from '@tensorflow/tfjs';
import tfmodel from '../models/model.json';

export const loadModel = async () => {
  const model = await tf.loadGraphModel(tfmodel);
  console.log('done');
  return model;
}

export const predict = async (model, inputData) => {
    const inputTensor = tf.tensor(inputData);
    const output = model.executeAsync(inputTensor);
    const result = await output;
    return result;
  }
  
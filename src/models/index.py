import tensorflow as tf
import tensorflowjs as tfjs

# Load the Keras model
loaded_model = tf.keras.models.load_model('C:/Users/jaysh/Desktop/PP/neuro-snap/src/models/ANN_predict.keras')

# Convert and save as TensorFlow.js format
tfjs.converters.save_keras_model(loaded_model, '.')
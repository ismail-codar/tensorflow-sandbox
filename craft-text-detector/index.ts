import * as tf from "@tensorflow/tfjs";

(async () => {
  const model = await tf.loadGraphModel("http://localhost/model/model.json");
  // await tf.loadGraphModel("https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/3/default/1", {fromTFHub: true})
  //   const result = model.predict(input);
})();

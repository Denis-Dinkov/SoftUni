function extractFile(input) {
  let div = input.split("\\").pop();
  let dotIndex = div.lastIndexOf(".");
  let fileName = div.substring(0, dotIndex);
  let extension = div.substring(dotIndex + 1 );
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");

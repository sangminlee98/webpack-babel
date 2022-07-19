module.exports = function myWebpackLoader(content) {
  return content.replaceAll("console.log(", "alert(");
};

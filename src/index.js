/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var cc = 0;
  for( var i = 0; i < preferences.length; i++)
  {
    if ( i == preferences [ preferences [preferences [i]-1]-1]-1)
    {
      cc++;
    }
  }
  cc = cc / 3;
  return cc;
}
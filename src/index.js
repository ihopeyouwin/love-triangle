/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 * module.exports = 
 * function getLoveTrianglesCount(preferences = [3, 3, 3, 3, 3, 3, 3, 3]) {
  var cc = 0;
  var count = 0;
  for( var i = 0; i < preferences.length; i++)
  {
    if ( i == preferences [ preferences [preferences [i]-1]-1]-1)
    {
      cc++;
      if( cc == 3)
      {
        count++;
      }
    }
    else
    {
      continue;
    }
  }
  cc = cc / 3;
  return count;
}
getLoveTrianglesCount();
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var cc = 0;
  for( var i = 0; i < preferences.length; i++)
  {
    if ( i == preferences [ preferences [preferences [i]-1]-1]-1)
    {
      if(i == preferences[i]-1)
      {
        continue;
      }
      cc++;
    }

  }
  cc = cc/3;
  return cc;
}

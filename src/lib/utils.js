
// Extend ?
export const extend = ( a, b ) => {
  for ( let key in b ) {
    if ( b.hasOwnProperty( key ) ) {
      a[key] = b[key];
    }
  }
  return a;
}

// Get ComputedTranslateY
export const getComputedTranslateY = (obj) => {
  if (!window.getComputedStyle) return;
  const style = getComputedStyle(obj),
  transform = style.transform || style.webkitTransform || style.mozTransform;
  let mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) return parseFloat(mat[1].split(', ')[13]);
  mat = transform.match(/^matrix\((.+)\)$/);
  return mat ? parseFloat(mat[1].split(', ')[5]) : 0;
}

// Validate Email
export const validateEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email)
}

// Get Random Integer
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

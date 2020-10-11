const { sqrt, pow, cos, atan } = Math;
type Vector = {
  x :number
  y :number
  z :number
};


function Vector(x :number, y :number, z :number) :Vector {
  return { x, y, z };
}


function magnitude(v :Vector) :number {
  return (
    sqrt(pow(v.x, 2) + pow(v.y, 2) + pow(v.z, 2))
  )
}

function add_vectors(...vecs :Vector[]) :Vector {
  let 
  xx :number[] = [], 
  yy :number[] = [], 
  zz :number[] = [];
  for (let i = 0; i < vecs.length; i++) {
    xx.push(vecs[i].x);
    yy.push(vecs[i].y);
    zz.push(vecs[i].z);
    
  }

  
  return {
    x: xx.reduce((a, b) => a + b, 0),
    y: yy.reduce((a, b) => a + b, 0),
    z: zz.reduce((a, b) => a + b, 0)
  }
  

}

function product(
  type :"vector" | "scalar",
  vectors :Vector[],
  angle_between_the_vectors_in_radians :number
) :number | void {
  let prod = 1;
  if ( type === "scalar" ) {
    for ( const vec of vectors ) {
      prod *= magnitude(vec);
    }
    return prod * cos(angle_between_the_vectors_in_radians);
  } 
  else if ( type === "vector" ) {
    // prod = 1;
    for ( const vec of vectors ) {
      prod *= magnitude(vec);
    }
  } 
  else {
    return console.error("enter a valid product type");
  }
}


export {
  Vector,
  add_vectors,
  product,
  magnitude
};

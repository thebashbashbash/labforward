export const dataSet1 = {
    data: {
      data: [1,2,1,0,1,2,1,8,9,8,1,2,0,2,1,2,3,1,2,0,8,9,2,0,3,0,2,1,2,3,8,10,2,1,2,3,0,1,2,1,2,7,6,9,1,2,0,1,2,1], 
      signal: [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0]
    },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
}


export const dataSet2 = {
    data: {
      data: [0,2,1,2,3,10,12,1,1,2,3,0,1,2,1,2,7,6,9,1,2,0,1,2,1,2,1,3,0,2,3,1,1,2,3,10,9,12,0,2,3,1,2,0,1,7,11,0,1,2], 
      signal: [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0]
    },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
}

export const dataSet3 = {
    data: {
      data: [2,1,3,0,2,2,9,7,2,3,1,2,9,8,2,3,1,2,0,1,2,3,0,10,9,1,2,1,0,1,2,1,8,9,8,1,2,0,2,1,2,1,14,10,0,1,1,2,0,3], 
      signal: [0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0]
    },
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
}

const dotMultiplicationWithIdentityVector = (a: number[], identityVector: number[]) =>{
  return a.map((element, index) => {
    return element * identityVector[index]
  })
}

dataSet1.data.signal = dotMultiplicationWithIdentityVector(dataSet1.data.data, dataSet1.data.signal)
dataSet2.data.signal = dotMultiplicationWithIdentityVector(dataSet2.data.data, dataSet2.data.signal)
dataSet3.data.signal = dotMultiplicationWithIdentityVector(dataSet3.data.data, dataSet3.data.signal)



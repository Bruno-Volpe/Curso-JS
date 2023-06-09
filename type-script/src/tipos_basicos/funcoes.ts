type mapStringsCallBack = (item: string) => string

export default function mapString(
  array: string[],
  callbackfn: mapStringsCallBack,
): string[] {
  const newArray: string[] = []

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i]))
  }

  return newArray
}

const abc = ['a', 'b', 'c']
const abcMapped = mapString(abc, function (item: any) {
  return item.toUpperCase()
})

console.log(abcMapped)

let arr = [5, 2, 4, 6, 1, 3]

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function bubbleSortVisual() {
  const arrHolder = document.getElementById('arr_holder')

  // Creating and append divs for array elements
  arr.forEach((value, index) => {
    const elem = document.createElement('div')
    elem.setAttribute('id', 'myArr_' + index)
    elem.classList.add('myArr')
    elem.innerHTML = value
    arrHolder.appendChild(elem)
  })

  let swapped

  do {
    swapped = false

    for (let i = 0; i < arr.length - 1; i++) {
      // Removing existing 'current' and 'swapped' classes
      document.querySelectorAll('.current, .swapped').forEach((elem) => {
        elem.classList.remove('current', 'swapped')
      })

      // Highlighting current pair being compared
      const arrElem1 = document.getElementById('myArr_' + i)
      const arrElem2 = document.getElementById('myArr_' + (i + 1))

      arrElem1.classList.add('current')
      arrElem2.classList.add('current')

      await wait(500)

      if (arr[i] > arr[i + 1]) {
        // Swapping values in the array
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true

        // Updating swapped elements with swapped values
        arrElem1.innerHTML = arr[i]
        arrElem2.innerHTML = arr[i + 1]

        // Highlighting swapped elements
        arrElem1.classList.add('swapped')
        arrElem2.classList.add('swapped')

        await wait(500)
      }
    }
  } while (swapped)

  document.querySelectorAll('.current, .swapped').forEach((elem) => {
    elem.classList.remove('current', 'swapped')
  })
}

bubbleSortVisual()

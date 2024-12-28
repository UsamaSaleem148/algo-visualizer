let arr = [5, 2, 4, 6, 1, 3]

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function insertionSortVisual() {
  let parentElement = document.getElementById('arr_holder')

  // Render the initial array
  for (let i = 0; i < arr.length; i++) {
    let elem = document.createElement('div')
    elem.innerHTML = arr[i]
    elem.classList.add('array-item')
    elem.setAttribute('id', 'array-item-' + i)
    parentElement.appendChild(elem)
  }

  for (let i = 1; i < arr.length; i++) {
    document.querySelectorAll('.array-item').forEach((item) => item.classList.remove('active', 'comparing'))
    document.getElementById('temp_value').innerHTML = arr[i]

    let temp = arr[i]
    let j = i - 1

    // Highlight the current element being sorted
    document.getElementById('array-item-' + i).classList.add('comparing')

    while (j >= 0 && arr[j] > temp) {
      document.querySelectorAll('.array-item').forEach((item) => item.classList.remove('active', 'comparing'))

      // Highlight the elements being compared
      document.getElementById('array-item-' + j).classList.add('active')
      document.getElementById('array-item-' + (j + 1)).classList.add('comparing')

      await wait(1000)

      if (document.getElementById('array-item-' + j)) {
        document.getElementById('array-item-' + j).innerHTML = temp
      }
      arr[j + 1] = arr[j]
      updateArrayVisual(j + 1, arr[j + 1]) // Only update the swapped element

      document.querySelectorAll('.array-item').forEach((item) => item.classList.remove('comparing'))
      j--
    }

    arr[j + 1] = temp
    updateArrayVisual(j + 1, temp) // Update the inserted element
    await wait(1000)
  }

  document.querySelectorAll('.array-item').forEach((item) => item.classList.remove('active', 'comparing'))
  document.getElementById('temp_value').innerHTML = ''
  document.getElementById('temp_holder').style.display = 'none'
}

// Update only the specific element that has changed
function updateArrayVisual(index, value) {
  let elem = document.getElementById('array-item-' + index)
  elem.innerHTML = value
}

insertionSortVisual()

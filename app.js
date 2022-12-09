// Global

let userData = []

window.onload = () => {
  main()
  const userDataString = localStorage.getItem('userData')
  if (userDataString) {
    const userDataArr = JSON.parse(userDataString)
    userData.push(...userDataArr)
    // console.log(userData)
    userData.forEach((data) => {
      generateElement(document.getElementById('tbody'), data)
    })
  }
}

function main() {
  const userInp = document.getElementById('user-input')
  const tbody = document.getElementById('tbody')
  const clearBtn = document.getElementById('clearBtn')

  userInp.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      userData.push(event.target.value)
      localStorage.setItem('userData', JSON.stringify(userData))
      for (let i = 0; i < userData.length; i++) {
        generateElement(tbody, event.target.value)
        break
      }
      event.target.value = ''
    }
  })

  clearBtn.addEventListener('click', function () {
    localStorage.clear()
    location.reload()
  })
}

let count = 1
let tr
let descriptor = [
  'কাষ্টমারের নাম?',
  'সে কি পন্য কিনেছে?',
  'কি পরিমান নিয়েছে?',
  'পন্যের মুল্য কত?',
  'প্রফিট কি পরিমান হয়েছে?',
]
let countDescriptor = 0

function generateElement(parent, text = 'user') {
  if (!text) return
  const td = document.createElement('td')
  td.innerText = text
  if (count === 1 || count === 6) {
    tr = document.createElement('tr')
    parent.appendChild(tr)
  }
  count === 6 ? (count = 2) : count++
  countDescriptor === 4 ? (countDescriptor = 0) : countDescriptor++
  tr.appendChild(td)

  document.getElementById('label').innerText = descriptor[countDescriptor]
}

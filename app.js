const btnConvertir = document.getElementById('btnConvertir')

btnConvertir.addEventListener('click', (e) => {
  e.preventDefault();

  const celsius = document.getElementById('temperatura').value

  if (celsius.trim() === '') {
    alert('Debes introducir un valor')
    return
  }

  const fa = (Number(celsius) * (9 / 5)) + 32
  const kel = Number(celsius) + 273.15

  document.getElementById('fahrenheit').textContent = fa
  document.getElementById('kelvin').textContent = kel
})

const btnClear = document.getElementById('btnClear')

btnClear.addEventListener('click', (e) => {
  e.preventDefault()

  document.getElementById('temperatura').value = ''
  document.getElementById('fahrenheit').textContent = '--'
  document.getElementById('kelvin').textContent = '--'
})

# Conversor de Temperaturas

Una herramienta técnica web para la conversión térmica de precisión entre diferentes escalas de temperatura. Desarrollado como práctica de JavaScript del programa Generation.

## 📋 Descripción

Esta aplicación permite calcular instantáneamente equivalencias entre escalas Celsius, Fahrenheit y Kelvin con precisión decimal para aplicaciones industriales y científicas. La herramienta cuenta con una interfaz moderna y responsiva diseñada para facilitar el uso.

## ✨ Características

- **Conversión en tiempo real**: Transforma grados Celsius a Fahrenheit y Kelvin
- **Validación de entrada**: Verifica que se ingrese un valor antes de convertir
- **Interfaz intuitiva**: Diseño limpio y fácil de usar
- **Botón de limpieza**: Permite reiniciar los campos rápidamente
- **Diseño responsivo**: Se adapta a diferentes tamaños de pantalla

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la página
- **CSS3**: Estilos modernos con variables CSS y Flexbox/Grid
- **JavaScript (Vanilla)**: Lógica de conversión y manipulación del DOM
- **Google Fonts**: Tipografía Poppins para mejor legibilidad

## 🚀 Cómo Usar

1. Abre el archivo `index.html` en tu navegador web
2. Ingresa el valor en grados Celsius en el campo de texto
3. Haz clic en el botón **"Convertir Ahora"**
4. Visualiza los resultados en Fahrenheit y Kelvin
5. Para limpiar los campos, haz clic en el botón **"Limpiar"**

## 📁 Estructura del Proyecto

```
ejercicio-1/
├── index.html    # Estructura HTML de la aplicación
├── style.css     # Estilos y diseño visual
├── app.js        # Lógica JavaScript de conversión
└── README.md     # Documentación del proyecto
```

## 🔧 Funcionamiento

### Fórmulas de Conversión

- **Celsius a Fahrenheit**: `°F = (°C × 9/5) + 32`
- **Celsius a Kelvin**: `°K = °C + 273.15`

### Lógica JavaScript

El archivo `app.js` contiene:
- Event listener para el botón de conversión
- Validación de entrada para asegurar que el campo no esté vacío
- Cálculos matemáticos para las conversiones
- Actualización dinámica del DOM con los resultados
- Funcionalidad de limpieza de campos

## 📝 Notas

- Este proyecto es una práctica de aprendizaje de JavaScript
- La interfaz está completamente en español

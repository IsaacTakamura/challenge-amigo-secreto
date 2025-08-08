# Challenge Amigo Secreto

<p align="left">
<img src="https://img.shields.io/badge/STATUS-FINALIZADO-green">
</p>

![GitHub last commit](https://img.shields.io/github/last-commit/IsaacTakamura/challenge-amigo-secreto?color=purple&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/IsaacTakamura/challenge-amigo-secreto?color=green&style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/IsaacTakamura/challenge-amigo-secreto?color=orange&style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/IsaacTakamura/challenge-amigo-secreto?color=blue&style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/IsaacTakamura/challenge-amigo-secreto?label=Forks&style=social)
![GitHub stars](https://img.shields.io/github/stars/IsaacTakamura/challenge-amigo-secreto?label=Stars&style=social)
![GitHub license](https://img.shields.io/github/license/IsaacTakamura/challenge-amigo-secreto?color=blueviolet&style=flat-square)

<img width="960" height="600" alt="amigoSecreto" src="https://github.com/user-attachments/assets/15fd550d-dd9a-4481-8e82-24af6dd51eb2" />

## 📋 Descripción

Este proyecto es una aplicación web para realizar sorteos de "Amigo Secreto". Permite a los usuarios agregar nombres de amigos a una lista y luego sortear aleatoriamente quién será el amigo secreto de cada participante.

## ✨ Características

- ✅ **Agregar amigos**: Ingresa nombres de amigos a la lista
- ✅ **Validación de entrada**: Solo acepta letras y espacios (no números ni caracteres especiales)
- ✅ **Lista dinámica**: Muestra todos los amigos agregados en tiempo real
- ✅ **Sorteo aleatorio**: Selecciona un amigo secreto de forma aleatoria
- ✅ **Interfaz intuitiva**: Diseño moderno y fácil de usar
- ✅ **Responsive**: Funciona en dispositivos móviles y desktop

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y validaciones
- **CSS3**: Estilos modernos y responsive
- **JavaScript**: Lógica de programación y manipulación del DOM
- **Fonts**: Google Fonts (Inter y Merriweather)

## 📁 Estructura del Proyecto

```
challenge-amigo-secreto/
├── index.html          # Página principal
├── app.js             # Lógica JavaScript
├── style.css          # Estilos CSS
├── assets/            # Imágenes y recursos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md          # Documentación
```

## 🎯 Funcionalidades Implementadas

### Agregar Amigos
- Validación de entrada en tiempo real
- Solo acepta letras y espacios
- Límite de 50 caracteres por nombre
- Mensajes de error claros

### Mostrar Lista
- Lista dinámica que se actualiza automáticamente
- Elementos `<li>` generados dinámicamente
- Limpieza automática para evitar duplicados

### Sortear Amigo
- Algoritmo aleatorio usando `Math.random()`
- Validación de que existan amigos en la lista
- Resultado destacado en la interfaz
- Mensajes informativos en consola

## 🛠️ Instalación y Uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/IsaacTakamura/challenge-amigo-secreto.git
   ```

2. **Navega al directorio:**
   ```bash
   cd challenge-amigo-secreto
   ```

3. **Abre el archivo:**
   - Abre `index.html` en tu navegador web
   - O usa un servidor local como Live Server

## 🎮 Cómo Usar

1. **Agregar amigos:**
   - Escribe el nombre en el campo de texto
   - Haz clic en "Añadir"
   - El nombre aparecerá en la lista

2. **Sortear amigo secreto:**
   - Asegúrate de tener al menos un amigo en la lista
   - Haz clic en "Sortear amigo"
   - El resultado se mostrará en pantalla

## 🔧 Validaciones Implementadas

### HTML
- `pattern`: Solo letras y espacios
- `maxlength`: Máximo 50 caracteres
- `required`: Campo obligatorio
- `oninput`: Validación en tiempo real

### JavaScript
- Validación de campo vacío
- Verificación de lista antes de sortear
- Manejo de errores con mensajes claros

## 📱 Compatibilidad

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Isaac Takamura**
- GitHub: [@IsaacTakamura](https://github.com/IsaacTakamura)

## 🙏 Agradecimientos

- Alura por el desafío
- Comunidad de desarrolladores
- Contribuidores del proyecto

---

⭐ Si te gustó este proyecto, ¡dale una estrella!
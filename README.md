# RESVA ECI

## Resumen
  **RESVA ECI** es el proyecto a presentar para la materia Arquitectura de Software el cual sera implementado el periodo 2021-i.
  El tema del Proyecto elegido es un tablero donde se recopilela información de las canchas que tiene la Escuela para cada deportey el estudiante o trabajador de la Escuela pueda reservar en tiempo real.También sirve para mantener informados a los directivos sobre participación de cada uno de los estudiantes, el uso y las condiciones que se le está dando a estas. 
  El impacto de estos objetivos sería un impulso a la práctica de los diferentes deportes en los estudiantes y al buen manejo de estas instalaciones. 

  Los objetivos del sistema son:
  
   + Facilitar el registro, la actualización, la consulta de las canchas que están instaladas en la Escuela. 
   + Informar sobre la disponibilidad de estas a los usuarios (Estudiantes, profesores y directivos) para que estos puedar hacer uso de las canchas disponibles.

## Descripción
  Teniendo en cuenta la experiencia que se ha tenido con el trámite y organización para el préstamo de las canchas, se busca que todos los estudiantes, profesores y trabajadores de la Escuela puedan apartar su cancha en el horario que tengan disponible, así mismo cancelar su solicitud y poder a todas las instalaciones. También que el Administrador pueda actualizar el estado de cada una de ellas y su disponibilidad. 
  Actualmente, este servicio se realiza manualmente, entonces la persona que quería hacer uso de alguna cancha debía acercarse hasta la oficina de deporte a hacer el registro y ver si estaba disponible en el horario que quería, cuando por algún motivo no se podía asistir a la cancha en la hora definida se le quitaba la oportunidad a otra persona para utilizarla, también estaba la situación que si se dañaba u ocurría alguna eventualidad solo avisaban hasta que se llegaba a tomar el turno. 
  
  **Login**
  
   ![Imagen](https://github.com/camilaFetecua/RESVA-ECI-ARSW-2021-i-/blob/master/Imagenes%20Readme/Login.JPG)
  
  **Informacion general de lOS deportes** 
  
   ![Imagen](https://github.com/camilaFetecua/RESVA-ECI-ARSW-2021-i-/blob/master/Imagenes%20Readme/Deportes.JPG)
  
  **Tablero de cada cancha con su respectiva disponibilidad para reserva**
  
   ![Imagen](https://github.com/camilaFetecua/RESVA-ECI-ARSW-2021-i-/blob/master/Imagenes%20Readme/Futbol.JPG)
  
   ![Imagen](https://github.com/camilaFetecua/RESVA-ECI-ARSW-2021-i-/blob/master/Imagenes%20Readme/TenisDeMesa.JPG)
  
  ## Diagrama de clases 

## Diagramas

 ![Imagen](https://github.com/camilaFetecua/RESVA-ECI-ARSW-2021-i-/blob/master/Imagenes/PrimerImagen.PNG)

  ![Imagen](https://github.com/camilaFetecua/RESVA-ECI-ARSW-2021-i-/blob/master/Imagenes/Imagen2.png)

## Historias de Usuario


### 1.Registrar Cancha
COMO administrador 
QUIERO poder registrar una cancha 
PARA dejarla disponible para su préstamo y que el personal de la escuela pueda hacer uso de estas. 

**Criterios de aceptación:**

  + El sistema debe buscar que la nueva cancha no esté registrada. 

  + Al registrar la nueva cancha se debe solicitar al administrador datos como: nombre, ubicación, estado, número de jugadores, tiempo de préstamo, horarios en los que esta disponibles, requisitos y foto.

  + El sistema no debe permitir el registro dos veces de la misma cancha.

### 2.Actualizar Cancha
COMO administrador 
QUIERO actualizar el estado de la cancha
PARA poder informar a los usuarios sobre la disponibilidad de esta. 

**Criterios de aceptación**

  + Al actualizar la cancha se debe poder modificar solo el estado de la cancha y el tiempo de préstamo.

### 3.Eliminar Cancha
COMO administrador 
QUIERO poder eliminar una cancha 
PARA poder informar a los usuarios las canchas existentes en la escuela.

**Criterios de aceptación**

  + Al eliminar la cancha se debe solicitar al administrador solo el nombre de la cancha.

### 4.Reporte de las canchas más utilizadas
COMO administrador 
QUIERO tener un reporte de las canchas más utilizadas
PARA poder informar a los directivos sobre el alcance que tienen estos servicios.

**Criterios de aceptación**

  + El reporte debe mostrar algunos de los detalles de la cancha como: nombre, ubicación, estado y foto. El reporte debe estar organizado de manera que salga de primeras las canchas que tengan más número de registro de alquiler.

### 5.Consultar canchas
COMO usuario
QUIERO poder consultar la cancha 
PARA poder conocer su disponibilidad y poder tomarla en prestamos 
**Criterios de aceptación:**

  + El sistema debe permitir ingresar el nombre la cancha o el deporte al que pertenece para su búsqueda.

  + El sistema debe mostrar el nombre, ubicación, estado, número de jugadores, tiempo de préstamo, horarios en los que esta disponibles, requisitos y foto.
### 6.Registrar alquiler de Cancha
COMO usuario
QUIERO registrar el alquiler de la cancha
PARA poder utilizarla en un tiempo determinado.

**Criterios de aceptación:**

  + El sistema debe primero solicitar la identificación del estudiante/profesor/empleado y permitir ingresar el préstamo.

  + El sistema debe permitirle al usuario escoger la cancha la fecha y la hora en la que quiere hacerse el uso de esta. 

  + El Sistema debe confirmar una vez se ha registrado el préstamo, y debe hacer un resumen del servicio. 



### 7.Cancelar solicitud 
COMO usuario
QUIERO poder cancelar la solicitud de alquiler
PARA poder darle la oportunidad a otro usuario de tomar el servicio.

**Criterios de aceptación:**

  + El sistema debe primero solicitar la identificación del estudiante/profesor/empleado y permitir ingresar la cancelación. 

  + El sistema debe permitirle al usuario cancelar el alquiler de la cancha seleccionando el nombre de la cancha, la fecha y la hora en la que se iba hacer uso. 

## Autor 
  + **Maria Camila Fetecua Garcia**
  

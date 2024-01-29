export const Promedio = () => {
  interface Alumno {
    name: string;
    edad: number;
    calificacion: number;
  }

  const alumnos: Alumno[] = [
    {
      name: 'Viviana',
      edad: 19,
      calificacion: 10,
    },
    {
      name: 'Wendy',
      edad: 20,
      calificacion: 8,
    },
    {
      name: 'Gerson',
      edad: 18,
      calificacion: 9,
    },
  ];

  const calcularPromedio = (Cestudiantes: Alumno[]) => {
    const totalAlumnos = Cestudiantes ? Cestudiantes.length : 0;

    const suma = Cestudiantes.reduce((total, alumno) => total + alumno.calificacion, 0);

    return totalAlumnos ? suma / totalAlumnos : 0;
  };

  const promedioCalificaciones = calcularPromedio(alumnos);

  return (
    <div style={{ width: '40%', margin: '0 auto' }}>
      <h1> Alumnos</h1>
      <p>Promedio de los estudiantes: {promedioCalificaciones}</p>
    </div>
  );
};
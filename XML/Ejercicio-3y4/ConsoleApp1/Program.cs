using System;
using System.Collections.Generic;
using System.Linq;


namespace AppXML
{
    class Program
    {
        static List<Gimnasio> Listado { get; set; }

        static void Main(string[] args)
        {
            Listado = ReaderXML.GetListadoRutinas();
            MostrarOpciones();
            ProcesarOpciones();
            Console.WriteLine("¿Desea finalizar? (s/n)");
            String fin = Console.ReadLine().ToLower();
            while (fin != "s")
            {
                MostrarOpciones();
                ProcesarOpciones();
                Console.WriteLine("¿Desea finalizar? (s/n)");
                fin = Console.ReadLine().ToLower();
            }
        }

        private static void MostrarOpciones()
        {
            Console.WriteLine("¿Qué desea hacer?");
            Console.WriteLine("Listar rutinas: 1");
            Console.WriteLine("Elabora una nueva rutina: 2");
        }

        private static void ProcesarOpciones()
        {
            Console.Write("Introduzca la opción que desee ejecutar: ");
            String opcion = Console.ReadLine();
            if (opcion == "1")
            {
                foreach (Gimnasio gimnasio in Listado)
                {
                    Console.WriteLine(gimnasio);
                }
            }
            else if (opcion == "2")
            { 
                Console.WriteLine("Introduzca el tipo de rutina:");
                string tipo_rutina = Console.ReadLine().ToLower();
                Console.WriteLine("Introduzca el grupo muscular que se va a trabajar:");
                string grupo_muscular = Console.ReadLine();
                Console.WriteLine("Introduzca el tiempo estimado de calentamiento:");
                int.TryParse(Console.ReadLine(), out int tiempo_calentamiento);
                Console.WriteLine("Introduzca el primer ejercicio:");
                string primer_ejercicio = Console.ReadLine();
                Console.WriteLine("Introduzca el segundo ejercicio:");
                string segundo_ejercicio = Console.ReadLine();
                Console.WriteLine("Introduzca el tercer ejercicio:");
                string tercer_ejercicio = Console.ReadLine();
                Console.WriteLine("Introduzca el tiempo de descanso entre series:");
                int.TryParse(Console.ReadLine(), out int tiempo_descanso);
                Console.WriteLine("Introduzca la duración de la rutina:");
                string duracion_rutina = Console.ReadLine();

                Gimnasio m = new Gimnasio(tipo_rutina, grupo_muscular, tiempo_calentamiento, primer_ejercicio, segundo_ejercicio, tercer_ejercicio, tiempo_descanso, duracion_rutina);

                List<Gimnasio> nuevoListado = Listado;
                nuevoListado.Add(m);
                WriterXML.Write(nuevoListado);
                Listado = ReaderXML.GetListadoRutinas();
                Console.WriteLine("Rutina añadida");
                Console.WriteLine(m);
            }
            else
            {
                Console.WriteLine("Opción no válida");
                ProcesarOpciones();
            }
        }
    }
}

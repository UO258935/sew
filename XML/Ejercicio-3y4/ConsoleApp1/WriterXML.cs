using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;


namespace AppXML
{
    class WriterXML
    {
        public static void Write(List<Gimnasio> rutinas)
        {
            XElement eMenus =
                new XElement("rutinas",
                    from r in rutinas
                    select new XElement("rutina",
                        new XElement("tipo_rutina", r.Tipo_rutina),
                        new XElement("grupo_muscular", r.Grupo_muscular),
                        new XElement("tiempo_calentamiento", r.Tiempo_calentamiento),
                        new XElement("primer_ejercicio", r.Primer_ejercicio),
                        new XElement("segundo_ejercicio", r.Segundo_ejercicio),
                        new XElement("tercer_ejercicio", r.Tercer_ejercicio),
                        new XElement("tiempo_descanso", r.Tiempo_descanso),
                        new XElement("duracion_rutina", r.Duracion_rutina)));
            
            eMenus.Save(AppDomain.CurrentDomain.BaseDirectory + @"\rutinas.xml");
        }
    }
}

using System;
using System.Collections.Generic;
using System.Xml;


namespace AppXML
{
    class ReaderXML
    {
        public static List<Gimnasio> GetListadoRutinas() => GetRutinaXML(LeerFichero());

        private static XmlNodeList LeerFichero()
        {
            XmlDocument doc = new XmlDocument();
            doc.Load(AppDomain.CurrentDomain.BaseDirectory + @"\rutinas.xml");
            return doc.DocumentElement.SelectNodes("/rutinas/rutina");
        }

        private static List<Gimnasio> GetRutinaXML(XmlNodeList nodes)
        {
            List<Gimnasio> menus = new List<Gimnasio>();
            foreach (XmlNode node in nodes)
            {
                
                string tipo_rutina = node.SelectSingleNode("tipo_rutina").InnerText;
                string grupo_muscular = node.SelectSingleNode("grupo_muscular").InnerText;
                int.TryParse(node.SelectSingleNode("tiempo_calentamiento").InnerText, out int tiempo_calentamiento);
                string primer_ejercicio =     node.SelectSingleNode("primer_ejercicio").InnerText;
                string segundo_ejercicio =  node.SelectSingleNode("segundo_ejercicio").InnerText;
                string tercer_ejercicio =     node.SelectSingleNode("tercer_ejercicio").InnerText;
                int.TryParse(node.SelectSingleNode("tiempo_descanso").InnerText, out int tiempo_descanso);       
                string duracion_rutina =     node.SelectSingleNode("duracion_rutina").InnerText;
                
                menus.Add(new Gimnasio(tipo_rutina, grupo_muscular, tiempo_calentamiento, primer_ejercicio, segundo_ejercicio, tercer_ejercicio, tiempo_descanso, duracion_rutina));
            }
            return menus;
        }
    }
}

using System;
using System.Text;


namespace AppXML
{
    class Gimnasio
    {
        public String Tipo_rutina { get; set; }
        public String Grupo_muscular { get; set; }
        public int Tiempo_calentamiento { get; set; }
        public String Primer_ejercicio { get; set; }
        public String Segundo_ejercicio { get; set; }
        public String Tercer_ejercicio { get; set; }
        public int Tiempo_descanso { get; set; }
        public String Duracion_rutina { get; set; }

        public Gimnasio( String tipo_rutina, String grupo_muscular, int tiempo_calentamiento, String primer_ejercicio, String segundo_ejercicio,
            String tercer_ejercicio, int tiempo_descanso, String duracion_rutina)
        {
            this.Tipo_rutina = tipo_rutina;
            this.Grupo_muscular = grupo_muscular;
            this.Tiempo_calentamiento = tiempo_calentamiento;
            this.Primer_ejercicio = primer_ejercicio;
            this.Segundo_ejercicio = segundo_ejercicio;
            this.Tercer_ejercicio = tercer_ejercicio;
            this.Tiempo_descanso = tiempo_descanso;
            this.Duracion_rutina= duracion_rutina;
        }

        override
        public String ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("Tipo de rutina: " + Tipo_rutina + "\n");
            sb.Append("\tGrupo muscular: " + Grupo_muscular + "\n");
            sb.Append("\tTiempo calentamiento: " + Tiempo_calentamiento + "\n");
            sb.Append("\tPrimer ejercicio: " + Primer_ejercicio + "\n");
            sb.Append("\tSegundo ejercicio: " + Segundo_ejercicio + "\n");
            sb.Append("\tTercer ejercicio: " + Tercer_ejercicio + "\n");
            sb.Append("\tTiempo de descanso entre series: " + Tiempo_descanso + "\n");
            sb.Append("\tDuración total de la rutina = " + Duracion_rutina + "\n");
            return sb.ToString();
        }

    }
}

<?xml version="1.0" encoding="UTF-8"?>
<!-- TRANSFORMO EL XML A HTML CON ESTE ARCHIVO XSL UTILIZANDO EL NAVEGADOR EDGE -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="html" version="5.0" encoding="utf-8" indent="yes"/>

	<xsl:template match="rutas">
		<xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html></xsl:text>
		<html lang="es">
			<head>
				<title><xsl:text>La Asturias más profunda</xsl:text></title>
				<meta name="description" content="Rutas turísticas por Asturias"/>
				<meta name="keywords" content="Asturias, Gijón, Oviedo, turismo, norte"/>
				<meta name="author" content="Marcos Matilla"/>
				<link rel="stylesheet" type="text/css" href="estilo.css"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</head>
			<body>
				<header>
					<h1><xsl:text>RUTAS ASTURIANAS</xsl:text></h1>
					<h2><xsl:text>Algunas de las rutas que no te puedes perder este verano si visitas Asturias</xsl:text></h2>
				</header>
				<main>
					<xsl:for-each select="ruta">
						<section class="ruta">
							<h3>
								<xsl:value-of select="@nombre"/>
							</h3>
							<p><span><xsl:text>¿Qué tenemos que saber acerca de la ruta?</xsl:text></span></p>
							<ul>
								<li><span><xsl:text>Tipo de ruta</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="tipo_ruta"/></li>
								<li><span><xsl:text>Medio de transporte</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="medio_transporte"/></li>
								<li><span><xsl:text>Fecha de inicio</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="fecha_inicio"/></li>
								<li><span><xsl:text>Hora de inicio</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="hora_inicio"/></li>
								<li><span><xsl:text>Duración</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="tiempo_duracion"/></li>
								<li><span><xsl:text>Agencia</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="agencia_gestion"/></li>
								<li><span><xsl:text>Descripción</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="descripcion"/></li>
							</ul>
							<span><xsl:text>¿Podré con la ruta?</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="personas_adecuadas"/>
							<p><span><xsl:text>¿Dónde comenzará nuestra aventura?</xsl:text></span></p>
							<ul>
								<li><span><xsl:text>Lugar de inicio</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="lugar_inicio_ruta"/></li>
								<li><span><xsl:text>Dirección</xsl:text></span>
									<xsl:text>: </xsl:text><xsl:value-of select="direccion_inicio"/></li>
								<li><span><xsl:text>Coordenadas</xsl:text></span>
									<xsl:text>:</xsl:text>
									<ul>
										<li><xsl:text>Latitud: </xsl:text><xsl:value-of select="coordenadas_inicio//latitud"/></li>
										<li><xsl:text>Longitud: </xsl:text><xsl:value-of select="coordenadas_inicio//longitud"/></li>
										<li><xsl:text>Altitud: </xsl:text><xsl:value-of select="coordenadas_inicio//altitud"/> metros</li>
									</ul></li>
							</ul>
							<p><span><xsl:text>Recomendación de la ruta</xsl:text></span>
								<xsl:text>: </xsl:text><xsl:value-of select="recomendacion"/></p>
							<p><span><xsl:text>Más información:</xsl:text></span></p>
							<ul>
								<xsl:for-each select="referencias//referencia">
									<li>
										<xsl:choose>
											<xsl:when test="contains(@url,'http')">
												<a href="{@url}">
													<xsl:value-of select="@url"/>
												</a>
											</xsl:when>
											<xsl:otherwise>
												<xsl:value-of select="@url"/>
											</xsl:otherwise>
										</xsl:choose>
									</li>
								</xsl:for-each>
							</ul>
							<xsl:for-each select="hitos//hito">
								<p><span><xsl:text>Hito </xsl:text><xsl:value-of select="@numero"/>:</span></p>
								<ul>
									<li><span><xsl:text>Nombre</xsl:text></span>
										<xsl:text>: </xsl:text><xsl:value-of select="nombre"/></li>
									<li><span><xsl:text>Descripción</xsl:text></span>
										<xsl:text>: </xsl:text><xsl:value-of select="descripcion"/></li>
									<li><span><xsl:text>Coordenadas</xsl:text></span>
										<xsl:text>:</xsl:text>
										<ul>
											<li><xsl:text>Latitud: </xsl:text><xsl:value-of select="coordenadas//latitud"/></li>
											<li><xsl:text>Longitud: </xsl:text><xsl:value-of select="coordenadas//longitud"/></li>
											<li><xsl:text>Altitud: </xsl:text><xsl:value-of select="coordenadas//altitud"/> metros</li>
										</ul>
									</li>
									<xsl:if test="distancia_hito_anterior!='0'">
										<li><span class="subr"><xsl:text>Distancia al hito anterior</xsl:text></span>
											<xsl:text>: </xsl:text><xsl:value-of select="distancia_hito_anterior"/></li>
									</xsl:if>
									<li><span class="subr"><xsl:text>Fotografías</xsl:text></span>
										<xsl:text>:</xsl:text>
										<p></p>
										<xsl:for-each select="fotografias//fotografia">
											<img src="{@url}" alt="{@url}" width="400" height="230"></img>
										</xsl:for-each>
									</li>
								</ul>
							</xsl:for-each>
						</section>
					</xsl:for-each>
				</main>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>
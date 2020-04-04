<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template match="rutas">
	<kml xmlns="http://www.opengis.net/kml/2.2">
		<Document>
			<xsl:for-each select="ruta">
				<Folder>
					<name><xsl:value-of select="@nombre"/></name>
					<description><xsl:value-of select="descripcion"/></description>
					<Placemark>
						<name><xsl:value-of select="lugar_inicio"/></name>
						<Point>
							<coordinates><xsl:value-of select="coordenadas_inicio//longitud"/>
							<xsl:text>,</xsl:text>
							<xsl:value-of select="coordenadas_inicio//latitud"/>
							<xsl:text>,</xsl:text>
							<xsl:value-of select="coordenadas_inicio//altitud"/></coordinates>
							<altitudeMode>absolute</altitudeMode>
						</Point>
					</Placemark>
					<xsl:for-each select="hitos//hito">
							<Placemark>
							<name><xsl:value-of select="nombre"/></name>
							<description><xsl:value-of select="description"/></description>
							<Point>
								<coordinates><xsl:value-of select="coordenadas//longitud"/>
								<xsl:text>,</xsl:text>
								<xsl:value-of select="coordenadas//latitud"/>
								<xsl:text>,</xsl:text>
								<xsl:value-of select="coordenadas//altitud"/></coordinates>
								<altitudeMode>absolute</altitudeMode>
							</Point>
						</Placemark>
					</xsl:for-each>
					<Placemark>
						<name><xsl:value-of select="@nombre"/></name>
						<LineString>
							<coordinates>
								<xsl:value-of select="coordenadas_inicio//longitud"/>
								<xsl:text>,</xsl:text>
								<xsl:value-of select="coordenadas_inicio//latitud"/>
								<xsl:text>,</xsl:text>
								<xsl:value-of select="coordenadas_inicio//altitud"/>
								<xsl:text>	</xsl:text>
								<xsl:for-each select="hitos//hito">
									<xsl:value-of select="coordenadas//longitud"/>
									<xsl:text>,</xsl:text>
									<xsl:value-of select="coordenadas//latitud"/>
									<xsl:text>,</xsl:text>
									<xsl:value-of select="coordenadas//altitud"/>
									<xsl:text>	</xsl:text>
								</xsl:for-each>
							</coordinates>
						</LineString>
					</Placemark>
				</Folder>
			</xsl:for-each>
		</Document>
	</kml>
	</xsl:template>
</xsl:stylesheet>
//vertex program



void main()
{
	gl_TexCoord[0]=gl_MultiTexCoord0;
// pour bien faire, il faudrait plutot écrire 
// gl_TexCoord[0] = gl_TextureMatrix[0] * gl_MultiTexCoord0;

	vec4 positionMonVertex = gl_ModelViewMatrix*gl_Vertex;

	positionMonVertex.y = cos(positionMonVertex.x);

//	gl_Position = gl_ModelViewProjectionMatrix*positionMonVertex;
// synonyme de :
	gl_Position = gl_ProjectionMatrix*positionMonVertex;

}
// gl_MultiTexCoord0; moyen de récupérer les coordonnées de texture
// gl_TextCoord[0] permet de récupérer le fragment directement sans passer par du varying
// gl_Vertex les coordonnées de mon objet 

// avec le sinus tous les point sont écrasés sous forme d'une ligne

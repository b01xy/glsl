//vertex program

uniform sampler2D BTex0;
// varying vec4 passColorB;
uniform float zdeform;

void main()
{

	gl_TexCoord[0] = gl_TextureMatrix[0]*gl_MultiTexCoord0;

	vec4 colorB = texture2D(BTex0, (gl_TextureMatrix[0]*gl_MultiTexCoord0).st);
// on récup la texture
//	passColorB = colorB;
	vec4 postVertB = gl_Vertex;
// on récup les coordonnées de l'objet dans l'espace objet
	postVertB.z = (colorB.r+colorB.g+colorB.b)/3*zdeform;
// on change les coordonnées en z avec la couleur rouge

	gl_Position = gl_ModelViewProjectionMatrix*postVertB;

}


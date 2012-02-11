//vertex program

uniform sampler2D Tex0;
uniform float amplitude;

void main()
{
	gl_TexCoord[0] = gl_TextureMatrix[0]*gl_MultiTexCoord0;
	vec4 color = texture2D(Tex0, (gl_TextureMatrix[0]*gl_MultiTexCoord0).st);
	vec4 posVert = gl_Vertex;
	posVert.z = color.r*amplitude;
	
	gl_Position=gl_ModelViewProjectionMatrix*posVert;
}

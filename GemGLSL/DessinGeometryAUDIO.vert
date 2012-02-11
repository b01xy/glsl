// vertex
uniform sampler2D Tex0;
uniform sampler2D Tex1;
// varying vec4
uniform float txdeform;

void main() 
{
	gl_TexCoord[0]=gl_TextureMatrix[0]*gl_MultiTexCoord0;
	vec4 color = texture2D(Tex0, gl_TexCoord[0].st);
	vec4 colorSound = texture2D(Tex1, gl_TexCoord[0].st);

	gl_FrontColor=color; 
	vec4 posVert = gl_Vertex;
	posVert.z = length(colorSound.rgb)*2.0-1.0;
	posVert.z *= txdeform;
	posVert.z += -txdeform;
	gl_Position = posVert;
}

// vertex
uniform sampler2D Tex0;

void main() 
{
	gl_TexCoord[0]=gl_TextureMatrix[0]*gl_MultiTexCoord0;
	vec4 color = texture2D(Tex0, gl_TexCoord[0].st);
//option2 gl_FrontColor à virer
	gl_FrontColor=color; 
	vec4 posVert = gl_Vertex;
//	posVert.z = sin(posVert.y*2.0)*0.5;
	posVert.z = color.r*1.0;
	gl_Position = gl_ModelViewProjectionMatrix*posVert;
}

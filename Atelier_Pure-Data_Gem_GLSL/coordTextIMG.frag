//fragment program

uniform sampler2D TTex0;

void main()
{
	vec4 macolor = texture2D(TTex0,gl_TexCoord[0].st);
	gl_FragColor = macolor;
}
// gl_TextCoord[0].st 


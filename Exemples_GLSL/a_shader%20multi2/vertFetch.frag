//fragment program

//varying vec4 passColor;
uniform sampler2D Tex1;

void main()
{
	vec4 colorB = texture2D (Tex1, gl_TexCoord[0].st);
	gl_FragColor = colorB;
}

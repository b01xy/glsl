//fragment program
// varying vec4 passColorB;
uniform sampler2D Tex1;

void main()
{
	vec4 colorC = texture2D(Tex1, gl_TexCoord[0].st);
	gl_FragColor = colorC;
}
// on peut mettre vec4(1.0,0.0,0.0,1.0) à la place du passColorB pour voir relief en rouge sans image
